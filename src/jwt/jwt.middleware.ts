import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";
import { type } from "os";
import { UserService } from "src/users/users.service";
import { JwtService } from "./jwt.service";

@Injectable()
export class JwtMiddleware implements NestMiddleware {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService
    ) { }
    async use(req: Request, res: Response, next: NextFunction) {
        if ('x-jwt' in req.headers) {
            const token = req.headers['x-jwt']
            const decode = this.jwtService.verify(token.toStfing());
            if (typeof decode === "object" && decode.hasOwnProperty('id')) {
                try {
                    const user = await this.userService.findById(decode['id'])
                    req['user'] = user;
                } catch (error) {

                }
            }
        }
        next();
    }

}