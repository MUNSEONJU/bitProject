package ngbot.controller;

import ngbot.service.MemberService;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/main")
public class MainControl {
  static Logger logger = Logger.getLogger(MainControl.class);
  
  @Autowired
  MemberService memberService;
  
  @RequestMapping(value = "/test/{no}") 
  public String view(
      @PathVariable int no,
      ModelMap model
      ) throws Exception {
    logger.warn("메인화면");
    logger.warn("parameter 값:" +no);
    
    model.put("members", memberService.select(no));
    logger.warn(memberService.select(no));
    
    
    return "/member/json/list";
  }
}