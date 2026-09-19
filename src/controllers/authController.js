const authServices = require("../utils/services/authServices");
import { isValid } from './../../node_modules/ipaddr.js/lib/ipaddr.js.d';
const jwt = require("jsonwebtoken");

class authController {
    async register(req, res, next) {
        try {
            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin" });
            }

            const result = await authService.register({ name, email, password });

            return res.status(201).json({
                message: "Đăng ký thành công",
                data: result,
            });

        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const { name, password } = req.body;
            if (!name || !password) {
                return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin" });
            }
            const { token, user } = await authService.login({ name, password });

            return res.status(200).json({
                message: "Đăng nhập thành công",
                accessToken: token, 
                data: {
                    user,
                },
            });

        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            return res.status(200).json({ message: 'Đăng xuất thành công' });
        } catch (error) {
            next(error)
        }
    }

    async personal(req, res, next) {
        try {
            const userId = req.user.id;
            const user = userService.personal(userId);
            return res.status(200).json({
                message: "Lấy thông tin cá nhân thành công",
                data: user,
            })
        } catch {
            next(error);
        }
    }

    async changePassword(req, res, next) {
        try {
            const userId = req.user.id;
            const { currentPassword, newPassword } = req.body;

            if (!currentPassword || !newPassword) {
                return res.status(400).json({
                    message: "Vui lòng nhập mật khẩu hiện tại và mật khẩu mới",
                });
            }

            await userService.changePassword({ userId, currentPassword, newPassword });

            return res.status(200).json({
                message: "Đổi mật khẩu thành công",
            });
        } catch (error) {
            next(error);
        }
    }

    async forgot_password(req, res, next) {
        try {
            const { user, email } = req.body;
            const res = await authServices.getUser(user, email);
            const passTemporary = await authServices.changePassword(user, email);
            return res.status(200).json({
                message: "Đổi mật khẩu thành công",
            });

        } catch (error) {
            next(error);
        }
    }

}

module.exports = authController;