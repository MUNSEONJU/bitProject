import java.util.Random;

public class Main {
  
  public static void main(String[] args) {
    Random rnd = new Random();
    System.out.println(createUrlHash(rnd));
  }
  
  static String createUrlHash(Random rnd) {
    char[] cArray = new char[4];
    cArray[0] = (char) (65 + rnd.nextInt(26));
    cArray[1] = (char) (65 + rnd.nextInt(26));
    cArray[2] = (char) (65 + rnd.nextInt(26));
    cArray[3] = (char) (65 + rnd.nextInt(26));
    String hashStr = String.copyValueOf(cArray);
    return hashStr;
  }
}
