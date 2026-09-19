const express = require("express");
const router = express.Router();

router.get("/", projectController.getWorkSpace);
router.post("/", workspacesController.createWorkspace);

router.get("/:workspaceId", workspacesController.getWorkspaceById);
router.patch("/:workspaceId", workspacesController.updateWorkspace);
router.delete("/:workspaceId", workspacesController.deleteWorkspace);

router.get("/:workspaceId/members", workspacesController.getWorkspaceMembers);
router.post("/:workspaceId/invitation", workspacesController.inviteMember);
router.patch("/:workspaceId/members/:userId", workspacesController.updateMemberRole);
router.delete("/:workspaceId/members/:userId", workspacesController.removeWorkspaceMember);

module.exports = projectsRouter;
