import { Injectable } from '@nestjs/common'
import { add } from '@autospace/sample-lib'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ' + add(5, 4)
  }
}
