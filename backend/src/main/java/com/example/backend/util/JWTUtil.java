package com.example.backend.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;


import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JWTUtil {

	private final SecretKey secretKey = Keys.hmacShaKeyFor("mysecretkeymysecretkeymysecretkey".getBytes());
	

    // 만료시간: 현재 시간 + 1시간 (단위: 밀리초)
    private final long expirationMs = 1000 * 60 * 60;

    public String createToken(String email) {
        return Jwts.builder()
                .setSubject(email) // JWT의 주제(subject)
                .setIssuedAt(new Date()) // 토큰 발급 시간
                .setExpiration(new Date(System.currentTimeMillis() + expirationMs)) // 만료시간 설정
                .signWith(secretKey, SignatureAlgorithm.HS256) // HS256 방식 + 비밀키
                .compact(); // 최종적으로 문자열 토큰 생성
    }
    
    public String getEmailFromToken(String token) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody()
                    .getSubject();
        } catch (Exception e) {
            return null;
        }
    }
}
