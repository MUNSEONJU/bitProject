package ngnewbie.controller.json;

import java.util.HashMap;

import ngnewbie.service.MemberService;
import ngnewbie.vo.Member;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/check")
public class CheckControl {
  static Logger logger = Logger.getLogger(CheckControl.class);
  
  @Autowired
  MemberService memberService;
   
  @RequestMapping(value="/email", method=RequestMethod.POST) 
  public Object list(String email, ModelMap model) throws Exception {
    
    HashMap<String,Object> result = new HashMap<String,Object>();
    Member member = memberService.email(email);
    logger.warn(member);
    
    if(email == "") {
      result.put("test", "");
      logger.warn("값 입력하시오");
      return result;
    }
    
    else if(member != null) {
      result.put("test", "중복됩니다.");
      logger.warn("중복");
      return result;
    }
    
    else {
      result.put("test", "등록 가능 합니다");
      logger.warn("등록 가능");
      return result;
    }
  }
  
  @RequestMapping(value="/pwd", method=RequestMethod.POST) 
  public Object pwd(String pwd1, String pwd2) throws Exception {
    //logger.warn("test");
    logger.warn(pwd1);
    logger.warn(pwd2);
    
    HashMap<String,Object> result = new HashMap<String,Object>();
    
    if(pwd1 == "" && pwd2 == ""){
      result.put("test", "");
      logger.warn("둘다 비었을때");
      return result;
    }
    
    else if(pwd1.equals(pwd2)) {
      result.put("test", "사용가능");
      logger.warn("사용가능");
      return result;
    }
    
    else if(pwd1 == "" && pwd2 != ""){
      result.put("test", "");
      logger.warn("pwd1 비엇을때");
      return result;
    }
    
    else if(pwd2 == "" && pwd1 != ""){
      result.put("test", "");
      logger.warn("pwd2 비엇을때");
      return result;
    }
    
    else {
      result.put("test", "사용 불가");
      logger.warn("사용 불가");
      return result;
    }
  }
}
