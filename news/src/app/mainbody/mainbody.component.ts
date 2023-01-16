import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss']
})
export class MainbodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
mainhome=[
  {
    img:'assets/img/content/Pongal.jpg',
    para:'New Celebration end and Ponal Celebration start in TN',
    heading:'Pongal Celebration 2023',
    like:'10',
    dislike:'5',
    time:'3H ago',
  },
  {
    img:'assets/img/content/AI.jpg',
    para:'Semi-conductor Manifucature plant in Tamil Nadu',
    heading:'Electrioncs Development in India',
    like:'56',
    dislike:'8',
    time:'5d ago',
  },
  {
    img:'assets/img/content/angular.png',
    para:'Angular 14 Specification and tool',
    heading:'Angular 14',
    like:'70',
    dislike:'10',
    time:'6m ago',
  },
  {
    img:'assets/img/content/bullet train.jpg',
    para:'Bullet Train in India Lanuched in Mumbai speed test',
    heading:'Bullet Tain In India ',
    like:'98',
    dislike:'70',
    time:'2m ago',
  },
  {
    img:'assets/img/content/Common Wealth.png',
    para:'Common Wealth Sports event 2023 will held on India',
    heading:'Common Wealth Sports',
    like:'66',
    dislike:'23',
    time:'5m ago',
  },
  {
    img:'assets/img/content/G20.png',
    para:'G20 Summit will held on New Delhi, India',
    heading:'G-20 Summit 2023',
    like:'36',
    dislike:'8',
    time:'5m ago',
  },
  {
    img:'assets/img/content/IPL.jpg',
    para:'IPL session start april in India big event in sports',
    heading:'IPL T20 2023',
    like:'88',
    dislike:'36',
    time:'8m ago',
  },
  {
    img:'assets/img/content/space X.jpg',
    para:'Space X New Satellite lanuched this month',
    heading:'Space X',
    like:'3k',
    dislike:'56',
    time:'2y ago',
  },
  {
    img:'assets/img/content/weather.jpg',
    para:'Coming month cyclon from in near bay of Bengal',
    heading:'Weather Cyclon report 2023',
    like:'3',
    dislike:'78',
    time:'1m ago',
  },
]
  
}
