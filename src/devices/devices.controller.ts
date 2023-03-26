import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@Controller('devices')
@ApiTags('device')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.devicesService.findAll(request);
  }
      
  @Get(':id_estacion')
  findOne(@Param('id_estacion') id_estacion: string) {
    return this.devicesService.findOne(id_estacion);
  }
}