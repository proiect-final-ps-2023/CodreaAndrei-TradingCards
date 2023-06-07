package com.example.tradingCards.repository;

import com.example.tradingCards.model.Market;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface MarketRepository extends JpaRepository<Market, Long> {

}
