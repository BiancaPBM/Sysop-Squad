import { Status } from "../ticket/status.model";

export class AgentTicket{
    id: string = "";
    name: string ="";
    description: string ="";
    username: string| null ="";
    idUser : string ="";
    idAgent: string = ""
    agent: string = "";
    city: string = "";
    state : string = "";
    status: Status = Status.New;
    fixDescription = "";

    constructor (){}
}