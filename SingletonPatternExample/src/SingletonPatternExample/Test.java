package SingletonPatternExample;

public class Test{
    public static void main(String[] args) {
        Logger s = Logger.getInstance();
        Logger t = Logger.getInstance();

        System.out.println(s==t);
    }
}