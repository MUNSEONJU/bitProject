package ngbot.service;

import ngbot.dao.NgbotDao;
import ngbot.vo.Ngbot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NgbotServicempl implements NgbotService{

  @Autowired
  NgbotDao ngbotDao;
  
  @Override
  public void insert(Ngbot ngbot) throws Exception {
    ngbotDao.insert(ngbot);
    
  }

  @Override
  public Ngbot sel(String str) throws Exception {
    return ngbotDao.sel(str);
  }

}
