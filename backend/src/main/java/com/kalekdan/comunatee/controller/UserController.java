package com.kalekdan.comunatee.controller;

import com.kalekdan.comunatee.model.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/users")
public class UserController {

    private List<User> users = new ArrayList<>();

    public UserController() {
        users.add(new User("kalekdan", 100, 10, "https://avatars.githubusercontent.com/u/6087595?v=4"));
        users.add(new User("jamesiam", 2, -10, ""));
        users.add(new User("bob_smith", -19, 12, ""));
    }

    @GetMapping
    public List<User> getAllUsers() {
        return users;
    }

    @PostMapping
    public User addUser(@RequestBody User user) {
        users.add(user);
        return user;
    }
}
