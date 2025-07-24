import { Component } from "@angular/core";

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.components.html'
})
export class PostCreateComponent {

    newPost = "NO INPUT!";
    onAddPost(){
        this.newPost = "The user's post";
    }
}