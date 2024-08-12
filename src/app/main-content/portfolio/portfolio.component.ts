import { Component } from '@angular/core';
import { Recommendation } from './recommendation';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/nav/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})

export class PortfolioComponent  {

  constructor(public translate:TranslationService){}
  
  public recommendation:Recommendation[] = [
    {
      name: "Özkan Sarikaya",
      english: "Raudel is completely in his element when programming with JavaScript. He loves writing functions and solving complex tasks. He programmed important functions for our Kanban project (Join). He was also a valuable help in the team with his ability to quickly grasp and solve problems. I would be happy to work with him again at any time and can recommend him without reservation.",
      german: "Raudel ist beim Programmieren mit JavaScript ganz in seinem Element. Er liebt es, Funktionen zu schreiben und komplexe Aufgaben zu lösen. Bei unserem Kanban-Projekt (Join) hat er wichtige Funktionen programmiert. Auch im Team war er mit seiner Gabe, Probleme schnell zu erfassen und zu lösen, eine wertvolle Hilfe. Ich würde jederzeit gerne wieder mit ihm arbeiten und kann ihn uneingeschränkt weiterempfehlen.",
      spanish: "Raudel está completamente en su elemento cuando programa con JavaScript. Le encanta escribir funciones y resolver tareas complejas. Programó funciones importantes para nuestro proyecto Kanban (Join). También fue una valiosa ayuda en el equipo con su capacidad para comprender y resolver problemas rápidamente. Me encantaría volver a trabajar con él en cualquier momento y puedo recomendarlo sin reservas.",
      img: "./assets/img/Ozkan.jpg",
    },
    {
      name: "Alain Soltau",
      english: "Raudel has demonstrated exceptional performance in our team project. His in-depth knowledge of JavaScript allowed him to efficiently and creatively tackle even the most challenging tasks. What stands out is his ability to quickly analyze complex problems and come up with effective solutions. Raudel works very well in a team, always offering constructive suggestions and supporting his colleagues when needed. His technical skills and teamwork have significantly contributed to the success of our project.",
      german: "Raudel hat in unserer Teamarbeit eine herausragende Leistung gezeigt. Seine tiefgehenden Kenntnisse in JavaScript haben es ihm ermöglicht, selbst die anspruchsvollsten Aufgaben effizient und kreativ zu lösen. Besonders hervorzuheben ist seine Fähigkeit, komplexe Probleme schnell zu analysieren und effektive Lösungen zu finden. Raudel arbeitet sehr gut im Team, bringt stets konstruktive Vorschläge ein und unterstützt seine Kollegen bei Bedarf. Sein technisches Können und seine Teamfähigkeit haben einen großen Beitrag zum Erfolg unseres Projekts geleistet.",
      spanish: "Raudel ha demostrado un desempeño sobresaliente en nuestro trabajo en equipo. Su profundo conocimiento de JavaScript le ha permitido resolver incluso las tareas más exigentes de manera eficiente y creativa. De particular interés es su capacidad para analizar rápidamente problemas complejos y encontrar soluciones efectivas. Raudel trabaja muy bien en equipo, siempre hace sugerencias constructivas y apoya a sus colegas cuando es necesario. Sus habilidades técnicas y su capacidad para trabajar en equipo han contribuido en gran medida al éxito de nuestro proyecto.",
      img: "./assets/img/Alain.jpg",
    }
  ]

  currentName = this.recommendation[0].name;
  currentText = this.recommendation[0].english;
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
    this.currentText = this.recommendation[postId].english;
    this.currentImg = this.recommendation[postId].img;
    this.currentPostId = postId;
  } 
}
