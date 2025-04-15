import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagesService } from './images.service';
import { UploadService } from './upload.service';

@Controller('images')
export class ImagesController {
  constructor(
    private readonly imagesService: ImagesService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: any,
  ) {
    const result = await this.uploadService.uploadImage(file);
    return this.imagesService.create({
      url: result.secure_url,
      filename: body.filename || result.original_filename,
    });
  }

  @Get()
  async findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.imagesService.findOne(id);
  }

  @Patch(':id')
  async updateFilename(
    @Param('id') id: string,
    @Body('filename') filename: string,
  ) {
    return this.imagesService.updateFilename(id, filename);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.imagesService.remove(id);
  }
}
