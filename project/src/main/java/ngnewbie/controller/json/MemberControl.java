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
@RequestMapping("/member")
public class MemberControl {
  static Logger logger = Logger.getLogger(MemberControl.class);
  
  @Autowired
  MemberService memberService;
   
  @RequestMapping("/list") 
  public Object list(ModelMap model) throws Exception {
    logger.warn("목록 가져오기.....");
    
    HashMap<String,Object> result = new HashMap<String,Object>();
    
    result.put("members", memberService.list());
    logger.warn("Dao에서 list가져오기");
    
    return result;
  }
  
  
  @RequestMapping(value="/add", method=RequestMethod.POST)
  public Object add(Member member, String email) throws Exception {
    logger.warn("등록.....");
    
    HashMap<String,Object> result = new HashMap<String,Object>();
    memberService.email(email);
    
    logger.warn(memberService.email(email));
    
    if (memberService.email(email) != null) {
      result.put("test", "아이디가 중복 됩니다.");
      return result;
    }
    else {
      memberService.insert(member);
      result.put("test", "가입성공!");
      return result;
    }
  }
}