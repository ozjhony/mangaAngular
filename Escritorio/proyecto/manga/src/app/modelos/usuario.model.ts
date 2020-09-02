import { UserModel } from "./security/user.model";


export class UsuarioModel{

   id?:string;
   nombre:string;
   celular:string;
   email:string;
   pais:string;
   ciudad:string;
   user:UserModel;
  //foto
  //rol
  //lista de amigos
}