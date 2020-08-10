import { UserModel } from "./security/user.model";


export class UsuarioModel{

   id?:string;
   nombre:string;
   apellido:string;
   celular:string;
   email:string;
   pais:string;
   ciudad:string;
   fechaNacimiento:Date;
  
   user:UserModel;
  //foto
  //rol
  //lista de amigos
}