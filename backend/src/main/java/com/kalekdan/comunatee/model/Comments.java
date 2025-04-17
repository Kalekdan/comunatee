package com.kalekdan.comunatee.model;

import java.util.List;



public class Comments {
    private String postId;
    private List<String> threads;

    public Comments() {}

    public Comments(String postId, List<String> threads) {
        this.postId = postId;
        this.threads = threads;
    }

    // Getters and setters
    public String getPostId() { return postId; }
    public void setPostId(String postId) { this.postId = postId;}

    public List<String> getThreads() { return threads;}
    public void setThreads(List<String> threads) { this.threads = threads; }
}
