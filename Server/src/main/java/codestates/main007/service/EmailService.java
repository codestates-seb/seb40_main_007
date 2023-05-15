package codestates.main007.service;

import lombok.AllArgsConstructor;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.transaction.Transactional;

@Service
@AllArgsConstructor
@Transactional
@Async
public class EmailService {
    private JavaMailSender mailSender;
    private static final String FROM_ADDRESS = "yeogiyo007@gmail.com";

    public void findPassword(String address, String password) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        message.addRecipients(MimeMessage.RecipientType.TO, address);
        message.setFrom(FROM_ADDRESS);
        message.setSubject("안녕하세요 역이요입니다");
        message.setText("<div align='center' style='margin:100px; font-family: Malgun Gothic;'>\n" +
                        "<div style='background-color:white; opacity:0.7;'>\n" +
                        "<br>\n" +
                        "<h1>안녕하세요<br>당신의 여행파트너! 역이요입니다</h1>\n" +
                        "\n" +
                        "<h2>역이요와 함께 여행해주셔서 감사합니다!<h2>\n" +
                        "<br>\n" +
                        "</div>\n" +
                        "<br>\n" +
                        "<img src ='https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/Logo.png' width='200' height='200' align='center'>\n" +
                        "<br><br>\n" +
                        "<br>\n" +
                        "<p>귀하의 임시 비밀번호는 아래와 같습니다.</p>\n" +
                        "<p><strong>" + password + "</strong></p>\n" +
                        "<p>반드시 비밀번호를 변경해주세요!</p>\n" +
                        "<br>\n" +
                        "<p style ='font-size:10'>홈페이지로 이동 : <a href='http://yeogiyo.site'>역이요 홈페이지로 이동</a></p>"
                , "utf-8", "html");
        mailSender.send(message);
    }
}
