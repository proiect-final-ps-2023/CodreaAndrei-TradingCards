package com.example.tradingCards.mapper;

import com.example.tradingCards.DTO.PlayerDTO;
import com.example.tradingCards.model.Player;

public class PlayerMapper {
    public PlayerDTO mapModeltoDto(Player player){
        PlayerDTO playerDTO = new PlayerDTO();
        playerDTO.setId(player.getId());
        playerDTO.setName(player.getName());
        playerDTO.setAge(player.getAge());
        playerDTO.setLeague(player.getLeague());
        playerDTO.setNationality(player.getNationality());
        playerDTO.setTeam(player.getTeam());
        return playerDTO;
    }
}
