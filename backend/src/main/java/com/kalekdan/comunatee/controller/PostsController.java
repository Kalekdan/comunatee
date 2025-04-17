package com.kalekdan.comunatee.controller;

import com.kalekdan.comunatee.model.Posts;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/posts")
public class PostsController {

    private List<Posts> postsList = new ArrayList<>();

    public PostsController() {
        postsList.add(new Posts("1caa935f-c96f-4af0-be03-2e9760a414e7",
                "pictures", "bob_smith", "Look at these cool pictures"));
        postsList.add(new Posts("0ca238d2-a6ca-4dac-9090-a3baed966412",
                "pictures", "jamesiam", "More fun pictures"));
        postsList.add(new Posts("ec2877ec-26fc-4717-a1fe-2c399aee3fae",
                "space", "kalekdan", "The hubble telescope is being rebuilt!?!"));
        postsList.add(new Posts("d4da88f1-27ac-4df1-8aa8-0053eeece83e",
                "pictures", "jamesiam", "I found a photo of my dog"));
        postsList.add(new Posts("fffaefad-dd43-4695-8984-a71580b698ab",
                "space", "bob_smith", "First person to walk on mars today - exciting stuff"));
        postsList.add(new Posts("38c56332-e958-416f-b36f-b1a226f98020",
                "pictures", "bob_smith", "How does this thing work?"));
        postsList.add(new Posts("0d784096-9c1a-424e-81ff-96af2fe37157",
                "space", "jamesiam", "Moon landing was fake, and here's the proof"));
    }

    @GetMapping
    public List<Posts> getAllPosts() {
        return postsList;
    }

    @PostMapping
    public Posts addPost(@RequestBody Posts post) {
        postsList.add(post);
        return post;
    }
}
