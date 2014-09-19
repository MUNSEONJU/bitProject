package ngbot.service;

import java.util.List;

import ngbot.dao.MemberDao;
import ngbot.vo.Member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberServicempl implements MemberService{

  @Autowired
  MemberDao memberDao;
  

  @Override
  public void insert(Member member) throws Exception {
    memberDao.insert(member);
  }


  @Override
  public List<Member> list() throws Exception {
    return memberDao.list();
  }


 /* @Override
  public Member list1(String email) throws Exception {
    return memberDao.list1(email);
  }*/


  @Override
  public List<Member> select(int no) throws Exception {
    return memberDao.select(no);
    
  }


  @Override
  public Member email(String email) throws Exception {
    return memberDao.email(email);
  }

  

}
