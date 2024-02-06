package com.example.graphql;

import org.reactivestreams.Publisher;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SubscriptionMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;

import java.util.Collections;
import java.util.List;

@Controller
public class PostGqlController {


    @SubscriptionMapping("postCreated")
    public Publisher<Post> onPostCreated(){
        return Flux.just(new Post("razvan_"+System.currentTimeMillis()));
    }

    @QueryMapping("allPosts")
    public List<Post> allPosts() {
        return Collections.singletonList(new Post("meeeeA"));
    }





}
