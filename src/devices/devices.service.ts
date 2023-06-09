import { Injectable } from '@nestjs/common';
import { CreateDeviceDto } from './dto/create-device.dto';
import { InjectModel } from '@nestjs/mongoose';
import { DeviceObject, DeviceObjectDocument } from './entities/device.entity';
import { Model } from 'mongoose';
import { Request } from 'express';

@Injectable()
export class DevicesService {
  constructor(
    @InjectModel(DeviceObject.name) private readonly deviceObjectModel: Model<DeviceObjectDocument>,
  ) {}

  async create(createDeviceDto: CreateDeviceDto): Promise<DeviceObject> {
    var rand = function() {
      return Math.random().toString(36).substr(2); // remove `0.`
    };
  
    var token = function() {
      return rand() + rand(); // to make it longer
    };

    createDeviceDto.token = token();  
    createDeviceDto.timestamp = new Date().toISOString();

    return this.deviceObjectModel.create(createDeviceDto);
  }

  async findAll(request: Request): Promise<DeviceObject[]> {
    return this.deviceObjectModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id_estacion: string): Promise<DeviceObject> {
    return this.deviceObjectModel.findOne({ id_estacion: id_estacion }).exec();
  }

  async getId(space: string, building: string): Promise<object> {
    return this.deviceObjectModel.find({room: space, building: building}, 
      {id_estacion: 1, _id: 0}).exec();
  }

  async getBuildings(): Promise<Object> {
    return this.deviceObjectModel.aggregate([{$group: {_id: '$building', room: {$addToSet: "$room"}}},
    {$project: {building: '$_id', _id: 0, room: "$room"}}]).exec();
  }

}