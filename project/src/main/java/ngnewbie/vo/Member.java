package ngnewbie.vo;

import java.io.Serializable;


public class Member implements Serializable{
  private static final long serialVersionUID = 1L;
  private int     no;
  private String  email;
  private String  password;
  
  public Member() {}
  
  @Override
  public String toString() {
    return "Member [no=" + no + ", email=" + email + ", password=" + password
        + "]";
  }

  public int getNo() {
    return no;
  }

  public void setNo(int no) {
    this.no = no;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }
  
  
}
