package com.example.graphql.dto;

import lombok.Data;

@Data
public class AddMessageRequest {

    String author;//username who create the message

    String content;
}
