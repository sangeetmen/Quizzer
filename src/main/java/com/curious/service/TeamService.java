package com.curious.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curious.dao.TeamsDao;
import com.curious.model.Game;

import com.curious.model.Teams;

@Service
public class TeamService {

	@Autowired
	TeamsDao tdao;
	
	public List<Teams> getTeams(Game game) {
		// TODO Auto-generated method stub
		return tdao.findAllByGameidOrderByIdAsc(game);
	}

	@Transactional
	public void savePoints(Game game, int teamid, int points) {
		// TODO Auto-generated method stub
		Teams team=tdao.findById(teamid).orElse(null);
		team.setPoints(points);
		tdao.save(team);
	}

}
