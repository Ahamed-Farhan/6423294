package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MathUtilsTest {

    @Test
    void testAdd() {
        MathUtils math = new MathUtils();
        int result = math.add(2, 3);
        assertEquals(5, result);
    }

    @Test
    void testSubtract() {
        MathUtils math = new MathUtils();
        int result = math.subtract(3, 2);
        assertEquals(1, result);
    }
}
