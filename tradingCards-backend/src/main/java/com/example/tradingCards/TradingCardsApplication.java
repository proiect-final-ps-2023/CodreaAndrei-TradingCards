package com.example.tradingCards;

import com.example.tradingCards.DTO.CardDTO;
import com.example.tradingCards.DTO.UserDTO;
import com.example.tradingCards.model.*;
import com.example.tradingCards.repository.*;
import com.example.tradingCards.service.CardService;
import com.example.tradingCards.service.PackService;
import com.example.tradingCards.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import java.io.*;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;



@EntityScan
@EnableJpaRepositories
@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
public class TradingCardsApplication {


	public static void main(String[] args){

		SpringApplication.run(TradingCardsApplication.class, args);
	}

	void checkLogin(int loginValue){

		if (loginValue >= 0){
			System.out.println("Successful login!");
		} else {
			System.out.println("Unsuccessful login!");
		}
	}

	void playerCardInit(CardRepository cardRepository, PlayerRepository playerRepository, PackRepository packRepository){

		String line = "";
		String line1 = "";
		String splitBy = ",";
		try {
			BufferedReader bufferedReader = new BufferedReader(new FileReader("input.csv"));
			BufferedReader bufferedReader1 = new BufferedReader(new FileReader("attributes.csv"));
			//read the first header line
			line = bufferedReader.readLine();
			line1 = bufferedReader1.readLine();

			Pack bronzePack = new Pack();
			bronzePack.setName("Bronze Pack");
			bronzePack.setDescription("A pack containing bronze players");
			bronzePack.setPrice(750);
			Pack silverPack = new Pack();
			silverPack.setName("Silver Pack");
			silverPack.setDescription("A pack containing silver players");
			silverPack.setPrice(3000);
			Pack goldPack = new Pack();
			goldPack.setName("Gold Pack");
			goldPack.setDescription("A pack containing gold players");
			goldPack.setPrice(7500);


			while ((line1 = bufferedReader1.readLine()) != null) {
				line = bufferedReader.readLine();
				String[] player = line.split(splitBy);
				String[] att = line1.split(splitBy);
				Player newPlayer = new Player();
				Card newCard = new Card();
				newPlayer.setName(player[1]);
				newPlayer.setAge(Integer.valueOf((player[10])));
				newPlayer.setNationality(player[9]);
				newPlayer.setLeague(player[7]);
				newPlayer.setTeam(player[8]);
				newCard.setColor(player[6]);
				newCard.setType(player[11]);
				newCard.setPosition(player[2]);
				newCard.setOverall(Integer.parseInt(player[5]));
				newCard.setMinPrice(0);
				newCard.setMaxPrice(Integer.MAX_VALUE);
				//get chance based on overall
				int overall = newCard.getOverall();
				if (overall >= 50 && overall < 65) {
					newCard.setChance(20.0);
				} else if (overall >= 65 && overall < 75) {
					newCard.setChance(15.0);
				} else if (overall >= 75 && overall < 83) {
					newCard.setChance(10.0);
				} else if (overall >= 83 && overall < 86) {
					newCard.setChance(5.0);
				} else if (overall >= 86 && overall < 90) {
					newCard.setChance(2.0);
				} else if (overall >= 90 && overall < 93) {
					newCard.setChance(1.0);
				} else if (overall >= 93) {
					newCard.setChance(0.5);
				}

				newCard.setPace(Integer.valueOf(att[1]));
				newCard.setShooting(Integer.valueOf(att[2]));
				newCard.setPassing(Integer.valueOf(att[3]));
				newCard.setDribbling(Integer.valueOf(att[4]));
				newCard.setDefending(Integer.valueOf(att[5]));
				newCard.setPhysical(Integer.valueOf(att[6]));
				// Save the newly created cards and players in the DB
				newCard.setPlayer(newPlayer);
				newPlayer.setCardList(new ArrayList<>());
				newPlayer.getCardList().add(newCard);
				playerRepository.save(newPlayer);
				cardRepository.save(newCard);
				//Create packs
				//Bronze pack




				//Silver Pack
				switch (newCard.getColor()) {
					case "bronze":
						bronzePack.getCardList().add(newCard);
						newCard.getPackList().add(bronzePack);
						cardRepository.save(newCard);
						break;
					case "silver":
						silverPack.getCardList().add(newCard);
						newCard.getPackList().add(silverPack);
						cardRepository.save(newCard);
						break;

					case "gold":
						goldPack.getCardList().add(newCard);
						newCard.getPackList().add(goldPack);
						cardRepository.save(newCard);
						break;
				}
			}
			goldPack.setSize(10);
			packRepository.save(goldPack);
			silverPack.setSize(10);
			packRepository.save(silverPack);
			bronzePack.setSize(10);
			packRepository.save(bronzePack);

		} catch (FileNotFoundException e) {
			System.out.println(e.getMessage());
		} catch (IOException e) {
			System.out.println(e.getMessage());
		}

	}

	@Bean
	CommandLineRunner init(CardRepository cardRepository, UserRepository userRepository, MarketRepository marketRepository,
						   PackRepository packRepository, PlayerRepository playerRepository,
						   UserService userService, CardService cardService,
						   PackService packService){
		return args -> {

			playerCardInit(cardRepository, playerRepository, packRepository);

			//User login
			User user = new User();
			user.setUsername("user1");
			user.setName("User1");
			user.setPassword("1234");
			user.setRole(User.Type.REGULAR);
			user.setLogged(0);
			userRepository.save(user);

			userService.login("user1", "1234");


			userService.login("User", "");


			//Admin actionn
			userService.createUser("admin1", "Admin1", "1234", "", User.Type.ADMIN);
			User admin = userRepository.findFirstByUsername("admin1");
			admin.setBalance(100);
			admin.setLogged(0);
			userRepository.save(admin);

			User user1 = new User();
			user1.setUsername("user1");
			user1.setName("User1");
			user1.setPassword("");
			user1.setRole(User.Type.REGULAR);
			user1.setBalance(100);
			user1.setLogged(0);
			userRepository.save(user1);
			List<CardDTO> allCards = cardService.findAll();
			for (CardDTO cardDTO : allCards){
				Card card = cardRepository.findFirstById(Math.toIntExact(cardDTO.getId()));
				user1.getOwnedCards().add(card);
			}
			userRepository.save(user1);

			User user2 = new User();
			userService.createUser("user2", "", "1234", "", User.Type.REGULAR);
			user2 = userRepository.findFirstByUsername("user2");
			user2.setBalance(Integer.MAX_VALUE);
			userRepository.save(user2);

			UserDTO adminDTO = userService.login("admin1", "1234");


			//userService.deleteUserById(3L);
			userService.deleteUserById(200L);

			//Cards
			Card card = new Card();
			card.setType("Gold");
			card.setPosition("ST");
			card.setMaxPrice(200);
			card.setMinPrice(100);
			card.setChance(0.5);
			card.setOverall(90);
			cardRepository.save(card);

			Card card1 = new Card();
			card1.setType("Silver");
			card1.setPosition("GK");
			card1.setMaxPrice(5000);
			card1.setMinPrice(10);
			card1.setChance(0.7);
			card1.setOverall(74);
			cardRepository.save(card1);

			List<Card> cardList = new ArrayList<>();
			cardList.add(card1);
			cardList.add(card);
			for (int i = 2; i < 10; i++){
				Card newCard = new Card();
				String type = "Silver" + i;
				newCard.setType(type);
				newCard.setPosition("GK");
				newCard.setMaxPrice(5000);
				newCard.setMinPrice(10);
				newCard.setChance(1.0/i);
				newCard.setOverall(74);
				cardRepository.save(newCard);
				cardList.add(newCard);
			}


			for (int i = 0; i < 5; i++){
				cardList.add(cardRepository.findAll().get(i));
			}


			//System.out.println("Before buying the pack: " + admin.getOwnedCards());
			userService.buyPack(2l, 1l);
			//System.out.println("After buying the pack: " + admin.getOwnedCards());

			//userService.createListing(2l, 2l, 100);

			BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(16);
			String result = encoder.encode("test");
			System.out.println(encoder.matches("test", result));

			System.out.println("Finished init!");
		};
	}


}
