package com.example.backend.controller;

import com.example.backend.dto.LoginRequestDto;
import com.example.backend.dto.TokenResponseDto;
import com.example.backend.dto.SignupRequestDto;
import com.example.backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
	
	@Autowired
    private AuthService authService;
	

    @PostMapping("/login")
    public ResponseEntity<TokenResponseDto> login(@RequestBody LoginRequestDto requestDto) {
        String token = authService.login(requestDto);

        if (token != null) {
        	return ResponseEntity.ok(new TokenResponseDto(token));
        } else {
        	return ResponseEntity.status(401).body(null); // 또는 ResponseEntity.of(Optional.empty())
        }
    }
    
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody SignupRequestDto requestDto) {
        boolean success = authService.signup(requestDto);
        if (success) {
            return ResponseEntity.ok("회원가입이 완료되었습니다.");
        } else {
            return ResponseEntity.badRequest().body("이미 존재하는 이메일입니다.");
        }
    }
}
