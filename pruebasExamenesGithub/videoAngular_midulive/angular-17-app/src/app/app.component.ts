import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, UserComponent, CommentsComponent],
  templateUrl: './app.component.html',
  // template: `<h1>hola macarena desde {{ city.toUpperCase() }} {{ 1 + 1 }}</h1>
  //   <app-user />`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  city = 'Barcelona';
}
