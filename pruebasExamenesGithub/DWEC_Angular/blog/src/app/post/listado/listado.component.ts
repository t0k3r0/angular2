import { Component, inject } from '@angular/core';
import { PostService } from '../postService';
import { CommonModule } from '@angular/common';
import { Post } from '../Post';
import { Observable } from 'rxjs';
import { Router,RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, RouterLink,  RouterOutlet, FormsModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.scss'
})
export class ListadoComponent {
  prueba = "prueba2";
  postList:Observable<Post[]>;
  postService:PostService = inject(PostService);
  listado: Post[] | undefined = [];

  constructor(private router:Router) {
    this.postList = this.postService.getAll();
  }

  ngOnInit(){
    this.postList.subscribe({
      next: value => {
        this.listado = value;
        console.log(value[0])
        // console.log(value)
        // console.log(this.listado)
      },
      error: err => console.error(err),
      complete: () => console.log("completoeoe")
    })
  }

  ver(event:Event,post:Post){
    console.log(post.id)
    // this.router.navigate(['/vistaIndividual']);
  }

  editar(event:Event,post:Post){
    console.log(post.id)
    console.log(event)
  }

  borrar(event:Event,post:Post){
    console.log(post.id)
    this.postService.delete(post.id);
  }
}
