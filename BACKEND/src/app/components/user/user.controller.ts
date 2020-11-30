import { User } from "../../models/user.model";
import UserRepository from "./user.repository";



function addUser(usuario: User): Promise<User> {
    if (!usuario.nombre) {
        usuario.nombre = "John Doe";
    } 
    
    return UserRepository.addUser(usuario);
}

async function getUsers(): Promise<User[]> {
    return (await UserRepository.getUsers()).reverse();
}

async function getUserByEmail(email:string) {
    return UserRepository.getUserByEmail(email);
}

async function getUserById(_id: string) {
    return UserRepository.getUserById(_id);
}

async function deleteUser(_id: string): Promise<User> {
    return UserRepository.deleteUser(_id);
}

async function putUser(_id: string, user: User): Promise<User> {
    return UserRepository.putUser(_id, user);
}

async function getUserByNick(nick:string) {
    return UserRepository.getUserByNick(nick);
}

export default { addUser, getUsers, getUserById, getUserByEmail, deleteUser, putUser, getUserByNick };
