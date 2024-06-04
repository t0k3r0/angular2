import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { PostService } from '../postService';
import { Post } from '../Post';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vista-individual',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vista-individual.component.html',
  styleUrl: './vista-individual.component.scss'
})
export class VistaIndividualComponent {

  observablePost: Observable<Post> | undefined;
  postAMostrar!: Post;
  postService:PostService = inject(PostService);
  
  constructor(private rutaActiva:ActivatedRoute) {

  }

  ngOnInit(){
    console.log(this.rutaActiva.snapshot.params['postID'])
    this.observablePost = this.postService.find(this.rutaActiva.snapshot.params['postID']);

    this.observablePost.subscribe({
      next: value => {
        this.postAMostrar = value;
        console.log(value)
        // console.log(this.listado)
      },
      error: err => console.error(err),
      complete: () => console.log("VerCompleto")
    })
  }
}
