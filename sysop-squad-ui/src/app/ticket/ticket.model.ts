import { Status } from "./status.model";

export class Ticket{
     id: string = "";
     name: string ="";
     description: string ="";
     username: string| null ="";
    idUser : string ="";
    idAgent: string = ""
     agent: string = "";
     city: string = "";
     state : string = "";
     Status: Status = Status.New;
    constructor (){}
}