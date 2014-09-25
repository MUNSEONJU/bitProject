package ngnewbie.service;

import ngnewbie.vo.Ngnewbie;

public interface NgnewbieService {
  //Ngbot insert(Ngbot ngbot) throws Exception;
  void insert(Ngnewbie ngbot) throws Exception;
  Ngnewbie sel(String str) throws Exception;
}
