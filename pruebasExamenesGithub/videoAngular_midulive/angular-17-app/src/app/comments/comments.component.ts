import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: ` <h3>comentarios de lo que sea</h3>
    <img
      src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2023/01/meme-perro-fine-2928042.jpg?tf=3840x"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic et, illo
      nisi debitis ex, facere ipsa fugiat molestias ipsum praesentium vitae
      veritatis mollitia exercitationem qui! Praesentium tenetur magnam neque
      accusamus.
    </p>`,
  styles: `img{
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {}
