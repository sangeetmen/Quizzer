package com.curious.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curious.model.Game;

public interface Gamedao extends JpaRepository<Game, Integer> {

	Game findByIdOrderByIdAsc(int gameid);

}
