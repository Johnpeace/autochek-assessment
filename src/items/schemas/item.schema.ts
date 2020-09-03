import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Item extends Document {
  @Prop(String)
  name: string;

  @Prop(Number)
  qty: number;

  @Prop(String)
  description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);

/*
import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  name: String,
  qty: Number,
  description: String,
});
*/
