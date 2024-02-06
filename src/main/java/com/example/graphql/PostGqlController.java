package com.example.graphql;

import org.reactivestreams.Publisher;
import org.springframework.graphql.data.method.annotation.SubscriptionMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Controller
public class PostGqlController {


    @SubscriptionMapping("postCreated")
    public Publisher<Post> onPostCreated(){
        return Flux.just(new Post("razvan_"+System.currentTimeMillis()));
    }



}
