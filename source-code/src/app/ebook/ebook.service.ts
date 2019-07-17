import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EbookService {

  url = 'https://api.github.com/repos/yshhuang/my-ebook/issues';
  access_token = 'access_token=a9b629f6f6ce7b5548a89c33f927ed5506aaa358';
  clientID = 'c672f12df24bae512eae';
  clientSecret = 'b9f45436b0fab444d3a9abc42c2ba7c900a11918';

  constructor(private http: Http) { }


  getCode(): Promise<any> {
    return this.http.
      get('https://github.com/login/oauth/authorize?client_id=' + this.clientID)
      .toPromise()
      .then(res => res as any);
  }
}
