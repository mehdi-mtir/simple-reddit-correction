import { Component, OnInit } from '@angular/core';
import { Article } from './models/article';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  articles : Article[];

  addArticle(f : NgForm){
    //console.log(f);
    var article = new Article(f.value.title, f.value.link);
    this.articles.push(article);
    console.log(this.articles);
    //this.sortArticles();
  }

  sortArticles(): Article[] {
    return this.articles.sort((a: Article, b : Article) => {
      return b.getScore() - a.getScore();
    })
  }

  ngOnInit(){
    this.articles = [];
  }


}
