import { Module } from '@nestjs/common';
import { RestaurantsResover } from './restaurant.resolver';

@Module({
    providers: [RestaurantsResover]
})
export class RestaurantsModule { }
