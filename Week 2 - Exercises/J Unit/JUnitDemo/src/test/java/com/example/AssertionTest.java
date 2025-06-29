package com.example;

import static org.junit.Assert.*;

import org.junit.Test;

public class AssertionTest { 
    @Test 
    public void testAssertions() {
    	MathUtils math = new MathUtils();
    	MathUtils m = null;
    	int result1 = math.add(2, 3);
    	int result2 = math.subtract(5, 2);
        // Assert equals 
        assertEquals(5 , result1);
        assertEquals(3 , result2);
 
        // Assert true 
        assertTrue(6 > result1); 
        assertTrue(5 > result2); 
 
        // Assert false 
        assertFalse(6 < result1);
        assertFalse(5 < result2);  
 
        // Assert null 
        assertNull(m);
        
        // Assert not null 
        assertNotNull(math);
        
    } 
}