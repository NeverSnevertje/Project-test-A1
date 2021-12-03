import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generator-component',
  templateUrl: './generator.component.html',
  styleUrls: ['./generator.component.css'],
})
export class GeneratorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  steden: string[] = ['Tokio','Amsterdam','Berlijn','Brussel','Parijs','Rome','Istanbul','Kopenhagen'];
  deStad: string;

  geefStad() {
   var rand =this.getRandomInt(0,7)
   
    this.deStad= this.steden[rand];

  }

  getRandomInt(min, max) : number{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }
}
