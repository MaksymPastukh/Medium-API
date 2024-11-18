import { Controller, Get } from '@nestjs/common';
import { TagService } from './teg.service';
import { TagEntity } from '@app/tag/tag.entity';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {
  }

  @Get()
  async findAll(): Promise<{ tags: string[] }> {
    const tags: TagEntity[] = await this.tagService.findAll();
    return {
      tags: tags.map((tag: TagEntity) => tag.name),
    };
  }
}