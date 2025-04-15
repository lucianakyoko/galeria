import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Image, ImageSchema } from './schemas/image.schema';
import { UploadService } from './upload.service';
import { CloudinaryProvider } from './cloudinary.provider';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
  ],
  providers: [UploadService, CloudinaryProvider, ImagesService],
  controllers: [ImagesController],
})
export class ImagesModule {}
