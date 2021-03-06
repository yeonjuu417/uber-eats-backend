import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt.interfaces';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTION } from 'src/common/common.constants';

@Injectable()
export class JwtService {
    constructor(
        @Inject(CONFIG_OPTION) private readonly options: JwtModuleOptions
    ) { }
    sign(userId: number): string {
        return jwt.sign({ id: userId }, this.options.privateKey)
    }
    verify(token: string) {
        return jwt.verify(token, this.options.privateKey);
    }
}

