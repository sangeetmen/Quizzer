package com.curious.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curious.model.Choices;

public interface ChoicesDao extends JpaRepository<Choices, Integer>{

}
