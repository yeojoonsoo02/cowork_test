package com.example.backend.service;

import com.example.backend.dto.LoginRequestDto;  // 클래스명 변경에 맞춰서 수정
import com.example.backend.entity.User;
import com.example.backend.repository.UserRepository;  // 방금 만든 인터페이스
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import com.example.backend.dto.SignupRequestDto;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.example.backend.util.JWTUtil;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;
    
    
    @Autowired
    private JWTUtil jwtUtil;

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    
    // 로그인 로직
    public String login(LoginRequestDto request) {
        if (request == null || request.getEmail() == null || request.getPassword() == null) {
            return null;
        }

        Optional<User> optionalUser = userRepository.findByEmail(request.getEmail());

        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            if (passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                return jwtUtil.createToken(user.getEmail()); // 로그인 성공 시 토큰 반환
            }
        }

        return null; // 로그인 실패
    }

    // 회원가입 로직
    public boolean signup(SignupRequestDto requestDto) {
        // 이이메일 중복 체크
        Optional<User> existingUser = userRepository.findByEmail(requestDto.getEmail());
        if (existingUser.isPresent()) {
            return false;
        }
        
        // 비밀번호 암호화
        String encryptedPassword = passwordEncoder.encode(requestDto.getPassword());

        // 새 사용자 생성 후 저장
        User newUser = new User();
        newUser.setName(requestDto.getName());
        newUser.setEmail(requestDto.getEmail());
        newUser.setPassword(encryptedPassword); 
        newUser.setCreatedAt(requestDto.getCreatedAt());

        userRepository.save(newUser);
        
        return true;
    }
}
