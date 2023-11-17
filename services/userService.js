const User = require('../models/user');

class UserService{
    //유효성 검사 이메일 겹치는지 등등
    static async addUser({name, id, pwd, phone, birth, gender, companionName, companionPhone}){
        console.log("id: ",id);
        const newUser = await User.create({
            id: id ,
            pwd: pwd,
            name: name,
            phone: phone,
            birth: birth,
            gender: gender,
            companionName: companionName,
            companionPhone: companionPhone,
        })
        return newUser
    }

}
module.exports = UserService;