import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
   app.enableCors({
    origin: [
      "https://zany-robot-gwpw654r5g9f9vxx-5173.app.github.dev", 
      "http://localhost:5173/",  
      "https://akhilankathi.netlify.app"
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
