package com.example.tradingCards.repository;

import com.example.tradingCards.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository

public interface UserRepository extends JpaRepository<User, Long> {
    User findFirstByName(String name);

    Optional<User> findByUsername(String username);
    User findFirstByUsername(String username);

    Optional<User> findByUsernameAndPassword(String name, String password);
}
