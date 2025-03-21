import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';
import { InstitutionModule } from 'src/modules/institution/institution.module';
import { UserModule } from 'src/modules/user/user.module';
import { BoardsModule } from 'src/modules/boards/boards.module';
import { MediumModule } from 'src/modules/medium/medium.module';
import { CategoryModule } from 'src/modules/category/category.module';

@Module({
  imports: [
    DatabaseModule,
    InstitutionModule,
    UserModule,
    BoardsModule,
    MediumModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
