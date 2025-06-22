package financialforecast;

public class FinancialForecast {
	//Recursive Approach
	public static double forecastValue(double presentValue, double growthRate, int years) {
        if (years == 0) return presentValue;
        return forecastValue(presentValue, growthRate, years - 1) * (1 + growthRate);
	}
	
	//Iterative Approach
	public static double forecastIteratively(double presentValue, double growthRate, int years) {
	    for (int i = 0; i < years; i++) {
	        presentValue *= (1 + growthRate);
	    }
	    return presentValue;
	}
	
	public static void main(String[] args) {
        double initialAmount = 1000.0; 
        double annualGrowthRate = 0.05; 
        int years = 10;

        double futureValue = forecastValue(initialAmount, annualGrowthRate, years);
        double interest = futureValue - initialAmount;
        System.out.printf("Future value after %d years: ₹%.2f%n", years, futureValue);
        System.out.printf("The interest is: ₹%.2f%n", interest);
    }
}