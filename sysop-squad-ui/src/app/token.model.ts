export class Token{
    expiration: string;
    token: string;

    constructor(expiration:string, token: string){
        this.expiration = expiration;
        this.token = token;
    }
}