package com.example.tradingCards.controller;

import com.example.tradingCards.DTO.CardDTO;
import com.example.tradingCards.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/card")
public class CardController {

    @Autowired
    private CardService cardService;

    public CardController(CardService cardService){
        this.cardService = cardService;
    }

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public List<CardDTO> findAll() {
        return cardService.findAll();
    }
}
