package com.curious.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curious.model.Game;
import com.curious.model.Questions;

public interface QuestionsDao extends JpaRepository<Questions, Integer>{

	List<Questions> findAllByGameid(Game game);

	

	List<Questions> findAllByGameidOrderByQuestionnoAsc(Game game);

}
