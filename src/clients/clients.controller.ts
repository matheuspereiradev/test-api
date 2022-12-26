import { Controller, Get } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ClientViewMapper } from './client.view';
import { CreateClientBody } from './dtos/createClient.body';
import { CreateNewClient } from './services/create-new.service';
import { ListAllClients } from './services/list-all.service';

@Controller('clients')
export class ClientsController {

    constructor(
        private readonly listAllClients: ListAllClients,
        private readonly createClients: CreateNewClient
    ) { }

    @Get()
    async find() {
        const { clients } = await this.listAllClients.execute()
        return {
            clients: clients.map(client => ClientViewMapper.toHTTP(client))
        }
    }

    @Post()
    async create(@Body() body: CreateClientBody) {
        const { name } = body;
        const { client } = await this.createClients.execute({
            name
        });
        return ClientViewMapper.toHTTP(client);
    }

}
