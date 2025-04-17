package com.kalekdan.comunatee.model;

public class Threads {
    private String commentId;
    private String parentComment;
    private String content;
    private String op;    
    
    public Threads() {}
    
    public Threads(String commentId, String parentComment, String content, String op) {
        this.commentId = commentId;
        this.parentComment = parentComment;
        this.content = content;
        this.op = op;
    }

    // Getters and setters
    public String getCommentId() { return commentId; }
    public void setCommentId(String commentId) { this.commentId = commentId; }

    public String getParentComment() { return parentComment; }
    public void setParentComment(String parentComment) { this.parentComment = parentComment; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getOp() { return op; }
    public void setOp(String op) { this.op = op; }
}