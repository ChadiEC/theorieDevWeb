package chadi.backendd.service;

import chadi.backendd.model.User;
import chadi.backendd.repositories.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
    private final UserRepository userRepo;

    public UserService(UserRepository userRepo){
        this.userRepo = userRepo;
    }

    public boolean login(String username,String frontEndPwd){
        //findUserByUsername
        User u = userRepo.findUserByUsername(username);

        //check if pwds matches
        return passwordEncoder.matches(frontEndPwd,u.getPassword());
    }

    public List<User> findAllUsers(){
        return userRepo.findAll();
    }
}
