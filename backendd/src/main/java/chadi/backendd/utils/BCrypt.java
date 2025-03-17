package chadi.backendd.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BCrypt {

    public static void main(String[] args){
        BCryptPasswordEncoder pwdEncoder = new BCryptPasswordEncoder();

        String myPwd = "Toto12345";

        String hashpwd = pwdEncoder.encode(myPwd);

        System.out.println("My password is: " + myPwd);
        System.out.println("HASH password is: " + hashpwd);

        boolean verifHash = pwdEncoder.matches(myPwd,hashpwd);
        System.out.println(verifHash);
    }

}
