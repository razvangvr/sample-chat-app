package com.example.graphql.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "messages")
public class Message implements IEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;


    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    @JsonIgnore
    private User author;
    //Author of the Message

    @ManyToOne
    @JoinColumn(name = "recipient_id", nullable = false)
    @JsonIgnore
    private User recipient;
    //The recipient of the Message
    //someone who is intended to receive something.
    /**
     * Se populeaza pe server, Upon receiving the message
     * Daca meesage.Author is sefi => mesajul e de la Stefi pentru Robi
     * */
}
