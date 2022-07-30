import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor () {}

    intercept(
        req: HttpRequest<any>, next: HttpHandler
        ): Observable<HttpEvent<any>> {
            req = req.clone ({
                setHeaders: {
                    'x-rapidapi-key': '3ee83b9812msh1c3a5882fb55175p111f18jsn4495b3b5d327',
                    'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                },
                setParams: {
                    key: '4c4ae727783845f88e4a07e23322a226'
                }
            });
            return next.handle(req);
    }
}