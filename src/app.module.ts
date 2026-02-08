import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     UsersModule,
//     ProductsModule,
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: configService.DB_HOST,
//       port: Number(configService.DB_PORT),
//       username: configService.DB_USER,
//       password: configService.DB_PASSWORD,
//       database: configService.DB_NAME,
//       entities: [],
//       autoLoadEntities: true,
//       synchronize: true,
//     }),
//     ConfigModule.forRoot({
//       isGlobal: true,
//       // envFilePath: '.env.development',  //used in testing or live to select the env file responsible for the environment variables
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      // envFilePath: '.env.development',  //used in testing or live to select the env file responsible for the environment variables
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
