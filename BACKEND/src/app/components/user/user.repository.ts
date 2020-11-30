import { User } from "../../models/user.model";
import userSchema from "./user.schema";


function addUser(usuario: User): Promise<User> {
    return userSchema.create<User>(usuario);
}

async function getUsers(): Promise<User[]> {
    return userSchema.find();
}

async function getUserByEmail(correo:string) {
    return userSchema.findOne({correo: correo}, function(err,obj) { 
        if (err) console.log(err); });
}

async function getUserById(_id: string) {
    return userSchema.findById(_id);
}

async function deleteUser(_id: string): Promise<User> {
    return userSchema.findByIdAndDelete(_id);
}

async function putUser(_id: string, user: User): Promise<User> {
    return userSchema.findByIdAndUpdate(_id, user);
}

async function getUserByNick(nick:string) {
    return userSchema.findOne({nick: nick}, function(err,obj) { 
        if (err) console.log(err); });
}

export default { addUser, getUsers, getUserById, getUserByEmail, deleteUser, putUser, getUserByNick };