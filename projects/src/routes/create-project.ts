import { Router } from "express";
import { createProject } from "../controllers/create-project";
import { currentUser, requireAuth, validateRequest } from "@cioran/common";
import { projectValidation } from "../validation/projectValidation";

const router = Router();

router
  .route("/api/projects/")
  .post(
    currentUser,
    requireAuth,
    projectValidation,
    validateRequest,
    createProject
  );

export { router as createProjectRouter };
