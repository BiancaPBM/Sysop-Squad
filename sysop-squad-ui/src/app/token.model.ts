export class Token{
    expiration: string;
    token: string;
    username: string;
    constructor(expiration:string, token: string, name: string){
        this.expiration = expiration;
        this.token = token;
        this.username = name;
    }
}