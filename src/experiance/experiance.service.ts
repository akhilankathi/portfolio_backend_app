import { Injectable } from '@nestjs/common';
import { CreateExperianceDto } from './dto/create-experiance.dto';
import { UpdateExperianceDto } from './dto/update-experiance.dto';
import { Experience } from 'src/interface';
import { experiences } from 'src/constants';
import { UiBaseReponse } from 'src/dtos';

@Injectable()
export class ExperianceService {
  private readonly experiance : Experience[] = experiences
  create(createExperianceDto: CreateExperianceDto) {
    return 'This action adds a new experiance';
  }

  async findAll():Promise<UiBaseReponse<Experience[]>> {
     let reponse: UiBaseReponse<Experience[]> ={
          reponseCode : 200,
          reponseMessage : 'success',
          data : []
        }
        reponse.data = await this.experiance
        return reponse
  }

  findOne(id: number) {
    return `This action returns a #${id} experiance`;
  }

  update(id: number, updateExperianceDto: UpdateExperianceDto) {
    return `This action updates a #${id} experiance`;
  }

  remove(id: number) {
    return `This action removes a #${id} experiance`;
  }
}
