import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DeviceObjectDocument = DeviceObject & Document;

@Schema()
export class DeviceObject {
  @Prop()
  id_estacion: string;

  @Prop()
  timestamp: string;
  
  @Prop()
  name: string;
  
  @Prop()
  topic: string;
  
  @Prop()
  token: string;

  @Prop()
  room: string;

  @Prop()
  building: string;

  @Prop()
  latitude: string;

  @Prop()
  longitude: string;

} 

export const DeviceObjectSchema = SchemaFactory.createForClass(DeviceObject);