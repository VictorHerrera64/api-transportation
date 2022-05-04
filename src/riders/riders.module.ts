import { Module } from '@nestjs/common';
import { RidersService } from './riders.service';
import { RidersController } from './riders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rider } from './entities/rider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rider])],
  controllers: [RidersController],
  providers: [RidersService]
})
export class RidersModule {}
