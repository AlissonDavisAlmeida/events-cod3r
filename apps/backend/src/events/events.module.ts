import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { DbModule } from 'db/db.module';
import { EventsService } from './events.service';

@Module({
  imports: [DbModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
