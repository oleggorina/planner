import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as CookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(CookieParser());
  app.enableCors({
    origin: ['http://localhost:4200'],
    credentials: true,
    exposedHeaders: 'set-cookie'
  })
  await app.listen(3000);
}
bootstrap();
