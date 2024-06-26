import "./mongodb"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser"
import "dotenv/config"

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use(cookieParser())
  app.setGlobalPrefix('api')

  const PORT = process.env.PORT || 5002
  await app.listen(PORT, () => {
    console.log(`running on ${PORT}`);
  });

}
bootstrap();