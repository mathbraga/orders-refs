import { Injectable } from '@nestjs/common';
import processOrdersAndRefs from '../assets';

@Injectable()
export class AppService {
  async getPendencies(): Promise<string> {
    const pendencies = await processOrdersAndRefs();

    return pendencies;
  }
}
