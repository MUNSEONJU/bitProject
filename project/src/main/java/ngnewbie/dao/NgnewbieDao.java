package ngnewbie.dao;

import ngnewbie.vo.Ngnewbie;

public interface NgnewbieDao {
  int insert(Ngnewbie ngbot) throws Exception;
  Ngnewbie sel(String str) throws Exception;
}
