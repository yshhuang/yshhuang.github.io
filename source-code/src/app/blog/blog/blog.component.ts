import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  topic = '';
  article = '';

  constructor(private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.topic = this.route.snapshot.params['topic'];
    this.article = this.route.snapshot.params['article'];
    console.log(this.article);
  }

}
