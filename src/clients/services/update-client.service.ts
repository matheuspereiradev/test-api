import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";
import { Client } from "../client.class";
import { ClientsRepository } from "../clients.repository";

export interface IUpdateClientRequest {
    name: string,
    id: number
}

export interface IUpdateClientResponse {
    client: any
}

@Injectable()
export class UpdateClient {
    constructor(private clientsRepository: ClientsRepository) { }

    async execute(data: IUpdateClientRequest): Promise<IUpdateClientResponse> {

        const { name, id } = data;

        const client = await this.clientsRepository.findById(id);

        client.name = name;

        await this.clientsRepository.save(client);

        return {
            client
        }
    }
}