package com.example.tradingCards.service;

import com.example.tradingCards.model.User;
import org.springframework.stereotype.Component;

@Component
public interface PlayerService {

    void createPlayer(String name, Integer age,
                      String nationality, String league, String team);

    void deletePlayer(String name);

}
