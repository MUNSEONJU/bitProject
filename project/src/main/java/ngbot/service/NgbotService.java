package ngbot.service;

import ngbot.vo.Ngbot;

public interface NgbotService {
  //Ngbot insert(Ngbot ngbot) throws Exception;
  void insert(Ngbot ngbot) throws Exception;
  Ngbot sel(String str) throws Exception;
}
