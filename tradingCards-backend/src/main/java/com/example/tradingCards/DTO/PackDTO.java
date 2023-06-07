package com.example.tradingCards.DTO;

import com.example.tradingCards.model.Card;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class PackDTO {

    private Long Id;
    private String name;
    private String description;
    private int price;
    private int size;
    private List<CardDTO> cardList;


}
