package com.curious.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class HomeController {

	@RequestMapping("/home")
	public String accessHomePage(){
		return "index";		
	}
	@RequestMapping("/loadcontent")
	public String loadPage(@RequestParam String action){
		
		return "/"+action+"";
	}
}
