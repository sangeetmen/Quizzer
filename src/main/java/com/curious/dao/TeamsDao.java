package com.curious.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curious.model.Game;
import com.curious.model.Teams;

public interface TeamsDao extends JpaRepository<Teams, Integer>{

	List<Teams> findAllByGameid(Game game);

	List<Teams> findAllByGameidOrderByIdAsc(Game game);

}
