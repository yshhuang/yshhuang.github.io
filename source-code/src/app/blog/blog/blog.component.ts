import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  topic = '';
  title = '';

  constructor(private router: Router, private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.topic = this.route.snapshot.params['topic'];
  }

}
