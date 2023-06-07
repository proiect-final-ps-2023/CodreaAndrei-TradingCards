package com.example.tradingCards.service.impl;

import com.example.tradingCards.DTO.CardDTO;
import com.example.tradingCards.mapper.CardMapper;
import com.example.tradingCards.model.*;
import com.example.tradingCards.repository.CardRepository;
import com.example.tradingCards.service.CardService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class CardServiceImpl implements CardService{

    @Autowired
    private CardRepository cardRepository;
    private CardMapper cardMapper;

    public CardServiceImpl(CardRepository cardRepository, CardMapper cardMapper){
        this.cardRepository = cardRepository;
        this.cardMapper = cardMapper;
    }

    @Override
    public CardDTO findById(Long Id) {
        Card card = cardRepository.findById(Id)
                .orElseThrow(()
                        ->
                        new IllegalArgumentException("Invalid card id"));
        return cardMapper.mapModelToDto(card);
    }

    @Override
    public List<CardDTO> findAll() {
        return cardRepository.findAll().
                stream().
                map(cardMapper::mapModelToDto).
                collect(Collectors.toList());
    }

    @Override
    public void createCard(String type, String position, int minPrice, int maxPrice) {

        Card newCard = new Card();
        newCard.setType(type);
        newCard.setPosition(position);
        newCard.setMinPrice(minPrice);
        newCard.setMaxPrice(maxPrice);

        cardRepository.save(newCard);
    }

    @Override
    public void deleteCardById(Long Id) {

        try {
            final Card card = cardRepository.findById(Id)
                    .orElseThrow(() ->
                    {
                        throw new EntityNotFoundException("There is no card with Id: " + Id);
                    });
            cardRepository.delete(card);

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }


}
