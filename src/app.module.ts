import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevicesController } from './devices/devices.controller';
import { DevicesModule } from './devices/devices.module';
import { DevicesService } from './devices/devices.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/devicesDBPROD'),
  DevicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
