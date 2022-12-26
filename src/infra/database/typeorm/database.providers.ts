import { join } from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'db_central_api',
        entities: [
          join(__dirname, '**', '*.entity.{ts,js}')
        ]
      });

      return dataSource.initialize();
    },
  },
];
