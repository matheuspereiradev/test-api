
import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'src/clients/client.class';
import { ClientsRepository } from 'src/clients/clients.repository';
import { Repository } from 'typeorm';
import { ClientEntity } from '../entities/client.entity';
import { TypeormClientMapper } from '../mappers/clients.mappers';

@Injectable()
export class TypeOrmClientsRepository implements ClientsRepository {
    constructor(
        @Inject('CLIENTS_REPOSITORY')
        private clientsRepository: Repository<ClientEntity>,
    ) { }

    async create(client: Client): Promise<void> {
        const data = TypeormClientMapper.toTypeOrm(client)

        await this.clientsRepository.save(data)
    }
    
    async save(client: Client): Promise<void> {
        const data = TypeormClientMapper.toTypeOrm(client)

        await this.clientsRepository.save(data)
    }

    async findById(id: number): Promise<Client> {
        const client = await this.clientsRepository.findOne({
            where: {
                id
            }
        })

        return TypeormClientMapper.toDomain(client)
    }

    async findAll(): Promise<Client[]> {
        const clients = await this.clientsRepository.find()

        return clients.map(client => TypeormClientMapper.toDomain(client))
    }

}