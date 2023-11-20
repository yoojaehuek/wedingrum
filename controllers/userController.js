const UserService = require("../services/userService");

class UserController {
    static async addUser(req,res,next){
        try {
            // const {userId, userPwd, userName, userPhone, userGender, userBirth, userCompanionName, userCompanionPhone} = req.body;
            // const tmp = {userId, userPwd, userName, userPhone, userGender, userBirth, userCompanionName, userCompanionPhone};
            const tmp = req.body;
            console.log("tmp: ",tmp);
            const newUser = await UserService.addUser(tmp);
            
            if(newUser.errorMessage){
                throw new Error(newUser.errorMessage)
            }
            res.status(200).json(newUser);

        } catch (error) {
            next(error)
        }
    }
}
module.exports = UserController;