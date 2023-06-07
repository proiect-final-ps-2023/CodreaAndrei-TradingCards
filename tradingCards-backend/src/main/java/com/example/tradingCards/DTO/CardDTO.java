package com.example.tradingCards.DTO;

import com.example.tradingCards.model.Player;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data

public class CardDTO {

    private Long id;
    private String type;
    private String position;
    private  int overall;
    private int minPrice;
    private int maxPrice;
    private Double chance;
    private PlayerDTO player;
    private Integer pace;
    private Integer dribbling;
    private Integer shooting;
    private Integer defending;
    private Integer passing;
    private Integer physical;
    private String color;

}
