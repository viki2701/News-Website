import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';

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
      name: 'Cinema',
    },
    {
      name: 'Current Issue',
    },
    {
      name: 'Weather',
    },
  ]
}
