import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // فیلدهایی که در فایل dto هیچگونه decorator ندارند را حذف میکند
  }))
  await app.listen(3000);
}
bootstrap();
