import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CuidadorModule } from './cuidador/cuidador.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, CuidadorModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
