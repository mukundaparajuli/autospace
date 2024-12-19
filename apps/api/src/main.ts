import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // document builder A Document Builder is a tool or utility to create, manage, and format structured documents.
  //  It can be used to generate PDFs, Word files, or other formats programmatically, often dynamically based on user input or data.
  const config = new DocumentBuilder()
    .setTitle('Autospace | API Documentation')
    .setDescription(
      `The autospace api documentation.
    <h1>Looking for GraphQL API? Go to:</h1>
    <a href="/graphql" target="_blank">/graphql</a>
    Or you can visit <a href="https://studio.apollographql.com/sandbox/explorer?endpoint=http://localhost:3000/graphql">Apollo Server</a> for better experience.
    `,
    )
    .setVersion('0.1')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);

  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
