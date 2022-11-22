package codestates.main007.boardImage;

import codestates.main007.board.Board;
import codestates.main007.member.Member;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.*;
import com.amazonaws.util.IOUtils;
import lombok.RequiredArgsConstructor;
import net.coobird.thumbnailator.Thumbnails;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.util.ObjectUtils;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.*;
import java.nio.file.Files;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ImageHandler {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    private final AmazonS3 amazonS3;

    public List<BoardImage> parseImageInfo(Board board, List<MultipartFile> multipartFiles) throws IOException {
        List<BoardImage> images = new ArrayList<>();

        if (multipartFiles.isEmpty()) {
            return images;
        }

        // 파일 이름은 업로드 일자로 저장
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
        String currentDate = simpleDateFormat.format(new Date());

        // 절대 경로 설정
        // todo: 나중에 s3로 변경
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
                    // 10MB 초과 시 리사이징
                    if (multipartFile.getSize() > 10485760) {
                        Thumbnails.of(file).size(1920, 1280).toFile(file);
                    }
                    System.out.println(multipartFile.getSize());


                }
                if (i == 0) {
                    //썸네일 생성 메서드
                    File thumbnail = new File(absolutePath + path + "/" + "thumbnail_of_" + board.getBoardId());
                    Thumbnails.of(file).size(300, 300).outputFormat("png").toFile(thumbnail);
                }
            }
        }
        return images;
    }

    public String updateAvatar(MultipartFile image, Member member) throws IOException {
        // 절대 경로 설정
        // todo: 나중에 s3로 변경
        String absolutePath = new File("").getAbsolutePath() + "\\";
        // 저장 경로 설정
        String path = "images/" + "avatar";
        File file = new File(path);
        if (!file.exists()) {
            file.mkdirs();
        }

        String contentType = image.getContentType();
        String originalFileExtension = ".jpg";
        // 확장자 명이 없으면 잘못된 파일이므로 중지

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
        }
        // 현재 시간 + 확장자
        String newFileName = "avatar_of_" + member.getMemberId() + originalFileExtension;

        // 저장된 파일로 변경하여 이를 보여주기
        file = new File(absolutePath + path + "/" + newFileName);
        image.transferTo(file);

        //todo: 배포후 변경
        return "s3에 저장된 이미지 주소";
    }

    public List<BoardImage> saveImageOnS3(Board board, List<MultipartFile> multipartFiles) throws IOException {
        List<BoardImage> images = new ArrayList<>();

        if (multipartFiles.isEmpty()) {
            return images;
        }

        for (int i = 0; i < multipartFiles.size(); i++) {
            MultipartFile image = multipartFiles.get(i);

            String fileName = board.getBoardId() + "board_" + i;

            //파일 형식 구하기
            if (!image.isEmpty()) {
                // 확장자 명 검증 절차
                String contentType = image.getContentType();
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
                    //content type을 지정해서 올려주지 않으면 자동으로 "application/octet-stream"으로 고정이 되서 링크 클릭시 웹에서 열리는게 아니라 자동 다운이 시작됨.

                    try {
                        ObjectMetadata metadata = new ObjectMetadata();
                        metadata.setContentType(contentType);

                        amazonS3.putObject(new PutObjectRequest(bucket, fileName, image.getInputStream(), metadata)
                                .withCannedAcl(CannedAccessControlList.PublicRead));
                    } catch (AmazonServiceException e) {
                        e.printStackTrace();
                    } catch (SdkClientException e) {
                        e.printStackTrace();
                    }

                    //object 정보 가져오기
                    ListObjectsV2Result listObjectsV2Result = amazonS3.listObjectsV2(bucket);
                    List<S3ObjectSummary> objectSummaries = listObjectsV2Result.getObjectSummaries();

                    for (S3ObjectSummary object : objectSummaries) {
                        System.out.println("object = " + object.toString());
                    }

                    BoardImage boardImage = BoardImage.builder()
                            .board(board)
                            .originalFileName(fileName)
                            .stored_file_path(amazonS3.getUrl(bucket, fileName).toString())
                            .fileSize(image.getSize())
                            .build();

                    images.add(boardImage);

                    if (i == 0) {
                        // 절대 경로 설정
                        // todo: 나중에 s3로 변경
                        String absolutePath = new File("").getAbsolutePath() + "\\";
                        // 저장 경로 설정
                        String path = "thumbnail";

                        File file = new File(path);

                        // 디렉토리가 없을 때 생성
                        if (!file.exists()) {
                            file.mkdirs();
                        }

                        //썸네일 생성 메서드
                        String thumbnailName = "thumbnail_of_" + board.getBoardId();
                        file = new File(absolutePath+path+"/"+board.getBoardId());

                        image.transferTo(file);

                        File thumbnail = new File(absolutePath+path+"/"+thumbnailName);
                        Thumbnails.of(file).size(300, 300).outputFormat("png").toFile(thumbnail);

                        FileItem fileItem = new DiskFileItem("thumbnail", Files.probeContentType(thumbnail.toPath()), false, thumbnail.getName(), (int) thumbnail.length() , thumbnail.getParentFile());

                        try {
                            InputStream input = new FileInputStream(file);
                            OutputStream os = fileItem.getOutputStream();
                            IOUtils.copy(input, os);
                            // Or faster..
                            // IOUtils.copy(new FileInputStream(file), fileItem.getOutputStream());
                        } catch (IOException ex) {
                            // do something.
                        }

                        //jpa.png -> multipart 변환
                        MultipartFile mpThumbnail = new CommonsMultipartFile(fileItem);

                        ObjectMetadata metadata = new ObjectMetadata();
                        metadata.setContentType("image/png");

                        amazonS3.putObject(new PutObjectRequest(bucket, thumbnailName, mpThumbnail.getInputStream(), metadata)
                                .withCannedAcl(CannedAccessControlList.PublicRead));
                        // ec2에 저장된 이미지는 삭제
                        file.delete();
                        thumbnail.delete();
                    }
                }
            }
        }
        return images;
    }
}