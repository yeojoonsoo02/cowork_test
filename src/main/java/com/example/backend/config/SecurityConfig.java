package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;
import static org.springframework.security.config.annotation.web.builders.HttpSecurity.*;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.backend.util.JWTUtil;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	    http
	        .csrf(csrf -> csrf.disable())
	        .authorizeHttpRequests(auth -> auth
	            .requestMatchers("/api/auth/**").permitAll()
	            .anyRequest().authenticated()
	        )
	        .sessionManagement(sess -> sess.sessionCreationPolicy(STATELESS))
	        .addFilterBefore(new JWTAuthenticationFilter(jwtUtil()), UsernamePasswordAuthenticationFilter.class); // 필터 추가

	    return http.build();
	}

	@Bean
	public JWTUtil jwtUtil() {
	    return new JWTUtil();
	}
}
