import { Controller, Get, Param } from '@nestjs/common';
import { Body, Post, Put } from '@nestjs/common/decorators';
import { ClientViewMapper } from './client.view';
import { CreateClientBody } from './dtos/createClient.body';
import { UpdateClientBody } from './dtos/updateClient.body';
import { CreateNewClient } from './services/create-new.service';
import { ListAllClients } from './services/list-all.service';
import { UpdateClient } from './services/update-client.service';

@Controller('clients')
export class ClientsController {

    constructor(
        private readonly listAllClients: ListAllClients,
        private readonly createClients: CreateNewClient,
        private readonly updateClients: UpdateClient,
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

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateClientBody) {
        const { name } = body;
        const { client } = await this.updateClients.execute({
            name,
            id: Number(id),
        });
        return ClientViewMapper.toHTTP(client);
    }

}
