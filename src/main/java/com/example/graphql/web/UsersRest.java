package com.example.graphql.web;


import com.example.graphql.entity.User;
import com.example.graphql.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UsersRest {


    private final UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers(){
        List<User> all = userRepository.findAll();
        return all;
    }
}
