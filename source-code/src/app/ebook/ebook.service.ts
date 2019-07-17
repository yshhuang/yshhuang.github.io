import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Ebook } from './ebook';

@Injectable()
export class EbookService {

  url = 'https://api.github.com/repos/yshhuang/my-ebook/issues';
  access_token1 = '268f63e8773a31c756';
  access_token2 = 'de7dea65f6ef5e2da3d200';
  clientID = 'c672f12df24bae512eae';
  clientSecret = 'b9f45436b0fab444d3a9abc42c2ba7c900a11918';

  constructor(private http: Http) { }

  getEbooks(): Promise<Ebook[]> {
    return this.http.get('https://api.github.com/repos/yshhuang/my-ebook/issues?access_token=' + this.access_token1 + this.access_token2)
      .toPromise().then(res => res.json() as Ebook[]);
  }
}
