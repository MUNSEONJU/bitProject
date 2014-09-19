package ngbot.dao;

import ngbot.vo.Ngbot;

public interface NgbotDao {
  int insert(Ngbot ngbot) throws Exception;
  Ngbot sel(String str) throws Exception;
}
