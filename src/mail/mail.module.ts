import { DynamicModule, Module } from '@nestjs/common';
import { CONFIG_OPTION } from 'src/common/entities/common.constants';
import { MailModuleOptions } from './mail.interfaces';
import { MailService } from './mail.service';

@Module({})
export class MailModule {
    static forRoot(options: MailModuleOptions): DynamicModule {
        return {
            module: MailModule,
            exports: [],
            providers: [{
                provide: CONFIG_OPTION,
                useValue: options,
            },
                MailService
            ]
        }
    }
}
