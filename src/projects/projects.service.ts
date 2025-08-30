import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from 'src/interface';
import { projects } from 'src/constants';
import { UiBaseReponse } from 'src/dtos/index'

@Injectable()
export class ProjectsService {
  private readonly projects: Project[] = projects
  create(createProjectDto: CreateProjectDto) {
    return 'This action adds a new project';
  }


  async findAll(): Promise<UiBaseReponse<Project[]>> {
    let reponse: UiBaseReponse<Project[]> ={
      reponseCode : 200,
      reponseMessage : 'success',
      data : []
    }
    reponse.data = await this.projects
    return reponse
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
