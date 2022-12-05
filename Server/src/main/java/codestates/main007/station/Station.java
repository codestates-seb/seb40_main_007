package codestates.main007.station;

import lombok.Getter;

@Getter
public class Station {
    private long stationId;
    private String name;
    private double latitude;
    private double longitude;

    public Station(int stationId) {
        switch (stationId){
            case 1 :
                this.stationId = 1;
                this.name = "행신역";
                this.latitude = 37.6121307;
                this.longitude = 126.8341891;
                break;

            case 2 :
                this.stationId = 2;
                this.name = "서울역";
                this.latitude = 37.5549890;
                this.longitude = 126.9695548;
                break;

            case 3 :
                this.stationId = 3;
                this.name = "영등포역";
                this.latitude = 37.5156680;
                this.longitude = 126.9076660;
                break;

            case 4 :
                this.stationId = 4;
                this.name = "광명역";
                this.latitude = 37.4163636;
                this.longitude = 126.8848772;
                break;

            case 5 :
                this.stationId = 5;
                this.name = "수원역";
                this.latitude = 37.2656796;
                this.longitude = 127.0002404;
                break;

            case 6 :
                this.stationId = 6;
                this.name = "천안아산역";
                this.latitude = 36.7945269;
                this.longitude = 127.1044505;
                break;

            case 7 :
                this.stationId = 7;
                this.name = "오송역";
                this.latitude = 36.6204748;
                this.longitude = 127.3271435;
                break;

            case 8 :
                this.stationId = 8;
                this.name = "대전역";
                this.latitude = 36.3313335;
                this.longitude = 127.4330053;
                break;

            case 9 :
                this.stationId = 9;
                this.name = "김천구미역";
                this.latitude = 36.1135294;
                this.longitude = 128.1811768;
                break;

            case 10 :
                this.stationId = 10;
                this.name = "서대구역";
                this.latitude = 35.8813532;
                this.longitude = 128.5398916;
                break;

            case 11 :
                this.stationId = 11;
                this.name = "동대구역";
                this.latitude = 35.8794362;
                this.longitude = 128.6287756;
                break;

            case 12 :
                this.stationId = 12;
                this.name = "밀양역";
                this.latitude = 35.4744720;
                this.longitude = 128.7711620;
                break;

            case 13 :
                this.stationId = 13;
                this.name = "구포역";
                this.latitude = 35.2054724;
                this.longitude = 128.9971420;
                break;

            case 14 :
                this.stationId = 14;
                this.name = "부산역";
                this.latitude = 35.1177214;
                this.longitude = 129.0449881;
                break;

            case 15 :
                this.stationId = 15;
                this.name = "울산역";
                this.latitude = 35.5514992;
                this.longitude = 129.1386316;
                break;

            case 16 :
                this.stationId = 16;
                this.name = "신경주역";
                this.latitude = 35.7980811;
                this.longitude = 129.1393977;
                break;

            case 17 :
                this.stationId = 17;
                this.name = "포항역";
                this.latitude = 36.0716843;
                this.longitude = 129.3419644;
                break;
        }
    }
}
