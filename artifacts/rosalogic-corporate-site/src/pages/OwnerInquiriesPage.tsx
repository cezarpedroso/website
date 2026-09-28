import { useEffect, useState } from 'react';
import { useAuth, useClerk } from '@clerk/react';
import { useQueryClient } from '@tanstack/react-query';
import { ArrowDownLeft, ArrowLeft, ArrowUpRight, Check, CircleAlert, Inbox, LockKeyhole, LogOut, Mail, RefreshCw, RotateCcw } from 'lucide-react';
import { getListOwnerInquiriesQueryKey, useListOwnerInquiries, useRetryOwnerInquiry, useReviewOwnerInquiry } from '@workspace/api-client-react';
import type { ListOwnerInquiriesView, OwnerInquiry } from '@workspace/api-client-react';
import { Link } from 'wouter';
import footerLogo from '@assets/footer_1790418113742.png';

const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

function dateText(value: string | null, long = false) {
  if (!value) return 'Not recorded';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return 'Not recorded';
  return new Intl.DateTimeFormat('en-US', long
    ? { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }
    : { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
}

const deliveryDetails: Record<OwnerInquiry['deliveryState'], { label: string; title: string; description: string }> = {
  unsent: { label: 'Not sent', title: 'Notification not sent', description: 'The inquiry is safely stored, but the notification was not sent. You can retry it once.' },
  sending: { label: 'Review required', title: 'Send outcome unknown', description: 'A send was started but not confirmed. It may have completed. Check your inbox before handling this inquiry; retry is disabled to prevent duplicates.' },
  sent: { label: 'Sent', title: 'Notification sent', description: 'The email notification was sent. The inquiry remains available here for reference.' },
  uncertain: { label: 'Uncertain', title: 'Delivery unconfirmed', description: 'The delivery outcome could not be confirmed. Do not retry here; another notification may already have been delivered.' },
};

function DeliveryBadge({ state }: { state: OwnerInquiry['deliveryState'] }) {
  return <span className={`owner-status owner-status--${state}`} data-testid={`status-delivery-${state}`}>{deliveryDetails[state].label}</span>;
}

function InquiryWorkspace() {
  const [view, setView] = useState<ListOwnerInquiriesView>('pending');
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [actionError, setActionError] = useState('');
  const queryClient = useQueryClient();
  const { signOut } = useClerk();
  const inquiriesQuery = useListOwnerInquiries({ view, page }, { query: { queryKey: getListOwnerInquiriesQueryKey({ view, page }), retry: false, refetchOnWindowFocus: false } });
  const retryInquiry = useRetryOwnerInquiry();
  const reviewInquiry = useReviewOwnerInquiry();
  const inquiries = inquiriesQuery.data ?? [];
  const selected = inquiries.find((inquiry) => inquiry.id === selectedId) ?? inquiries[0];
  const pendingAction = retryInquiry.isPending || reviewInquiry.isPending;
  const status = inquiriesQuery.error?.status;

  useEffect(() => {
    document.title = 'Owner inquiries | ROSALOGIC';
    document.querySelector('meta[name="robots"]')?.setAttribute('content', 'noindex, nofollow');
  }, []);

  const refresh = () => {
    setActionError('');
    void inquiriesQuery.refetch();
  };

  const updateAfterAction = () => {
    setActionError('');
    void queryClient.invalidateQueries({ queryKey: ['/api/owner/inquiries'] });
  };

  const handleRetry = (inquiry: OwnerInquiry) => {
    if (inquiry.deliveryState !== 'unsent' || pendingAction) return;
    if (!window.confirm('Retry the notification for this inquiry? This is only available when delivery is known not to have occurred.')) return;
    setActionError('');
    retryInquiry.mutate({ id: inquiry.id }, {
      onSuccess: updateAfterAction,
      onError: (error) => setActionError(error.status === 409
        ? 'Delivery state changed. Refresh the inbox before trying again.'
        : 'Could not retry the notification. The inquiry remains safely stored.'),
    });
  };

  const handleReview = (inquiry: OwnerInquiry) => {
    if (inquiry.reviewedAt || pendingAction) return;
    setActionError('');
    reviewInquiry.mutate({ id: inquiry.id }, {
      onSuccess: updateAfterAction,
      onError: () => setActionError('Could not mark this inquiry as reviewed. Please try again.'),
    });
  };

  return (
    <div className="owner-shell">
      <aside className="owner-rail" aria-label="Owner workspace">
        <div>
          <Link href="/" aria-label="ROSALOGIC home" data-testid="link-owner-home"><img className="owner-rail-logo" src={footerLogo} alt="ROSALOGIC" /></Link>
          <p className="owner-rail-caption">Private workspace / 01</p>
          <nav className="owner-rail-nav"><Link href="/owner/inquiries" className="owner-rail-link" aria-current="page" data-testid="link-owner-inquiries"><Inbox size={16} strokeWidth={1.6} /> Inquiries</Link></nav>
        </div>
        <div className="owner-rail-bottom">
          <p>Website inquiries are stored here independently of email delivery.</p>
          <Link href="/" data-testid="link-owner-back"><ArrowLeft size={13} /> Back to website</Link>
          <button type="button" onClick={() => void signOut({ redirectUrl: basePath || '/' })} data-testid="button-owner-sign-out"><LogOut size={13} /> Sign out</button>
        </div>
      </aside>
      <main className="owner-main" id="owner-main">
        <div className="owner-topline"><span>ROSALOGIC / Owner workspace</span><span>Private access</span></div>
        <div className="owner-heading">
          <div>
            <div className="owner-kicker">Correspondence / 01</div>
            <h1>Inquiry <em>review.</em></h1>
            <p>Every website inquiry, in one dependable place. Email is a notification, not the record.</p>
          </div>
          {!inquiriesQuery.isLoading && !inquiriesQuery.isError && <div className="owner-count"><strong data-testid="text-inquiry-count">{inquiries.length}</strong><span>{view === 'pending' ? 'Awaiting review on this page' : 'On this page'}</span></div>}
        </div>
        <div className="owner-toolbar">
          <div className="owner-tabs" role="tablist" aria-label="Inquiry view">
            {(['pending', 'all'] as const).map((item) =>
              <button key={item} type="button" role="tab" aria-selected={view === item} className="owner-tab" data-testid={`button-view-${item}`} onClick={() => { setView(item); setPage(1); setSelectedId(null); setActionError(''); }}>{item === 'pending' ? 'Pending' : 'All inquiries'}</button>
            )}
          </div>
          <button type="button" className="owner-refresh" onClick={refresh} disabled={inquiriesQuery.isFetching} data-testid="button-refresh-inquiries"><RefreshCw size={13} /> Refresh</button>
        </div>
        {actionError && <div className="owner-notice" role="alert" data-testid="status-action-error"><CircleAlert size={16} />{actionError}</div>}
        {inquiriesQuery.isLoading ? (
          <div className="owner-content" aria-label="Loading inquiries">
            <div className="owner-list"><div className="owner-list-label">Loading correspondence</div>{[1, 2, 3].map((item) => <div className="owner-skeleton" key={item} />)}</div>
            <div className="owner-detail"><div className="owner-skeleton" style={{ height: 260, margin: 0 }} /></div>
          </div>
        ) : inquiriesQuery.isError ? (
          <div className="owner-content"><div className="owner-state" style={{ gridColumn: '1 / -1' }}>
            {status === 403 ? <LockKeyhole size={25} strokeWidth={1.4} /> : <CircleAlert size={25} strokeWidth={1.4} />}
            <h2 data-testid="status-inquiries-error">{status === 403 ? 'Access is restricted.' : status === 401 ? 'Session not recognized.' : 'The inbox is unavailable.'}</h2>
            <p>{status === 403 ? 'Signing in does not grant owner access. This account is not authorized to review website inquiries.' : status === 401 ? 'Your session could not be verified. Sign in again to access this workspace.' : 'We could not load inquiries right now. Your messages remain stored; try again in a moment.'}</p>
            {status !== 403 && <button type="button" className="owner-action" onClick={refresh} data-testid="button-retry-inquiries"><RefreshCw size={14} /> Try again</button>}
          </div></div>
        ) : inquiries.length === 0 ? (
           <div className="owner-content"><div className="owner-state" style={{ gridColumn: '1 / -1' }}><Inbox size={27} strokeWidth={1.3} /><h2 data-testid="status-inquiries-empty">{page > 1 ? 'End of correspondence.' : view === 'pending' ? 'All caught up.' : 'No inquiries yet.'}</h2><p>{page > 1 ? 'There are no more inquiries on this page.' : view === 'pending' ? 'There are no inquiries awaiting review. You can find earlier correspondence in All inquiries.' : 'New website inquiries will appear here as soon as they are received.'}</p>{page > 1 ? <button type="button" className="owner-action owner-action--outline" onClick={() => setPage(page - 1)}>Previous page</button> : view === 'pending' && <button type="button" className="owner-action owner-action--outline" onClick={() => setView('all')} data-testid="button-show-all-inquiries">View all inquiries <ArrowUpRight size={13} /></button>}</div></div>
        ) : (
          <div className="owner-content">
            <div className="owner-list" role="listbox" aria-label="Inquiries">
              <div className="owner-list-label">{view === 'pending' ? 'Awaiting review' : 'All correspondence'} · Newest first</div>
              {inquiries.map((inquiry) => <button type="button" role="option" aria-selected={selected?.id === inquiry.id} className="owner-row" key={inquiry.id} onClick={() => { setSelectedId(inquiry.id); setActionError(''); }} data-testid={`button-select-inquiry-${inquiry.id}`}>
                <span className="owner-row-top"><span className="owner-row-name" data-testid={`text-inquiry-name-${inquiry.id}`}>{inquiry.name}</span><span className="owner-row-date">{dateText(inquiry.createdAt)}</span></span>
                <span className="owner-row-company">{inquiry.company || 'Individual inquiry'}</span>
                <span className="owner-row-preview">{inquiry.message}</span>
                <span className="owner-row-foot"><DeliveryBadge state={inquiry.deliveryState} /><small>{inquiry.reviewedAt ? 'Reviewed' : 'Needs review'}</small></span>
              </button>)}
            </div>
            {selected && <article className="owner-detail" aria-label={`Inquiry from ${selected.name}`} key={selected.id}>
              <div className="owner-detail-top"><span>INQUIRY / {String(selected.id).padStart(4, '0')}</span><span>{dateText(selected.createdAt, true)}</span></div>
              <h2 data-testid="text-selected-inquiry-name">{selected.name}</h2>
              <p className="owner-detail-company" data-testid="text-selected-inquiry-company">{selected.company || 'Individual inquiry'}</p>
              <div className="owner-meta">
                <div><span className="owner-meta-label">Reply address</span><span className="owner-meta-value"><a href={`mailto:${selected.email}`} data-testid="link-selected-email">{selected.email}</a></span></div>
                <div><span className="owner-meta-label">Review status</span><span className="owner-meta-value" data-testid="status-review">{selected.reviewedAt ? `Reviewed ${dateText(selected.reviewedAt, true)}` : 'Awaiting review'}</span></div>
              </div>
              <span className="owner-message-label">Message</span>
              <p className="owner-message" data-testid="text-selected-inquiry-message">{selected.message}</p>
              <div className="owner-delivery"><strong>Delivery / {deliveryDetails[selected.deliveryState].title}</strong><p>{deliveryDetails[selected.deliveryState].description}{selected.notificationSentAt ? ` Notification sent ${dateText(selected.notificationSentAt, true)}.` : ''}</p></div>
              <div className="owner-actions">
                <a className="owner-action" href={`mailto:${selected.email}?subject=${encodeURIComponent(`Re: Your inquiry to ROSALOGIC`)}`} data-testid="link-reply-inquiry"><Mail size={14} /> Reply by email <ArrowUpRight size={13} /></a>
                {!selected.reviewedAt && <button type="button" className="owner-action owner-action--outline" onClick={() => handleReview(selected)} disabled={pendingAction} data-testid="button-review-inquiry"><Check size={14} /> {reviewInquiry.isPending ? 'Saving…' : 'Mark reviewed'}</button>}
                {selected.deliveryState === 'unsent' && <button type="button" className="owner-action owner-action--outline" onClick={() => handleRetry(selected)} disabled={pendingAction} data-testid="button-retry-notification"><RotateCcw size={14} /> {retryInquiry.isPending ? 'Retrying…' : 'Retry notification'}</button>}
              </div>
            </article>}
          </div>
        )}
        {!inquiriesQuery.isError && !inquiriesQuery.isLoading && inquiries.length > 0 && <nav className="owner-pages" aria-label="Inquiry pages">
          <button type="button" disabled={page === 1} onClick={() => { setPage(page - 1); setSelectedId(null); }}>Previous</button>
          <span>Page {page}</span>
          <button type="button" disabled={inquiries.length < 100} onClick={() => { setPage(page + 1); setSelectedId(null); }}>Next</button>
        </nav>}
        <div className="owner-topline" style={{ borderBottom: 0, paddingTop: 22 }}><span>Stored independently of notification delivery</span><span><ArrowDownLeft size={12} /> End of correspondence</span></div>
      </main>
    </div>
  );
}

export function OwnerInquiriesPage() {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return <div className="owner-auth"><div className="owner-auth-side" /><div className="owner-auth-form"><div className="owner-skeleton" style={{ width: 320, height: 220 }} /></div></div>;
  if (!isSignedIn) return <div className="owner-auth"><div className="owner-auth-side"><img src={footerLogo} alt="ROSALOGIC" /><div className="owner-auth-copy"><span>Private workspace</span><h1>Inquiry <em>review.</em></h1><p>Sign in to request access to the owner workspace. Authorization is checked separately for every inquiry request.</p></div><footer><span>ROSALOGIC / Business systems & technology</span></footer></div><div className="owner-auth-form"><div className="owner-state"><LockKeyhole size={26} /><h2>Sign in required.</h2><p>This workspace requires an authenticated session. Access to inquiries is separately restricted to the verified owner.</p><Link href="/sign-in" className="owner-action" data-testid="link-owner-sign-in">Sign in <ArrowUpRight size={14} /></Link><Link href="/" className="owner-action owner-action--outline" style={{ marginTop: 10 }} data-testid="link-owner-public-site">Back to website</Link></div></div></div>;
  return <InquiryWorkspace />;
}