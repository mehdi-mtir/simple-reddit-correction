export class Article {
    title : string;
    link : string;
    score : number;

    constructor(title : string, link : string, score? : number){
        this.title = title;
        this.link = link;
        this.score = score || 1;
    }

    getTile() : string{
        return this.title
    }

    getLink() : string{
        return this.link;
    }

    getScore() : number{
        return this.score;
    }

    setTitle(title : string){
        this.title = title;
    }

    setLink(link : string){
        this.link = link;
    }

    setScore(score : number){
        this.score = score;
    }

    upScore(){
        this.score ++;
    }

    downScore(){
        if(this.score > 0){
            this.score --;
        }   
    }


}
