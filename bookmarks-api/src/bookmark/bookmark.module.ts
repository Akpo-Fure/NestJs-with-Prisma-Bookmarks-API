import { Module } from '@nestjs/common';
import { BookMarkController } from './bookmark.controller';
import { BookmarkService } from './bookmark.service';

@Module({
  controllers: [BookMarkController],
  providers: [BookmarkService],
})
export class BookmarkModule {}
