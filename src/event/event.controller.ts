import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { EventService } from './event.service';
import { EventDto } from './event.dto';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @UsePipes(new ValidationPipe())
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  create(@Body() dto: EventDto) {
    return this.eventService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Post(':id')
  update(@Param('id') id: string, @Body() dto: EventDto) {
    return this.eventService.update(id, dto);
  }

  @UsePipes(new ValidationPipe())
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(id);
  }
}
