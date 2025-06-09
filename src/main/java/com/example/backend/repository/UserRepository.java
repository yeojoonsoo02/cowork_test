package com.example.backend.repository;

import com.example.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// User 엔티티를 처리하는 JPA 레포지토리 인터페이스
public interface UserRepository extends JpaRepository<User, Long> {

    // 이메일로 User를 조회할 때 사용할 메서드
    Optional<User> findByEmail(String email);
}
