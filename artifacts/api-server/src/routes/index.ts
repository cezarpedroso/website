import { Router, type IRouter } from "express";
import healthRouter from "./health";
import contactRouter from "./contact";
import ownerInquiriesRouter from "./owner-inquiries";

const router: IRouter = Router();

router.use(healthRouter);
router.use(contactRouter);
router.use(ownerInquiriesRouter);

export default router;
