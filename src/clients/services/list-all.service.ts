import { Injectable } from "@nestjs/common";
import { Client } from "../client.class";
import { ClientsRepository } from "../clients.repository";

interface IListAllClientsResponse {
    clients: Client[]
}

@Injectable()
export class ListAllClients {
    constructor(private clientsRepository: ClientsRepository) { }

    async execute(): Promise<IListAllClientsResponse> {
        
        const clients = await this.clientsRepository.findAll()

        return {
            clients
        }
    }
}