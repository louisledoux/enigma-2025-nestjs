import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly logger: Logger) {}

  getHello() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Hello World!');
      }, 1000);
    });

    // Promise <pending>
    this.logger.log(promise);

    // Hello World!
    return promise;
  }
}
