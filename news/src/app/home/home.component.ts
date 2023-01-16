import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navtab=[
    {
      name: 'Headline',
    },
    {
      name: 'Science & Technology',
    },
    {
      name: 'World News',
    },
    {
      name: 'Sports',
    },
    {
      name: 'Poltical',
    },
    
    {
      name: 'Weather',
    },
    {
      name: 'Others',
    },
  ]

  footer=[
    {
      name:'Advertise',
    },
    {
      name:'Privacy',
    },
    {
      name:'Terms',
    },
    {
      name:'Notice of Collection',
    },
    {
      name:'Do Not Sell My Data',
    },
    {
      name:'Permissions',
    },
    {
      name:'Help Center',
    },
    {
      name:'About US',
    },
    {
      name:'Site Map',
    },
    {
      name:'Viki News @ 2023',
    },
  ]
}
