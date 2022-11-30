package codestates.main007.board.dto;

import lombok.Builder;
import lombok.Getter;

public class BoardOfWeekDto {
    @Getter
    @Builder
    public static class Mon implements BoardOfWeek {
        private int TUE;
        private int WED;
        private int THU;
        private int FRI;
        private int SAT;
        private int SUN;
        private int MON;
    }

    @Getter
    @Builder
    public static class TUE implements BoardOfWeek {
        private int WED;
        private int THU;
        private int FRI;
        private int SAT;
        private int SUN;
        private int MON;
        private int TUE;
    }

    @Getter
    @Builder
    public static class WED implements BoardOfWeek {
        private int THU;
        private int FRI;
        private int SAT;
        private int SUN;
        private int MON;
        private int TUE;
        private int WED;
    }

    @Getter
    @Builder
    public static class THU implements BoardOfWeek {
        private int FRI;
        private int SAT;
        private int SUN;
        private int MON;
        private int TUE;
        private int WED;
        private int THU;
    }

    @Getter
    @Builder
    public static class FRI implements BoardOfWeek {
        private int SAT;
        private int MON;
        private int SUN;
        private int TUE;
        private int WED;
        private int THU;
        private int FRI;
    }

    @Getter
    @Builder
    public static class SAT implements BoardOfWeek {
        private int SUN;
        private int MON;
        private int TUE;
        private int WED;
        private int THU;
        private int FRI;
        private int SAT;
    }

    @Getter
    @Builder
    public static class SUN implements BoardOfWeek {
        private int MON;
        private int TUE;
        private int WED;
        private int THU;
        private int FRI;
        private int SAT;
        private int SUN;
    }
}
