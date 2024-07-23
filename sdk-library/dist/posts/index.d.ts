import { Post, NewPost } from "./types";
import { Base } from "../base";
export declare class Posts extends Base {
    getPostById(id: number): Promise<Post>;
    getPosts(): Promise<Post[]>;
    createPost(newPost: NewPost): Promise<Post[]>;
}
