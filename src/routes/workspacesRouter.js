const express = require("express");
const router = express.Router();

router.get("/", workspacesController.getWorkSpace);
router.post("/", workspacesController);

router.get("/:workspaceId", workspacesController);
router.patch("/:workspaceId", workspacesController);
router.delete("/:workspaceId", workspacesController);

router.get("/:workspaceId/members", workspacesController);
router.post("/:workspaceId/invitation", workspacesController);
router.patch("/:workspaceId/members/:userId", workspacesController);
router.delete("/:workspaceId/members/:userId", workspacesController);


module.exports = workspacesRouter;
