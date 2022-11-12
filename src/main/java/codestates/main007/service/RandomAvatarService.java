package codestates.main007.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RandomAvatarService {
    public String genAvatar() {
        List<String> images = new ArrayList<>();
        images.add("https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/profile_blue.png");
        images.add("https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/profile_red.png");
        images.add("https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/profile_green.png");
        Collections.shuffle(images);

        return images.get(0);
    }
}
