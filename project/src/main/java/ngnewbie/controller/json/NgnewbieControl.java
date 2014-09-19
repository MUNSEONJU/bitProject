package ngnewbie.controller.json;

//더하는 부분
import java.util.HashMap;

import ngnewbie.service.NgnewbieService;
import ngnewbie.vo.Ngnewbie;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/ngnewbie")
public class NgnewbieControl {
  static Logger logger = Logger.getLogger(NgnewbieControl.class);
  
  @Autowired
  NgnewbieService ngnewbieService;
  
  @RequestMapping(value="/add", method=RequestMethod.POST)
  public Object add(Ngnewbie ngnewbie) throws Exception {
    logger.warn("등록.....");
    
    HashMap<String,Object> result = new HashMap<String,Object>();
    
    String str = ngnewbie.getRandstr();
    Ngnewbie check = ngnewbieService.sel(str);
    
    if(check == null){
      logger.warn("db에 중복되는 값 없음");
      
      ngnewbieService.insert(ngnewbie);
      
      //logger.warn(ngbot.getConfig());
      
      result.put("randstr", ngnewbie.getRandstr());
      result.put("config", ngnewbie.getConfig());
      result.put("html", ngnewbie.getHtml());
      result.put("js", ngnewbie.getJs());
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