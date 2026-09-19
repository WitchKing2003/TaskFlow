// src/routes/index.js
const express = require("express");
const router = express.Router();

// 1. Import tất cả router con
const authRouter = require("./authRouter");
const workspaceRouter = require("./workspaceRouter");
const projectRouter = require("./projectRouter");
const columnRouter = require("./columnRouter");
const taskRouter = require("./taskRouter");

const authMiddleware = require("../middlewares/authMiddleware");

// --- KHU VỰC CÔNG KHAI (Public) ---
// Bất kỳ ai cũng truy cập được để đăng ký/đăng nhập
router.use("/auth", authRouter);

// --- CHỐT CHẶN BẢO VỆ (Auth Guard) ---
// Tất cả các route khai báo bên dưới dòng này đều bắt buộc phải đăng nhập
router.use(authMiddleware);

// --- KHU VỰC BẢO MẬT (Protected) ---
router.use("/workspaces", workspaceRouter);
router.use("/projects", projectRouter);
router.use("/columns", columnRouter);
router.use("/tasks", taskRouter);

module.exports = rootRouter;