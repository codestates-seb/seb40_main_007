package codestates.main007.boardImage;

import codestates.main007.board.Board;
import net.coobird.thumbnailator.Thumbnails;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class ImageHandler {
    public List<BoardImage> parseImageInfo(Board board, List<MultipartFile> multipartFiles) throws IOException {
        List<BoardImage> images = new ArrayList<>();

        if (multipartFiles.isEmpty()) {
            return images;
        }

        // 파일 이름은 업로드 일자로 저장
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
        String currentDate = simpleDateFormat.format(new Date());

        // 절대 경로 설정
        // todo: s3로 변경
        String absolutePath = new File("").getAbsolutePath() + "\\";
        // 저장 경로 설정
        String path = "images/" + currentDate;
        File file = new File(path);

        // 디렉토리가 없을 때 생성
        if (!file.exists()) {
            file.mkdirs();
        }
        for (int i = 0; i < multipartFiles.size(); i++) {
            MultipartFile multipartFile = multipartFiles.get(i);

            if (!multipartFile.isEmpty()) {
                // 확장자 명 검증 절차
                String contentType = multipartFile.getContentType();
                String originalFileExtension;
                // 확장자 명이 없으면 잘못된 파일이므로 중지
                if (ObjectUtils.isEmpty(contentType)) {
                    break;
                } else {
                    if (contentType.contains("image/jpeg")) {
                        originalFileExtension = ".jpg";
                    } else if (contentType.contains("image/jpg")) {
                        originalFileExtension = ".jpg";
                    } else if (contentType.contains("image/png")) {
                        originalFileExtension = ".png";
                    } else if (contentType.contains("image/gif")) {
                        originalFileExtension = ".gif";
                    } else if (contentType.contains("image/heic")) {
                        originalFileExtension = ".heic";
                    } else {
                        break;
                    }
                    // 현재 시간 + 확장자
                    String newFileName = System.nanoTime() + originalFileExtension;

                    // 보드-이미지 생성
                    BoardImage boardImage = BoardImage.builder()
                            .board(board)
                            .originalFileName(newFileName)
                            .stored_file_path(path + "/" + newFileName)
                            .fileSize(multipartFile.getSize())
                            .build();

                    images.add(boardImage);

                    // 저장된 파일로 변경하여 이를 보여주기
                    file = new File(absolutePath + path + "/" + newFileName);
                    multipartFile.transferTo(file);
                }
                if (i == 0) {
                    //썸네일 생성 메서드
                    File thumbnail = new File(absolutePath + path + "/" + "thumbnail_of_" + board.getBoardId());
                    Thumbnails.of(file).size(100, 100).outputFormat("png").toFile(thumbnail);
                }
            }
        }
        return images;
    }
}
