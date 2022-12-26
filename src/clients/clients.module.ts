import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/typeorm/database.module';
import { TypeOrmClientsRepository } from 'src/infra/database/typeorm/repositories/client.repository';
import { ClientsController } from './clients.controller';
import { ClientsRepository } from './clients.repository';
import { CreateNewClient } from './services/create-new.service';
import { ListAllClients } from './services/list-all.service';
import { UpdateClient } from './services/update-client.service';

@Module({
    imports: [DatabaseModule],
    controllers: [ClientsController],
    providers: [
        ListAllClients,
        CreateNewClient,
        UpdateClient,
        {
            provide: ClientsRepository,
            useClass: TypeOrmClientsRepository
        }
    ]
})
export class ClientsModule { }
