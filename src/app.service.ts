import { InjectQueue } from '@nestjs/bull';
import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('transcode') private readonly transcodeQueue: Queue,
  ) {}

  async transcode() {
    await this.transcodeQueue.add({
      fileName: './file.mp3',
    });
  }
}
