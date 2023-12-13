//커트롤러 역할
//req수신
//req 데이터 및 내용 검증
//서버에서 수행된 결과 클라이언트에게 반환(res)

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
    static async loginUser(req,res,next){
        try {
            // const {userId, userPwd, userName, userPhone, userGender, userBirth, userCompanionName, userCompanionPhone} = req.body;
            // const tmp = {userId, userPwd, userName, userPhone, userGender, userBirth, userCompanionName, userCompanionPhone};
            const tmp = req.body;
            console.log("tmp: ",tmp);
            const user = await UserService.loginUser(tmp);
            console.log("userControll.loginUser: ", user);
            
            if(user.errorMessage){
                throw new Error(user.errorMessage);
            };
            res.cookie('accessToken', user.accessToken, {
                httpOnly : true,
                secure : false,
                sameSite : 'strict',
            });
            res.cookie('refreshToken', user.refreshToken, {
                httpOnly : true,
                secure : false,
                sameSite : 'strict',
            });
            console.log("req.cookie.accessToken: ", req.cookies.accessToken);
            console.log("req.cookie.accessToken: ", req.cookies.refreshToken);
            res.status(200).end();
        } catch (error) {
            next(error)
        }
    }
    static async detailUser(req, res, next){
        try{
            const id = req.userId;
            console.log(id);
            const user = await UserService.detailUser({id});

            // console.log("res임니다요: ",res);
            res.status(200).json(user)
        }catch(error){
            next(error)
        }
    }
    /** 회원정보 수정 */
    static async setUser(req, res, next){
        try{
            console.log(req.body);
            const id = req.userId;
            const toUpdate = req.body;
            // console.log(props);
            // const toUpdate = {...props};
            console.log("toupdatae:",toUpdate);
            const updateUser = await UserService.setUser({id, toUpdate});
            console.log("유저컨트롤러/업데이트 값: ",updateUser)

            //해당 사용자id로 사용자 정보를 db에서 찾아 업데이트 함 , 업데이트 요소가 없을 시 생략
            res.status(200).send("수정되었습니다");
        }catch(error){
            next(error)
        }
    }
}
module.exports = UserController;