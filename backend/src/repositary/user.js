import userModel from '../models/user.js';

export const createUser = async (user, member) => {
    try {
        const { _id } = member;
        if (user.isStaff) {
            user = { ...user, staff: _id };
            const userObj = (await userModel.create(user)).populate('staff');
            delete userObj.password;
            return userObj;
        }
        const userObj = (await userModel.create(user)).toObject();
        delete userObj.password;
        return userObj;
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (filters) => {
    try {
        const user = await userModel.findOne(filters);
        if (user.isStaff) {
            
            return user.populate('staff');
        }
        return user;
    } catch (error) {
        console.log(error);
    }
};
