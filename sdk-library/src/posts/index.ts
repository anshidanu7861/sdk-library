import { Post, NewPost } from "./types";
import { Base } from "../base";

const resouce = "posts";

export class Posts extends Base {
  getPostById(id: number): Promise<Post> {
    return this.invoke(`/${resouce}/${id}`);
  }

  getPosts(): Promise<Post[]> {
    return this.invoke(`/${resouce}`);
  }

  createPost(newPost: NewPost): Promise<Post[]> {
    return this.invoke(`/${resouce}`, {
      method: "POST",
      body: JSON.stringify(newPost),
    });
  }
}
