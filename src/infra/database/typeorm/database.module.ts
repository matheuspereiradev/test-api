import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { clientProviders } from './providers/client.providers';

@Module({
  providers: [
    ...databaseProviders,
    ...clientProviders
  ],
  exports: [
    ...databaseProviders,
    ...clientProviders
  ],
})
export class DatabaseModule {}