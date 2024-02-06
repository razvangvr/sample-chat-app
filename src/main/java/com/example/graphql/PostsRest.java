package com.example.graphql;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Collections;

@RestController
@RequestMapping("/posts")
public class PostsRest {

    @GetMapping
    public Collection<Post> getAllUsers(){
        return Collections.singleton(new Post("me"));
    }
}
