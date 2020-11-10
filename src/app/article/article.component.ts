import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {


  @Input("article") article;
  constructor() { }

  ngOnInit() {
  }

  upVote(){
    this.article.upScore();
  }

  downVote(){
    this.article.downScore();
  }

}
