import Middleware from "../middleware/Middleware";

export default class Server {
    private middleware: Middleware;

    setMiddleware(middleware : Middleware) : void {
        this.middleware = middleware;
    }

    logIn(email: String, password: String) : boolean {
        if(this.middleware.check(email, password)) {
            console.log("Usuário Autenticado");
            return true; 
        }
        return false;
    }
}