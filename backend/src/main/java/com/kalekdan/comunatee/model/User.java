package com.kalekdan.comunatee.model;

public class User {
    private String username;
    private int post_rating;
    private int comment_rating;
    private String profile_pic;

    public User() {}

    public User(String username, int post_rating, int comment_rating, String profile_pic) {
        this.username = username;
        this.post_rating = post_rating;
        this.comment_rating = comment_rating;
        this.profile_pic = profile_pic;
    }

    // Getters and setters
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public int getPost_rating() { return post_rating; }
    public void setPost_rating(int post_rating) { this.post_rating = post_rating; }

    public int getComment_rating() { return comment_rating; }
    public void setComment_rating(int comment_rating) { this.comment_rating = comment_rating; }

    public String getProfile_pic() { return profile_pic; }
    public void setProfile_pic(String profile_pic) { this.profile_pic = profile_pic; }
}
