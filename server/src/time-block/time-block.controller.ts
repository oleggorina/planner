import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TimeBlockService } from './time-block.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { TimeBlockDto } from './dto/time-block.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('user/time-block')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: TimeBlockDto, @CurrentUser('id') userId: number) {
    return this.timeBlockService.create(dto, userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Body() dto: TimeBlockDto, @CurrentUser('id') userId: number, @Param('id', ParseIntPipe) timeBlockId: number) {
    console.log('Recieved DTO: ', dto);
    return this.timeBlockService.update(dto, timeBlockId, userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Patch()
  @Auth()
  updateOrder(@Body() dto: UpdateOrderDto) {
    console.log('Recieved DTO: ', dto);
    return this.timeBlockService.updateOrder(dto.ids);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@CurrentUser('id') userId: number, @Param('id', ParseIntPipe) timeBlockId: number) {
    this.timeBlockService.delete(timeBlockId, userId);
  }

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: number) {
    return this.timeBlockService.getAll(userId);
  }
}
