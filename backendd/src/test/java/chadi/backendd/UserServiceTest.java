package chadi.backendd;

import chadi.backendd.model.User;
import chadi.backendd.repositories.UserRepository;
import chadi.backendd.service.UserService;
import org.assertj.core.api.Assert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    public void setUp(){
        MockitoAnnotations.openMocks(this);
    }

    @Test
    //Arrange : Préparer les données pour le(s) test(s)
    public void testFindAll(){
        User u1 = new User("tata", "tata@toto.com","pwd_tata");
        User u2 = new User("toto", "toto@tata.com","pwd_toto");

        List<User> userList = Arrays.asList(u1,u2);

        when(userRepository.findAll()).thenReturn(userList);

        //Act: Appel la méthode de service que tu veux tester
        List<User> resultat = userService.findAllUsers();

        //Assert
        //assertEquals(2,resultat.size());
        //assertTrue(u1.getUsername() != u2.getUsername());
        assertEquals("tata",u1.getUsername());
        assertEquals("toto",u2.getUsername());
    }
}
