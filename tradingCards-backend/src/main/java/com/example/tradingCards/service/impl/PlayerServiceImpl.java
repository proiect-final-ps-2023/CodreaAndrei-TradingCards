package com.example.tradingCards.service.impl;

import com.example.tradingCards.model.Player;
import com.example.tradingCards.model.User;
import com.example.tradingCards.repository.PlayerRepository;
import com.example.tradingCards.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository playerRepository;

    public PlayerServiceImpl (PlayerRepository playerRepository) { this.playerRepository = playerRepository; }

    @Override
    public void createPlayer(String name, Integer age, String nationality, String league, String team) {

        Player newPlayer = new Player();
        newPlayer.setName(name);
        newPlayer.setAge(age);
        newPlayer.setNationality(nationality);
        newPlayer.setLeague(league);
        newPlayer.setTeam(team);

        playerRepository.save(newPlayer);
    }

    @Override
    public void deletePlayer(String name) {
        playerRepository.delete(playerRepository.findFirstByName(name));
    }
}
