import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantsResover } from './restaurant.resolver';
import { RestaurantService } from './restaurants.service';

@Module({
    imports: [TypeOrmModule.forFeature([Restaurant])],
    providers: [RestaurantsResover, RestaurantService]
})
export class RestaurantsModule { }
