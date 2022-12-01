package codestates.main007.service;

import codestates.main007.exception.ExceptionCode;
import codestates.main007.planner.dto.PlannerDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Service
public class DistanceMeasuringService {

    @Value("${TMAP_APPKEY}")
    private String apiKey; //티맵 API 앱키 설정

    public int getTime(double startLat, double startLong, double endLat, double endLong) {
        URI uri = UriComponentsBuilder
                .fromUriString("https://apis.openapi.sk.com/")
                .path("tmap/routes/pedestrian")
                .queryParam("version", "1")
                .queryParam("startX", String.valueOf(startLong))
                .queryParam("startY", String.valueOf(startLat))
//                .queryParam("format", "json")
                .queryParam("callback", "result")
                .queryParam("endX", String.valueOf(endLong))
                .queryParam("endY", String.valueOf(endLat))
                .queryParam("reqCoordType", "WGS84GEO")
                .queryParam("resCoordType", "EPSG3857")
                .queryParam("startName", "from")
                .queryParam("endName", "to")
                .queryParam("searchOption", "0")
                .queryParam("trafficInfo", "Y")
                .encode()
                .build()
                .toUri();

        RestTemplate restTemplate = new RestTemplate();
        RequestEntity<Void> req = RequestEntity
                .get(uri)
                .header("appKey", apiKey)
                .build();
        ResponseEntity<String> response = restTemplate.exchange(req, String.class);
        String str = response.getBody();

        if (str.equals("") || str == null) {
            throw new ResponseStatusException(ExceptionCode.CAN_NOT_MEASUERMENT.getStatus(), ExceptionCode.CAN_NOT_MEASUERMENT.getMessage(), new IllegalArgumentException());
        }

        int startIdx = response.getBody().indexOf("totalTime");
        String result = "";

        for (int i = 0; i < 15; i++) {
            if (str.charAt(startIdx + 12 + i) == ',') {
                break;
            }
            result += str.charAt(startIdx + 12 + i);
        }

//        String subStr = str.substring(startIdx + 12, startIdx + 16);
//        subStr = subStr.replace(",", "").replace(" ", "");
//        int time = Integer.parseInt(subStr);
        int time = Integer.parseInt(result);

        return time;
    }

    public PlannerDto.Time getPlannerTime(double startLat, double startLong, double endLat, double endLong) throws InterruptedException {
        URI uri = UriComponentsBuilder
                .fromUriString("https://apis.openapi.sk.com/")
                .path("tmap/routes/pedestrian")
                .queryParam("version", "1")
                .queryParam("startX", String.valueOf(startLong))
                .queryParam("startY", String.valueOf(startLat))
//                .queryParam("format", "json")
                .queryParam("callback", "result")
                .queryParam("endX", String.valueOf(endLong))
                .queryParam("endY", String.valueOf(endLat))
                .queryParam("reqCoordType", "WGS84GEO")
                .queryParam("resCoordType", "EPSG3857")
                .queryParam("startName", "from")
                .queryParam("endName", "to")
                .queryParam("searchOption", "0")
                .queryParam("trafficInfo", "Y")
                .encode()
                .build()
                .toUri();

        RestTemplate restTemplate = new RestTemplate();
        RequestEntity<Void> req = RequestEntity
                .get(uri)
                .header("appKey", apiKey)
                .build();
        ResponseEntity<String> response = restTemplate.exchange(req, String.class);
        String str = response.getBody();

        if (str.equals("") || str == null) {
            throw new ResponseStatusException(ExceptionCode.CAN_NOT_MEASUERMENT.getStatus(), ExceptionCode.CAN_NOT_MEASUERMENT.getMessage(), new IllegalArgumentException());
        }

        int startIdx = response.getBody().indexOf("totalTime");
        String subStr = str.substring(startIdx + 11, startIdx + 16);
        subStr = subStr.replace(",", "").replace(" ", "");
        int time = Integer.parseInt(subStr);

        // 30분 초과시
        if (time > 1800) {
            Thread.sleep(200);
            uri = UriComponentsBuilder
                    .fromUriString("https://apis.openapi.sk.com/")
                    .path("tmap/routes")
                    .queryParam("version", "1")
                    .queryParam("startX", String.valueOf(startLong))
                    .queryParam("startY", String.valueOf(startLat))
//                .queryParam("format", "json")
                    .queryParam("callback", "result")
                    .queryParam("endX", String.valueOf(endLong))
                    .queryParam("endY", String.valueOf(endLat))
                    .queryParam("reqCoordType", "WGS84GEO")
                    .queryParam("resCoordType", "EPSG3857")
                    .queryParam("startName", "from")
                    .queryParam("endName", "to")
                    .queryParam("searchOption", "0")
                    .queryParam("trafficInfo", "Y")
                    .encode()
                    .build()
                    .toUri();

            restTemplate = new RestTemplate();
            req = RequestEntity
                    .get(uri)
                    .header("appKey", apiKey)
                    .build();
            response = restTemplate.exchange(req, String.class);
            str = response.getBody();

            if (str.equals("") || str == null) {
                throw new ResponseStatusException(ExceptionCode.CAN_NOT_MEASUERMENT.getStatus(), ExceptionCode.CAN_NOT_MEASUERMENT.getMessage(), new IllegalArgumentException());
            }

            startIdx = response.getBody().indexOf("totalTime");
            subStr = str.substring(startIdx + 11, startIdx + 16);
            subStr = subStr.replace(",", "").replace(" ", "");
            time = Integer.parseInt(subStr);

            return PlannerDto.Time.builder()
                    .type("car")
                    .time(time)
                    .build();
        }
        return PlannerDto.Time.builder()
                .type("walk")
                .time(time)
                .build();
    }
}
