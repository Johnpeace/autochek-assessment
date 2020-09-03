import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';

import { CreateItemDto } from './create-item.dto';
import { ItemsService } from './items.service';
// import { Item } from './interfaces/item.interface';
import { Item } from './schemas/item.schema';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  /**
   The express way but not recommended
   import { Req, Res } from '@nestjs/common';
   import { Request, Response } from 'express';
   findAll(@Req() req: Request, @Res() res: Response): Response {
     console.log(req.url)
     return res.send('Hello World');
   }
   */

  @Get(':id')
  findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Item> {
    return this.itemsService.delete(id);
  }
}
