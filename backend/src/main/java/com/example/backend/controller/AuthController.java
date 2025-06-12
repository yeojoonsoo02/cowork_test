package com.example.backend.controller;

import com.example.backend.dto.LoginRequestDto;
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
    public ResponseEntity<String> login(@RequestBody LoginRequestDto requestDto) {
        String token = authService.login(requestDto);

        if (token != null) {
            return ResponseEntity.ok("로그인 성공! 토큰: " + token);
            // 또는 JSON 형식으로 주고 싶으면:
            // return ResponseEntity.ok("{\"token\": \"" + token + "\"}");
        } else {
            return ResponseEntity.status(401).body("이메일 또는 비밀번호가 올바르지 않습니다.");
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
