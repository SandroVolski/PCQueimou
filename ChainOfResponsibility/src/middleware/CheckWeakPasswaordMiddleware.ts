import Database from "../server/Database";
import PermissionType from "../server/PermissionType";
import Middleware from "./Middleware";

export default class CheckWeakPasswordMiddleware extends Middleware{
    
    public check(email: any, password: any): boolean {
        const tamanhoSenha = (Database.filter(item => item.password === password));
        if (tamanhoSenha.length < 6) {
            console.log("Senha Inválida Menor 6!");
            return false;
        } 
        return true;
    }
}