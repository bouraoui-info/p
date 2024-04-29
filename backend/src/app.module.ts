import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { PanierModule } from './panier/panier.module';
import { ShoplistModule } from './shoplist/shoplist.module';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './categories/categories.module';
import { CardModule } from './card/card.module';



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
    ProductModule,
    ShoplistModule,
    ItemsModule, 
    CategoriesModule, 
    CardModule, 

  ],

  controllers: [AppController],

  providers: [AppService],
})




export class AppModule {}
