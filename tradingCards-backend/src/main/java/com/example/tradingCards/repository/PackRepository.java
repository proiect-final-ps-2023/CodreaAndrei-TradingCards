package com.example.tradingCards.repository;

import com.example.tradingCards.model.Pack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PackRepository extends JpaRepository<Pack, Long> {
Pack findFirstByName(String name);
}
