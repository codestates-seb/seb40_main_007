package codestates.main007.service;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

public class EmailService {
    private JavaMailSender mailSender;

    public void sendMail(String email) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("yeogiyo007@gmail.com");
        message.setTo(email);
        message.setSubject("안녕하세요 역이요입니다.");
        //todo: 패스워드를 찾아 일부분을 ●로 바꾸는 메서드
        message.setText("귀하의 비밀번호는 " + "입니다.");
        mailSender.send(message);
    }
}
