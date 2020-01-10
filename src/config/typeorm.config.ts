import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path'
import { Task } from 'src/tasks/task.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'taskmanagement',
  entities: [__dirname + '../**/*.entity.ts'],
  //entities: [Task],
  synchronize: true //not required to set to true in production mode
}

