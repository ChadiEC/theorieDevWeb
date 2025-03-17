package chadi.backendd.controller;

import chadi.backendd.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/signin/{username}/{pwd}")
    public boolean singIn(@PathVariable String username,@PathVariable String pwd){

        return userService.login(username,pwd);
    }

    @GetMapping("/signin2")
    public boolean singIn2(@RequestParam String username, @RequestParam String pwd){

        return userService.login(username,pwd);
    }
}
