import Database from "../server/Database";
import Middleware from "./Middleware";

export default class CheckUserMiddleware extends Middleware{
    
    public check(email: any, password: any): boolean {
        if (email.indexOf("@") === -1){
            console.log("Formato de email invalido");
            return false;
        }
        const verificarEmail = (Database.filter(item => item.email === email));
        if (!verificarEmail.length) {
            console.log("Email Inválido!");
            return false;
        }

        const verificarSenha = (Database.filter(item => item.password === password));
        if (!verificarSenha.length) {
            console.log("Senha Inválida!");
            return false;
        }
        return this.checkNext(email, password);
    }
}