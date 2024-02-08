package com.example.graphql.entity;

import com.example.graphql.Post;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.context.annotation.Lazy;

import java.util.List;

@Data
@Entity
@Table(name = "users")
public class User implements IEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @OneToMany(mappedBy = "author")
    private List<Message> messagesAuthored;

    @OneToMany(mappedBy = "recipient")
    private List<Message> messagesReceived;

}
