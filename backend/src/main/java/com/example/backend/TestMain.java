package com.example.backend;

import com.example.backend.dto.LombokTest;

public class TestMain {
    public static void main(String[] args) {
        LombokTest test = new LombokTest();
        test.setName("지섭");
        System.out.println(test.getName());  // → "지섭" 출력돼야 함!
    }
}