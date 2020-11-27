import { Noticia } from "../../models/noticia.model";
import { User } from "../../models/user.model";
import UserRepository from "./user.repository";



function addUser(usuario: User): Promise<User> {
    usuario.nombre = "John Doe";
    
    return UserRepository.addUser(usuario);
}

async function getUsers(): Promise<User[]> {
    return UserRepository.getUsers();
}

async function getUserById(_id: string) {
    return UserRepository.getUserById(_id);
}

async function deleteUser(_id: string) {
    return UserRepository.deleteUser(_id);
}

export default { addUser, getUsers, getUserById, deleteUser };