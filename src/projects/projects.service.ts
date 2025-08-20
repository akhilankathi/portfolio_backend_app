import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from 'src/interface';
import { projects } from 'src/constants';

@Injectable()
export class ProjectsService {
  private readonly projects : Project[] =  projects
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }


  findAll() { 
    return this.projects;
  }

  findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
