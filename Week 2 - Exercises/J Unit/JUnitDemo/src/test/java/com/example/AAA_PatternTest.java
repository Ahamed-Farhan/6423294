package com.example;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.*;
class AAA_PatternTest {
	
	MathUtils math;

	 @BeforeEach
	 	void setup() {
		 	System.out.println("In Before...");
		 	math = new MathUtils();
	 }
	 @Test
	    void testAdd() {
	        int result = math.add(2, 3);
	        assertEquals(5, result);
	    }
	 @Test
	    void testSubtract() {
	      int result = math.subtract(3, 2);
	      assertEquals(1, result);
	  }
	  @AfterEach
	    void breakdown() {
		    System.out.println("In After...");
	 }

}
