package SingletonPatternExample;

class Logger{
    private static Logger instance;

    private Logger(){
        System.out.println("Singleton Instance Created");
    }

    public static Logger getInstance(){
        if(instance == null){
            instance = new Logger();
        }
        return instance;
    }
}