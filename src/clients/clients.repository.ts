import { Client } from "./client.class";

export abstract class ClientsRepository {
    abstract findAll():Promise<Client[]>;
    abstract findById(id:number):Promise<Client>;
    abstract create(client:Client):Promise<void>;
    abstract save(client:Client):Promise<void>;
}