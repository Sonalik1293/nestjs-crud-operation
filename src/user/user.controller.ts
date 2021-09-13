import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserDto } from './user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) { }


  @Post()
  create(@Body() UserDto: UserDto): Promise<any> {
    return this.userService.create(UserDto);
  }

  @Get()
  findAll(): Promise<any> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

}
