const User = require('../database/schemas/user');
const UserModel = require('../database/models/userModel')
const crypto = require('crypto');

class UserService{
    //유효성 검사 이메일 겹치는지 등등
    static async addUser({name, id, pwd, phone, birth, gender, companionName, companionPhone}){
        console.log("id: ",id);

        //crypto.randomBytes(128): 길이가 128인 임의의 바이트 시퀀스를 생성
        //.toString('base64'): 임의의 바이트를 base64로 인코딩된 문자열로 변환
        const salt = crypto.randomBytes(128).toString('base64'); 

        // crypto.createHash('sha512'): SHA-512 해시 개체를 생성
        //.update(pwd + salt): 비밀번호( pwd)와 솔트를 연결하여 해시를 업데이트
        //.digest('hex'): 16진수 형식으로 최종 해시를 생성
        const hashPassword = crypto
            .createHash('sha512')
            .update(pwd + salt)
            .digest('hex'); 

        const newUser = {name, id, pwd: hashPassword, salt, phone, birth, gender, companionName, companionPhone}
        
        const createNewUser = await UserModel.createUser({newUser});
        return createNewUser
    }

}
module.exports = UserService;