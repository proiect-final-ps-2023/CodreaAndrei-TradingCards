package com.example.tradingCards.mapper;

import com.example.tradingCards.DTO.CardDTO;
import com.example.tradingCards.DTO.UserDTO;
import com.example.tradingCards.model.Card;
import com.example.tradingCards.model.User;
import org.springframework.stereotype.Component;

@Component
public class CardMapper {

    public CardDTO mapModelToDto(Card card){
        CardDTO cardDTO = new CardDTO();
        cardDTO.setId(card.getId());
        cardDTO.setChance(card.getChance());
        cardDTO.setMaxPrice(card.getMaxPrice());
        cardDTO.setMinPrice(card.getMinPrice());
        cardDTO.setPosition(card.getPosition());
        cardDTO.setType(card.getType());
        cardDTO.setOverall(card.getOverall());
        cardDTO.setPace(card.getPace());
        cardDTO.setDribbling(card.getDribbling());
        cardDTO.setShooting(card.getShooting());
        cardDTO.setDefending(card.getDefending());
        cardDTO.setPassing(card.getPassing());
        cardDTO.setPhysical(card.getPhysical());
        cardDTO.setColor(card.getColor());
        PlayerMapper playerMapper = new PlayerMapper();
        if(card.getPlayer() != null) {
            cardDTO.setPlayer(playerMapper.mapModeltoDto(card.getPlayer()));
        }

        return cardDTO;
    }


}
