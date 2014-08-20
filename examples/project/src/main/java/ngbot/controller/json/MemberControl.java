package ngbot.controller.json;

import java.util.HashMap;

import ngbot.dao.MemberDao;
import ngbot.vo.Member;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/member")
public class MemberControl {
  static Logger logger = Logger.getLogger(MemberControl.class);
  
  @Autowired
  MemberDao memberDao;
  
  @RequestMapping(value="/signup", method=RequestMethod.POST)
  public String signup(Member member)
      throws Exception {
    memberDao.insert(member);
    return "/score/json/scoreadd";
  }
  


}