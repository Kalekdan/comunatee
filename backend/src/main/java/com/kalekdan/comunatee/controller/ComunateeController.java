package com.kalekdan.comunatee.controller;

import com.kalekdan.comunatee.model.Comunatee;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/comunatee")
public class ComunateeController {

    private List<Comunatee> comunateeList = new ArrayList<>();

    public ComunateeController() {
        comunateeList.add(new Comunatee("space", "a place for all things space", "", "kalekdan"));
        comunateeList.add(new Comunatee("pictures", "Comunatee for sharing your favorite pictures", "", "jamesiam"));
    }

    @GetMapping
    public List<Comunatee> getAllCommunatees() {
        return comunateeList;
    }

    @PostMapping
    public Comunatee addCommunatee(@RequestBody Comunatee comunatee) {
        comunateeList.add(comunatee);
        return comunatee;
    }
}