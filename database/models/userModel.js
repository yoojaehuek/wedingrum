const User = require('../schemas/user'); 

class UserModel {
  static async createUser({newUser}){
    console.log("newUser",newUser);
    const createNewUser = await User.create(newUser);
    return createNewUser;
  }

  static async findOneUserId({id}){
    // console.log("userId",id);
    const user = await User.findOne({
      where: {
        id: id
      }
    }); //where: {id: asdf} 형태가 들어와야함
    return user;
  }

  static async destroyUser({userId}){
    // console.log("userId",userId);
    const user = await User.destroy({
      where: {
        id: userId
      }
    });//where: {id: asdf} 형태가 들어와야함
    return user;
  }

  static async update({_id, fieldToUpdate, newValue}){
    console.log(_id)
    const filter = { id: _id };
    console.log("filter: ",filter);
    const update = { [fieldToUpdate]: newValue };
    console.log("update: ",update);
    const option = {returnOriginal: false};// 이렇게 하면 업데이트 된 데이터를 리턴받음

    // const updateUser = await User.update(update, filter, option);
    const updateUser = await User.update({},{where:{id:filter}});
    console.log("유저모델/업데이트 된 값: ",updateUser);

    return updateUser;
  }
}

module.exports = UserModel; 