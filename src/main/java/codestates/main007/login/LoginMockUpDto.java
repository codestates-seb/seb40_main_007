package codestates.main007.login;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class LoginMockUpDto {
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class checkPassword {
        private String password;
    }
}
