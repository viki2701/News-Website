import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contentpage',
  templateUrl: './contentpage.component.html',
  styleUrls: ['./contentpage.component.scss']
})
export class ContentpageComponent implements OnInit {

  newsimg:any;
  newspara:any;
  newsheading:any;
  newslike:any;
  newsdislike:any;
  newstime:any;

  constructor(private contnews:ActivatedRoute) { }

  ngOnInit(): void {
    this.contnews.params.subscribe(x=>{
      this.newsimg=x['contimg'];
      this.newspara=x['contpara'];
      this.newsheading=x['contheading'];
      this.newslike=x['contlike'];
      this.newsdislike=x['contdislike'];
      this.newstime=x['conttime'];
    })
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
