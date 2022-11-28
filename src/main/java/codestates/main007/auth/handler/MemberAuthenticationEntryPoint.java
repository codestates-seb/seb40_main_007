package codestates.main007.auth.handler;

import codestates.main007.auth.util.ErrorResponder;
import codestates.main007.exception.ExceptionCode;
import com.google.gson.JsonObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;

@Slf4j
@Component
public class MemberAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException {
        Exception exception = (Exception) request.getAttribute("exception");
        String exceptionMessage = exception.getMessage();
        if (exceptionMessage.equals("EXPIRED_TOKEN")){
            setResponse(response, ExceptionCode.EXPIRED_TOKEN);
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
        } else {
            ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
        }

        log.warn("Unauthorized error happened: {}",
                exception != null ? exception.getMessage() : authException.getMessage());
    }
    private void setResponse(HttpServletResponse response, ExceptionCode errorCode) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

        JsonObject responseJson = new JsonObject();
        responseJson.addProperty("timestamp", String.valueOf(LocalDateTime.now()));
        responseJson.addProperty("status", errorCode.getStatus());
        responseJson.addProperty("message", errorCode.getMessage());

        response.getWriter().print(responseJson);
    }
}

