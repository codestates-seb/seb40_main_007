package codestates.main007.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

@Service
public class DistanceMeasuringService {

    @Value("${TMAP_APPKEY}")
    private String apiKey; //티맵 API 앱키 설정

    public void getTime(double startLat, double startLong, double endLat, double endLong){
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

        int startIdx = response.getBody().indexOf("totalTime");
        String subStr = str.substring(startIdx+11,startIdx+16);
        subStr = subStr.replace(",","").replace(" ","");
        int time = Integer.parseInt(subStr);

        System.out.println(time/60 + "분 후에 도착입니다.");
    }
}
