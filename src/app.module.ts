import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AboutModule } from './about/about.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperianceModule } from './experiance/experiance.module';
import { EducationModule } from './education/education.module';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AboutModule, ProjectsModule, ExperianceModule, EducationModule, ContactModule, HomeModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
