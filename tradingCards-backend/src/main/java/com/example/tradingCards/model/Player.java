package com.example.tradingCards.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Setter
@Getter
@EqualsAndHashCode
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Builder

public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private Integer age;
    private String nationality;
    private String league;
    private String team;

    @OneToMany(cascade = CascadeType.MERGE, mappedBy = "player")
    private List<Card> cardList;

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", nationality='" + nationality + '\'' +
                ", league='" + league + '\'' +
                ", team='" + team + '\'' +
                '}';
    }
}
