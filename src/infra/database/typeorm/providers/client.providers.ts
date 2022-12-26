import { DataSource } from 'typeorm';
import { ClientEntity } from '../entities/client.entity';

export const clientProviders = [
  {
    provide: 'CLIENTS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(ClientEntity),
    inject: ['DATA_SOURCE'],
  },
];
