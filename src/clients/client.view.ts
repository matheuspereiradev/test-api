import { Client } from "src/clients/client.class";

export class ClientViewMapper {
    static toHTTP(client: Client) {
        return {
            id: client.id,
            name: client.name,
            key: client.key,
            active: client.active,
        }
    }
}