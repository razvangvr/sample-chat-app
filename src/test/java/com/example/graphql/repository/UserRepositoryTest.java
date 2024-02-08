package com.example.graphql.repository;

import com.example.graphql.entity.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.List;


@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class UserRepositoryTest {


    @Autowired
    UserRepository userRepository;

    /**
     * Error creating bean with name 'dataSource': Failed to replace DataSource with an embedded database for tests.
     *
     * beddedDataSourceBeanFactoryPostProcessor : Replacing 'dataSource' DataSource bean with embedded version
     * Starting embedded database: url='jdbc:h2:mem:bfbd0bbf-3a88-4956-bed4-47d39406b8c5;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=false', username='sa'
     * Starting embedded database: url='jdbc:h2:mem:b13b70a4-4657-4479-8478-ddfac007e684;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=false', username='sa'
     *
     * HikariPool-1 - Added connection conn0: url=jdbc:h2:mem:test user=SA
     * */
    @Test
    void getAllUsers() {
        List<User> all = userRepository.findAll();
        System.out.println(all.size());
        all.stream()
                .forEach(user -> System.out.println(user.getUsername()));
    }
}
