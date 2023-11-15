import { Processor, Process } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('transcode')
export class TranscodeConsumer {
  private readonly logger = new Logger(TranscodeConsumer.name);

  @Process()
  async transcode(job: Job<unknown>) {
    this.logger.log(JSON.stringify(job));
    this.logger.debug('Data ', job.data);
  }
}
