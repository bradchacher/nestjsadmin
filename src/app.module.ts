import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { getMetadataArgsStorage } from 'typeorm';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...typeOrmConfig,
      entities: getMetadataArgsStorage().tables.map(tbl => tbl.target)
    }),
    TasksModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

//Note: entities: getMetadataArgsStorage().tables.map(tbl => tbl.target) solved the typeorm.config bug
//solved the authservice bug by removing it from providers in appmodule and adding it in auth module
//solved the authcontroller bug by removing it from providers in appmodule and adding it in auth module

