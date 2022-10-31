import { badAuthentication } from '../errors/badAuth.js';
import bcrypt from 'bcrypt';
import { createUser, getUser } from '../repositary/user.js';
import { findOne } from '../controllers/staff.js';

export const authRegister = async (data) => {
    try {
        const { username, password, photoURL, email, nic } = data;
        if (!username || !password || !email || !nic) return {status: 400, message: 'Please provide required fields.....'}

        let member;
        if (nic)  member = await findOne({ nic: nic });
        if(!member) return {status:400, message:"Please contact HR department to verify your details..."}

        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
        const hashedPassword = await bcrypt.hash(password, salt);
        const userObject = { ...data, password: hashedPassword };
        const result = await createUser(userObject, member);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const authLogin = async (data) => {
    const { email, password } = data;
    if (!email || !password) return {status: 400, message: 'Please provide username and password.....'}
    const user = await getUser({ email });
    if (!user) return {status: 400, message: 'Username or password incorrect...'}
    const compareHashedPassword = await bcrypt.compare(password, user.password);
    if (!compareHashedPassword) return {status: 400, message: 'Username or password incorrect...'}
    return user;
};
