import { Injectable, NotFoundException } from '@nestjs/common';
import { EventDto } from './event.dto';
import { PrismaService } from 'src/prisma.service';


@Injectable()
export class EventService {
  constructor(private prisma: PrismaService) { }

  create(dto: EventDto) {
    return this.prisma.event.create({
      data: dto
    })
  }

  findAll() {
    return this.prisma.event.findMany()
  }

  async getById(id: string) {
    const event = await this.prisma.event.findUnique({
      where: { id }
    })
    if (!event) throw new NotFoundException('Event not found')
    return event
  }

  async findOne(id: string) {
    await this.prisma.event.update({
      where: { id },
      data: { views: { increment: 1 } }
    })
    return await this.getById(id)
  }

  async update(id: string, dto: EventDto) {
    await this.getById(id)
    return this.prisma.event.update({
      where: { id },
      data: dto,
    })
  }

  async remove(id: string) {
    await this.getById(id)

    return this.prisma.event.delete({
      where: { id }
    })
  }
}
