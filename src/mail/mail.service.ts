import { Inject, Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { CONFIG_OPTION } from 'src/common/entities/common.constants';
import { MailModuleOptions } from './mail.interfaces';

@Injectable()
export class MailService {
    constructor(
        @Inject(CONFIG_OPTION) private readonly options: MailModuleOptions
    ) {
    }
}

