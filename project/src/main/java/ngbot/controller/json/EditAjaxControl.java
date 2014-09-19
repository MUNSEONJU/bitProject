//찾는부분
package ngbot.controller.json;

import java.util.HashMap;

import ngbot.service.NgbotService;
import ngbot.vo.Ngbot;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/edit")
public class EditAjaxControl {
  static Logger logger = Logger.getLogger(EditAjaxControl.class);
  
  @Autowired
  NgbotService ngbotService;
  
  @RequestMapping(value="{str}", method=RequestMethod.POST) 
  public Object view(@PathVariable String str) throws Exception {
    logger.warn(str+" 목록 가져오기.....");
    HashMap<String,Object> result = new HashMap<String,Object>();
    
    logger.warn(str);
    
    Ngbot ngbot = ngbotService.sel(str);
    
    if(ngbot == null) {
      result.put("status", "success");
      
      logger.warn("db에 값이 없음");
      
      return result;
    }
    else {
      result.put("html", ngbot.getHtml());
      result.put("js", ngbot.getJs());
      
      logger.warn("Dao에서 "+str+" 가져오기");
      
      return result;
    }
  }
}