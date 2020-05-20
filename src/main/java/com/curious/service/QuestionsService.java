package com.curious.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.curious.dao.QuestionsDao;
import com.curious.model.Game;
import com.curious.model.Questions;
import com.curious.model.Teams;

@Service
public class QuestionsService {

	@Autowired
	QuestionsDao qdao;
	public List<Questions> getQuestions(Game game) {
		// TODO Auto-generated method stub
		return qdao.findAllByGameidOrderByQuestionnoAsc(game);
	}
	@Transactional
	public void saveQuestion(Game game, int questionid, String answered) {
		// TODO Auto-generated method stub
		Questions questions=qdao.findById(questionid).orElse(null);
		questions.setAnswered(answered);
		qdao.save(questions);
	}

}
