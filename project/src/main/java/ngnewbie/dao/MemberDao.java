package ngnewbie.dao;

import java.util.List;

import ngnewbie.vo.Member;

public interface MemberDao {
  int insert(Member member) throws Exception;
  List<Member> list() throws Exception;
  //Member list1(String email) throws Exception;
  List<Member> select(int no) throws Exception;
  Member email(String email) throws Exception;
}
