import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PostService } from '../postService';


interface Post {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-creacion',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterLink],
  templateUrl: './creacion.component.html',
  styleUrl: './creacion.component.scss'
})
export class CreacionComponent {

  registerForm: Post = {
    id: 101,
    title: "",
    body: ""
  };

  postService:PostService = inject(PostService);


  submit(){
    console.log("submih")

    console.log(this.registerForm.title)
    console.log(this.registerForm.body)

    this.postService.create(this.registerForm);
  }
}
