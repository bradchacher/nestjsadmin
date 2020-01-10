import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { getMetadataArgsStorage } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target)
    }),
    TasksModule
  ],
})
export class AppModule {}
