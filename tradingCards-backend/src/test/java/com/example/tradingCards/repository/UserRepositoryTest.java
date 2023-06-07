package com.example.tradingCards.repository;

import com.example.tradingCards.model.User;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class UserRepositoryTest {
    private UserRepository userRepository;
    @Autowired
    public UserRepositoryTest (UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Test
    void findFirstByName() {

        User user = new User();
        user.setUsername("john");
        user.setName("John");
        userRepository.save(user);

        System.out.println(user);

        User searchedUser;
        searchedUser = userRepository.findFirstByName("John");

        //assertThat(searchedUser).isEqualTo(user);

    }
}