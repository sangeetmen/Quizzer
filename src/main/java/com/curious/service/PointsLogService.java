package com.curious.service;

import javax.transaction.Transactional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curious.dao.PointslogDao;
import com.curious.dao.QuestionsDao;
import com.curious.dao.TeamsDao;
import com.curious.model.Game;
import com.curious.model.Pointslog;
import com.curious.model.Questions;
import com.curious.model.Teams;


@Service
public class PointsLogService {

	@Autowired
	PointslogDao pdao;
	@Autowired
	TeamsDao tdao;
	@Autowired
	QuestionsDao qdao;
	
	@Transactional
	public void savePoints(Game game, int teamid, int points,int choiceid,int quid,int totalpoints) {
		
		// TODO Auto-generated method stub
		
		Teams team=tdao.findById(teamid).orElse(null);
		Questions question=qdao.findById(quid).orElse(null);
		Pointslog pointslog=new Pointslog();
		pointslog.setGameid(game);
		pointslog.setChoiceid(choiceid);
		pointslog.setPointsearned(points);
		pointslog.setQuestionid(question);
		pointslog.setTeamid(team);
		pointslog.setTotalpoints(totalpoints);
		pdao.save(pointslog);
	}
}
