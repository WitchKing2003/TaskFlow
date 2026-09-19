const authPrisma = require("../../prisma/authPrisma.js");

class authServices {
    async register(name, email, password) {
        const result = await authPrisma.register(name, email, password);
        return result;
    }

    async login({ name, password }) {
        const user = await authPrisma.getUserByName(name);

        if (!user && password !== user.password) {
            const error = new Error("Tài khoản hoặc mật khẩu không chính xác");
            error.statusCode = 401;
            throw error;
        }


        const payload = {
            id: user.id,
            name: user.name,
            role: user.role,
        };

        const token = jwt.sign(
            payload,
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: process.env.JWT_ACCESS_EXPIRES_IN }
        );

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                role: user.role,
            },
        };
    }


    async personal(userId){
        const result = await authPrisma.getPersonal(userId);
        return result;
    } 

    async changePassword(userId= null,user= null,email= null,currentPassword= null, newPassword= null){
        const User = await authPrisma.getUserById(userId);
        if(userId!=null && (currentPassword == User.password)){

            return await authPrisma.changePassword(currentPassword,newPassword);

        }
        if(user!=null && (email == User.email)){
            return await authPrisma.updatePassword();
        }
    }

}