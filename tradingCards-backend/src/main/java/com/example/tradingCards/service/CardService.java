package com.example.tradingCards.service;

import com.example.tradingCards.DTO.CardDTO;
import com.example.tradingCards.model.Market;
import com.example.tradingCards.model.Pack;
import com.example.tradingCards.model.Player;
import com.example.tradingCards.model.User;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CardService {

    CardDTO findById(Long Id);
    List<CardDTO> findAll();
    void createCard(String type, String position, int minPrice, int maxPrice);
    void deleteCardById(Long Id);

}
