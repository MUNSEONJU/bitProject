package ngbot.controller.json;

//더하는 부분
import java.util.HashMap;

import ngbot.service.NgbotService;
import ngbot.vo.Ngbot;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/ngbot")
public class NgbotControl {
  static Logger logger = Logger.getLogger(NgbotControl.class);
  
  @Autowired
  NgbotService ngbotService;
  
  @RequestMapping(value="/add", method=RequestMethod.POST)
  public Object add(Ngbot ngbot) throws Exception {
    logger.warn("등록.....");
    
    HashMap<String,Object> result = new HashMap<String,Object>();
    
    String str = ngbot.getRandstr();
    Ngbot check = ngbotService.sel(str);
    
    if(check == null){
      logger.warn("db에 중복되는 값 없음");
      
      ngbotService.insert(ngbot);
      
      result.put("randstr", ngbot.getRandstr());
      result.put("html", ngbot.getHtml());
      result.put("js", ngbot.getJs());
      result.put("status", "faild");
      
      logger.warn("Dao에 add추가");
      
      return result;
    }
    else {
      result.put("status", "success");
      
      logger.warn("중복....");
      
      return result;
    }
  }
}