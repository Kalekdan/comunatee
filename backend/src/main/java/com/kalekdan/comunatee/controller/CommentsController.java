package com.kalekdan.comunatee.controller;

import com.kalekdan.comunatee.model.Comments;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/comments")
public class CommentsController {

    private List<Comments> commentsList = new ArrayList<>();

    public CommentsController() {
        commentsList.add(new Comments("d4da88f1-27ac-4df1-8aa8-0053eeece83e",
                new ArrayList<>(List.of(
                        "3d9bfeb4-28db-40d2-aebe-83e69a12c3fc",
                        "f9dddb43-4219-455d-a2ae-b095b97fb8c4",
                        "3ee9f655-5056-41fa-8d38-496c3ec8964c",
                        "8e89de3c-6843-459f-8445-efea7028a28f"
                ))
        ));
    }

    @GetMapping
    public List<Comments> getAllComments() {
        return commentsList;
    }

    @PostMapping
    public Comments addComments(@RequestBody Comments comments) {
        commentsList.add(comments);
        return comments;
    }

    // Add a new thread id to existing comment
    @PutMapping("/{postId}")
    public Comments addThreadIdToComment(@PathVariable String postId, @RequestBody String threadId) {
        for (Comments comment : commentsList) {
            if (comment.getPostId().equals(postId)) {
                List<String> threads = comment.getThreads();
                threads.add(threadId);
                comment.setThreads(threads);
                return comment;
            }
        }
        return null; // or throw an exception if not found
    }
}