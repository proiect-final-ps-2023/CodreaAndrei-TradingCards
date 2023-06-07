package com.example.tradingCards.service.impl;

import com.example.tradingCards.model.Player;
import com.example.tradingCards.model.User;
import com.example.tradingCards.repository.PlayerRepository;
import com.example.tradingCards.repository.UserRepository;
import com.example.tradingCards.service.PlayerService;
import com.example.tradingCards.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class PlayerServiceImplTest {

    private PlayerRepository playerRepository;
    private PlayerService playerService;
    @Autowired
    public PlayerServiceImplTest (PlayerRepository playerRepository, PlayerService playerService) { this.playerRepository = playerRepository; this.playerService = playerService; }


    @Test
    void createPlayer() {

        playerService.createPlayer("John", 25, "", "", "");

        assertThat(playerRepository.findFirstByName("John")).isNotNull();

    }

    @Test
    void deletePlayer() {

        playerService.createPlayer("Jack", 25, "", "", "");
        playerService.deletePlayer("Jack");
        assertThat(playerRepository.findFirstByName("Jack")).isNull();
    }
}