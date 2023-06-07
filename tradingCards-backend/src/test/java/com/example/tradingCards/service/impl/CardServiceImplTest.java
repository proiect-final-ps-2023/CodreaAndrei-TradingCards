package com.example.tradingCards.service.impl;

import com.example.tradingCards.repository.CardRepository;
import com.example.tradingCards.repository.PlayerRepository;
import com.example.tradingCards.service.CardService;
import com.example.tradingCards.service.PlayerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
class CardServiceImplTest {


    private CardRepository cardRepository;
    private CardService cardService;
    @Autowired
    public CardServiceImplTest (CardRepository cardRepository, CardService cardService) { this.cardRepository = cardRepository; this.cardService = cardService; }


    @Test
    void createCard() {
        cardService.createCard("Test", "ST", 0, 100);
        assertThat(cardRepository.findFirstByType("Test")).isNotNull();
    }

    @Test
    void deleteCardById() {
        cardService.deleteCardById(1L);
        assertThat(cardRepository.findFirstById(1)).isNull();
    }
}