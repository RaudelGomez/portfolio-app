import { Component } from '@angular/core';
import { Recommendation } from './recommendation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent  {
  public recommendation:Recommendation[] = [
    {
      name: "Özkan Sarikaya",
      text: "Raudel is completely in his element when programming with JavaScript. He loves writing functions and solving complex tasks. He programmed important functions for our Kanban project (Join). He was also a valuable help in the team with his ability to quickly grasp and solve problems. I would be happy to work with him again at any time and can recommend him without reservation.",
      img: "./assets/img/Ozkan.jpg",
    },
    {
      name: "Alain Soltau",
      text: "Raudel has demonstrated exceptional performance in our team project. His in-depth knowledge of JavaScript allowed him to efficiently and creatively tackle even the most challenging tasks. What stands out is his ability to quickly analyze complex problems and come up with effective solutions. Raudel works very well in a team, always offering constructive suggestions and supporting his colleagues when needed. His technical skills and teamwork have significantly contributed to the success of our project.",
      img: "./assets/img/Alain.jpg",
    }
  ]

  currentName = this.recommendation[0].name;
  currentText = this.recommendation[0].text;
  currentImg = this.recommendation[0].img;
  currentPostId = 0;
  
  next(){
    if(this.currentPostId >= this.recommendation.length-1){
      this.currentPostId = -1;
    }
    let postId = this.currentPostId+1;
    this.updateRecomendation(postId);
  }

  before(){
    if(this.currentPostId == 0){
      this.currentPostId = this.recommendation.length;
    }
    let postId = this.currentPostId-1;
    this.updateRecomendation(postId);
  }

  updateRecomendation(postId:number){
    this.currentName = this.recommendation[postId].name;
    this.currentText = this.recommendation[postId].text;
    this.currentImg = this.recommendation[postId].img;
    this.currentPostId = postId;
  } 
}
