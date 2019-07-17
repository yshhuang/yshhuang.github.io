import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editDistance(a: string, b: string) {
    const lengthA = a.length;
    const lengthB = b.length;
    const d = [[]];
    let i, j;

    for (i = 0; i <= lengthA; i++) {
      d[i] = [];
      d[i][0] = i;
    }
    for (j = 0; j <= lengthB; j++) {
      d[0][j] = j;
    }

    for (i = 1; i <= lengthA; i++) {
      for (j = 1; j <= lengthB; j++) {
        if (a.charAt(i - 1) === b.charAt(j - 1)) {
          d[i][j] = d[i - 1][j - 1];
        } else {
          d[i][j] = Math.min(d[i - 1][j], d[i][j - 1], d[i - 1][j - 1]) + 1;
        }
      }
    }
    return d[lengthA][lengthB];
  }
}
