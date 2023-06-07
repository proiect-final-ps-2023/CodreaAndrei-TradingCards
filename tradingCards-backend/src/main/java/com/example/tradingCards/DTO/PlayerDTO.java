package com.example.tradingCards.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlayerDTO {
    private Long id;
    private String name;
    private Integer age;
    private String nationality;
    private String league;
    private String team;
}
