import { PartialType } from '@nestjs/mapped-types';
import { CreateExperianceDto } from './create-experiance.dto';

export class UpdateExperianceDto extends PartialType(CreateExperianceDto) {}
