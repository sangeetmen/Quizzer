package com.curious.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.curious.model.Game;
import com.curious.model.Questions;
import com.curious.model.Teams;
import com.curious.service.GameService;
import com.curious.service.PointsLogService;
import com.curious.service.QuestionsService;
import com.curious.service.TeamService;

@Controller
public class HomeController {

	@Autowired
	GameService gservice;
	
	@Autowired
	QuestionsService qservice;
	
	@Autowired
	TeamService tservice;
	
	@Autowired
	PointsLogService pservice;
	
	@RequestMapping("/home")
	public String accessHomePage(){
		return "index";		
	}
	
	@RequestMapping("/loadcontent")
	public String loadPage(@RequestParam String action){
		
		return "/"+action+"";
	}
	
	
	@RequestMapping("/getQuestions")
	@ResponseBody
	public List<Questions> getQuestions(@RequestParam String gameid){
		
		Game game=gservice.getGame(Integer.parseInt(gameid));
		if(game!=null) {
			
			return qservice.getQuestions(game);
		}else {
			
			return null;
		}
		
	}
	@RequestMapping("/getTeams")
	@ResponseBody
	public List<Teams> getTeams(@RequestParam String gameid){
		
		Game game=gservice.getGame(Integer.parseInt(gameid));
		if(game!=null) {
			
			return tservice.getTeams(game);
		}else {
			
			return null;
		}
		
	}
	
	@RequestMapping("/savePoints")
	@ResponseBody
	public String savePoints(@RequestParam int gameid,int teamid,int questionid,int points,int totalpoints,int option){
		
		Game game=gservice.getGame(gameid);
		if(game!=null) {
			
			tservice.savePoints(game,teamid,totalpoints);
			pservice.savePoints(game, teamid, points, option, questionid, totalpoints);
			return "Y";
		}else {
			
			return "N";
		}
		
	}
	
	@RequestMapping("/saveQuestions")
	@ResponseBody
	public String saveQuestions(@RequestParam int gameid,int questionid,String answered){
		
		Game game=gservice.getGame(gameid);
		if(game!=null) {
			
			qservice.saveQuestion(game,questionid,answered);
			return "Y";
		}else {
			
			return "N";
		}
		
	}
}
