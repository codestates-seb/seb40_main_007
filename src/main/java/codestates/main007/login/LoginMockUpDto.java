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
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class loginDto {
        private String email;
        private String password;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class response {
        private long memberId;
        private String avatar;
        private String name;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class email {
        private String email;
    }


}
