package com.kalekdan.comunatee.controller;

import com.kalekdan.comunatee.model.Threads;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/threads")
public class ThreadsController {
    private List<Threads> threadsList = new ArrayList<>();

    public ThreadsController() {
        threadsList.add(new Threads("3d9bfeb4-28db-40d2-aebe-83e69a12c3fc", null, "that is a cute dog", "bob_smith"));
        threadsList.add(new Threads("d4c9db76-9f78-48ef-8d97-ab4b927f2c90", "3d9bfeb4-28db-40d2-aebe-83e69a12c3fc",
                "it certainly is", "bob_smith"));
        threadsList.add(new Threads("f9dddb43-4219-455d-a2ae-b095b97fb8c4", null, "what breed is that", "bob_smith"));
        threadsList.add(new Threads("3ee9f655-5056-41fa-8d38-496c3ec8964c", null, "can i have your dog?", "bob_smith"));
        threadsList.add(new Threads("8ef6bfeb-2547-459e-a04b-79ed7abb6d8b", "d4c9db76-9f78-48ef-8d97-ab4b927f2c90",
                "I prefer cats", "bob_smith"));
        threadsList.add(new Threads("8e89de3c-6843-459f-8445-efea7028a28f", null, "What is it's name?", "bob_smith"));
        threadsList.add(new Threads("8c66a56b-7bc5-4cdc-b9a2-6d6427d4cf89", "8e89de3c-6843-459f-8445-efea7028a28f",
                "He's called jeff", "bob_smith"));
    }

    @GetMapping
    public List<Threads> getAllThreads() {
        return threadsList;
    }

    @PostMapping
    public Threads addThreads(@RequestBody Threads threads) {
        threadsList.add(threads);
        return threads;
    }
}
