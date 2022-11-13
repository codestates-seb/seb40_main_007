package codestates.main007.service;

import lombok.AllArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@AllArgsConstructor
@Transactional
@Async
public class EmailService {
    private JavaMailSender mailSender;
    private static final String FROM_ADDRESS = "yeogiyo007@gmail.com";

    public void findPassword(String address,String password) {
        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(FROM_ADDRESS);
        message.setTo(address);
        message.setSubject("안녕하세요 역이요입니다.");
        message.setText("귀하의 임시 비밀번호는 " +password+ "입니다.\n반드시 비밀번호를 변경해주세요");

        mailSender.send(message);
    }
}
