package com.curious.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curious.dao.Gamedao;
import com.curious.model.Game;

@Service
public class GameService {

	@Autowired
	Gamedao gamedao;
	
	public Game getGame(int gameid) {
		// TODO Auto-generated method stub
		return gamedao.findById(gameid).orElse(null);
	}

}
