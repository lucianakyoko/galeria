import { Injectable, InternalServerErrorException } from '@nestjs/common';
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from 'cloudinary';
import * as streamifier from 'streamifier';

@Injectable()
export class UploadService {
  async uploadImage(file: Express.Multer.File): Promise<{
    secure_url: string;
    original_filename: string;
  }> {
    if (!file?.buffer) {
      throw new InternalServerErrorException('Invalid file or missing buffer.');
    }

    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: 'galeria' }, //cria uma pasta no Cloudinary
        (
          error: UploadApiErrorResponse | undefined,
          result: UploadApiResponse | undefined,
        ) => {
          if (error) {
            console.error('Error on Cloudinary:', error);
            return reject(
              new InternalServerErrorException('Error uploading image.'),
            );
          }

          if (!result?.secure_url) {
            return reject(
              new InternalServerErrorException(
                'Upload failed. No URL returned.',
              ),
            );
          }

          return resolve({
            secure_url: result.secure_url,
            original_filename: result.original_filename,
          });
        },
      );

      streamifier.createReadStream(file.buffer).pipe(stream);
    });
  }

  async deleteImage(publicId: string): Promise<void> {
    await cloudinary.uploader.destroy(`galeria/${publicId}`);
  }
}
