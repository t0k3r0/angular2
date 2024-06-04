import { Component, inject } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from '../postService';
import { Observable } from 'rxjs';

interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [RouterLink, FormsModule, ReactiveFormsModule],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.scss'
})
export class ActualizarComponent {

  registerForm: Post = {
    id: 0,
    title: "",
    body: ""
  };
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
        this.registerForm.id = value.id;
        this.registerForm.title = value.title;
        this.registerForm.body = value.body;
      },
      error: err => console.error(err),
      complete: () => console.log("VerCompleto")
    })
  }


  submit(){
    console.log("Submit Actualizar")

    console.log(this.registerForm.title)
    console.log(this.registerForm.body)

    this.postService.update(this.registerForm.id, this.registerForm);
  }
}
