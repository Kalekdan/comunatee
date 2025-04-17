package com.kalekdan.comunatee.model;

public class Comunatee {
    private String name;
    private String description;
    private String banner;
    private String owner;

    public Comunatee() {}

    public Comunatee(String name, String description, String banner, String owner) {
        this.name = name;
        this.description = description;
        this.banner = banner;
        this.owner = owner;
    }

    // Getters and setters
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public String getBanner() { return banner; }
    public void setBanner(String banner) { this.banner = banner; }

    public String getOwner() { return owner; }
    public void setOwner(String owner) { this.owner = owner; }
}
