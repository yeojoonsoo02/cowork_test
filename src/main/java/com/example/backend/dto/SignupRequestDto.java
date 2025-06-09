package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class SignupRequestDto {
    private String email;
    private String password;
    private String name;
    private LocalDateTime createdAt;
}
