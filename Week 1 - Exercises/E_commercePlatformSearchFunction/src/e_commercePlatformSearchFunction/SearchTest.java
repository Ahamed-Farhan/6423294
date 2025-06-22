package e_commercePlatformSearchFunction;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(104, "Shirt", "Clothing"),
            new Product(101, "Phone", "Electronics"),
            new Product(103, "Shoes", "Footwear"),
            new Product(102, "Laptop", "Electronics")
        };

        
        System.out.println("🔍 Linear Search Result:");
        Product result1 = LinearSearch.search(products, 104);
        System.out.println(result1 != null ? result1 : "Product not found");

        
        System.out.println("\n🔍 Binary Search Result:");
        BinarySearch.sortById(products);
        Product result2 = BinarySearch.search(products, 104);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
