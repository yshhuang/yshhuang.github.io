import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getFileContext(filePath: string): Promise<any> {
        return this.http
            .get(filePath)
            .toPromise()
            .then(res => res as any);

    }
}
