import { Client } from "./client.class";

export abstract class ClientsRepository {
    abstract findAll():Promise<Client[]>;
    abstract create(client:Client):Promise<void>;
}