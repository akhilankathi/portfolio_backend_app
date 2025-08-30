import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Response } from 'express';
import { createReadStream } from 'fs';
import { join } from 'path';



@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) { }

  @Post()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactService.update(+id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(+id);
  }

  @Get('/downloadResume')
  downloadFile(@Res() res : any) {
 const filePath = join('./../../assets/', '..', 'files', 'Resume_Akhil_Ankathi_2025.docx');

    res.set({
      'Content-Type': 'application/docs',
      'Content-Disposition': 'attachment; filename="Resume_Akhil_Ankathi_2025.docx"',
    });

    const fileStream = createReadStream(filePath);
    fileStream.pipe(res);
  }
}
