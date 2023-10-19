import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: config.get('DATABASE_URL'),
        },
      },
    });
  }

  cleanDb() {
    return this.$transaction([this.user.deleteMany(), this.user.deleteMany()]);
  }
  // cleanDb() {
  //   return this.$transaction(async (prisma) => {
  //     // 1. Find and delete all bookmarks
  //     const bookmarksToDelete = await prisma.bookmark.findMany();

  //     for (const bookmark of bookmarksToDelete) {
  //       await prisma.bookmark.delete({
  //         where: {
  //           id: bookmark.id,
  //         },
  //       });
  //     }

  //     // 2. Delete all users
  //     await prisma.user.deleteMany();
  //   });
  // }
}
