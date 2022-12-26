import { Client } from "src/clients/client.class";
import { ClientEntity } from "../entities/client.entity";

export class TypeormClientMapper {
    static toDomain(client: ClientEntity): Client {
        return new Client({
            name: client.name,
            active: client.active,
            key: client.key
        }, client.id)
    }

    static toTypeOrm(client: Client) {
        return {
            active: client.active,
            key: client.key,
            name: client.name
        }
    }
}