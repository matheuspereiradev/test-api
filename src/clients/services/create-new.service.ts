import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Client } from "../client.class";
import { ClientsRepository } from "../clients.repository";

export interface ICreateNewClientRequest {
    name: string,
}

export interface ICreateNewClientResponse {
    client: Client
}

@Injectable()
export class CreateNewClient {
    constructor(private clientsRepository: ClientsRepository) { }

    async execute(data: ICreateNewClientRequest): Promise<ICreateNewClientResponse> {

        const { name } = data;
        const key = randomUUID()
        const client = new Client({
            key,
            name,
            active: true
        })

        await this.clientsRepository.create(client)

        return {
            client
        }
    }
}