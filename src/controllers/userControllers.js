import UserInfos from "../model/user";
import bcrypt from "bcrypt";
class UserController {

    // create user in db
    static async createUser(req, res) {
        const hashPassword = bcrypt.hashSync(req.body.password, 10)
        req.body.password = hashPassword;
        const user = await UserInfos.create(req.body);
        if (!user) {
            return res.status(404).json({ error: "user not registered" })
        }
        return res
            .status(201)
            .json({ message: 'User created successfully', data: user });
    }

    // get all users
    static async getAllUsers(req, res) {
        const users = await UserInfos.find();

        if (!users) {
            return res.status(404).json({ error: "user not retrieved" })
        }
        return res
            .status(200)
            .json({ message: 'successfully retrived users', data: users });
    }
    //get oneUSER
    static async getOneUser(req, res) {
        const user = await UserInfos.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "user not found" });
        }
        return res
            .status(200)
            .json({ message: 'User found', data: user });
    }
    //delete oneUser
    static async deleteOneUser(req, res) {
        const user = await UserInfos.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ error: "user not found" });
        }
        return res
            .status(200)
            .json({ message: 'One data deleted', data: user });
    }
    //login functions
    static async userLogin(req, res) {
        const user = await UserInfos.findOne({email:req.body.email });
        console.log(user)
        if (!user) {
            return res.status(404).json({ error: "user not found!kindly register first" })
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(200).json({ message: "successfully loged in" });

        }
        return res.status(400).json({ error: "password is wrong" });
    }
}
export default UserController;