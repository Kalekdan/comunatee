package com.kalekdan.comunatee.model;

public class Posts {
    private String id;
    private String comunatee;
    private String op;
    private String content;

    public Posts() {}

    public Posts(String id, String comunatee, String op, String content) {
        this.id = id;
        this.comunatee = comunatee;
        this.op = op;
        this.content = content;
    }

    // Getters and setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getComunatee() { return comunatee; }
    public void setComunatee(String comunatee) { this.comunatee = comunatee; }

    public String getOp() { return op; }
    public void setOp(String op) { this.op = op; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
