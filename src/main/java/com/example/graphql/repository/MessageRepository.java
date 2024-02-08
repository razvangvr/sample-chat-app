package com.example.graphql.repository;

import com.example.graphql.entity.Message;
import com.example.graphql.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageRepository extends JpaRepository<Message, Integer> {
}
