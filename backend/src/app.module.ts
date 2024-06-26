import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { PanierModule } from './panier/panier.module';

import {RestoModule } from './resto/resto.module';
import { PaypalModule } from './paypal/paypal.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: "postgres",
      password: "04940043",
      database: "PizzaTimeDB",
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    UsersModule,
    PanierModule,
    RestoModule, 
    PaypalModule

  ],

  controllers: [AppController],

  providers: [AppService],
})




export class AppModule {}
