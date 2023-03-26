import { Module } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { DevicesController } from './devices.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeviceObject, DeviceObjectSchema } from './entities/device.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: DeviceObject.name, schema: DeviceObjectSchema }]),
  ],
  controllers: [DevicesController],
  providers: [DevicesService]
})
export class DevicesModule {}
