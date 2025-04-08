import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image, ImageDocument } from './schemas/image.schema';
import { UploadService } from './upload.service';

@Injectable()
export class ImagesService {
  constructor(
    @InjectModel(Image.name) private imageModel: Model<ImageDocument>,
    private readonly uploadService: UploadService,
  ) {}

  async create(data: { url: string; filename: string }) {
    const createdImage = new this.imageModel(data);
    return createdImage.save();
  }

  async findAll(): Promise<Image[]> {
    return this.imageModel.find().sort({ createdAt: -1 }).exec();
  }

  async findOne(id: string): Promise<Image | null> {
    return this.imageModel.findById(id).exec();
  }

  async updateFilename(
    id: string,
    filename: string,
  ): Promise<{ message: string }> {
    const image = await this.imageModel.findById(id);
    if (!image) {
      throw new NotFoundException('Imagem não encontrada');
    }

    image.filename = filename;
    await image.save();

    return {
      message: `Nome da imagem atualizado para ${filename} com sucesso!`,
    };
  }

  async remove(id: string): Promise<any> {
    const image = await this.imageModel.findById(id);
    if (!image) {
      throw new NotFoundException('Imagem não encontrada');
    }

    // Remove do Cloudinary (usando o nome original como public_id)
    await this.uploadService.deleteImage(image.filename);

    // Remove do banco
    await this.imageModel.findByIdAndDelete(id);
    return {
      message: `Imagem ${image.filename} removida com sucesso!`,
    };
  }
}
