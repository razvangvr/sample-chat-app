package com.example.graphql;

import org.reactivestreams.Publisher;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SubscriptionMapping;
import org.springframework.stereotype.Controller;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

@Controller
public class PostGqlController {


    @SubscriptionMapping("postCreated")
    public Publisher<Post> onPostCreated(){
//        return Flux.just(new Post("razvan_"+System.currentTimeMillis()));

        final AtomicInteger counter = new AtomicInteger();

        List<Post> posts = new ArrayList<>();

        for(int i = 0; i<=600; i++){
            posts.add(new Post("razvan_"+i));
        }

        return Flux.fromIterable(posts)
                .delayElements(Duration.ofSeconds(1));
    }

    @QueryMapping("allPosts")
    public List<Post> allPosts() {
        return Collections.singletonList(new Post("meeeeA"));
    }


}
