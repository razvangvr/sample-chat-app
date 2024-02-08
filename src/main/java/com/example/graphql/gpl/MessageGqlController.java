package com.example.graphql.gpl;

import com.example.graphql.dto.AddMessageRequest;
import com.example.graphql.entity.Message;
import com.example.graphql.entity.User;
import com.example.graphql.repository.MessageRepository;
import com.example.graphql.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.reactivestreams.Publisher;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.SubscriptionMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Sinks;
import reactor.util.concurrent.Queues;

@Controller
@RequiredArgsConstructor
public class MessageGqlController {

    final UserRepository userRepository;

    final MessageRepository messageRepository;

//This messageSink Collects all the Published `Messages`
    private final Sinks.Many<Message> messageSink = Sinks.many()
            .multicast()
            .onBackpressureBuffer(Queues.SMALL_BUFFER_SIZE, false);


    private final Publisher<Message> messagePublisher = messageSink.asFlux();

    @MutationMapping("postMessage")
    public Message postMessage(@Argument("message") AddMessageRequest addUserRequest){

        final var message = new Message();


        User messageAuthor = userRepository.getUserByUsername(addUserRequest.getAuthor());


        message.setAuthor(messageAuthor);
        message.setContent(addUserRequest.getContent());
        message.setRecipient(resolveRecipientByAuthor(messageAuthor));

        final var dbMessage = messageRepository.save(message);
        messageSink.tryEmitNext(dbMessage);
        return dbMessage;

    }

    @SubscriptionMapping("messageCreated")
    //I want to Asynchronously Publish Every messageCreated/Message Posted Event
    //So that the Websocket Clients will get every MessagePosted
    public Publisher<Message> onMessageCreation() {
        return messagePublisher;
    }

    private User resolveRecipientByAuthor(User author){
        if (author.getUsername().equals("stefi"))
            return userRepository.getUserByUsername("robi");
        else
            return userRepository.getUserByUsername("stefi");
    }
}
