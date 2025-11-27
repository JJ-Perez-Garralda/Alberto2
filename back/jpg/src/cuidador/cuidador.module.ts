import { Module } from '@nestjs/common';
import { CuidadorService } from './cuidador.service';
import { CuidadorController } from './cuidador.controller';

@Module({
  providers: [CuidadorService],
  controllers: [CuidadorController]
})
export class CuidadorModule {}
