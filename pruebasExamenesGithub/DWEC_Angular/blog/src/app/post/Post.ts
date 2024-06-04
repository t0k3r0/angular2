export class Post {
    id: number;
    title: string;
    body: string;

    constructor(post:Post) {
        {
          this.id = post.id;
          this.title = post.title;
          this.body = post.body;
        }
    }
}