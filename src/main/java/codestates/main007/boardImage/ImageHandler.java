package codestates.main007.boardImage;

import codestates.main007.board.Board;
import codestates.main007.board.BoardRepository;
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
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@RequiredArgsConstructor
public class ImageHandler {
    @Value("${cloud.aws.s3.bucket}")
    private String bucket;
    private final AmazonS3 amazonS3;

    private final BoardRepository boardRepository;

    private final BoardImageRepository boardImageRepository;


    // 로컬에 저장하는 메서드 - 삭제예정
//    public List<BoardImage> parseImageInfo(Board board, List<MultipartFile> multipartFiles) throws IOException {
//        List<BoardImage> images = new ArrayList<>();
//
//        if (multipartFiles.isEmpty()) {
//            return images;
//        }
//
//        // 파일 이름은 업로드 일자로 저장
//        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyyMMdd");
//        String currentDate = simpleDateFormat.format(new Date());
//
//        // 절대 경로 설정
//        String absolutePath = new File("").getAbsolutePath() + "\\";
//        // 저장 경로 설정
//        String path = "images/" + currentDate;
//        File file = new File(path);
//
//        // 디렉토리가 없을 때 생성
//        if (!file.exists()) {
//            file.mkdirs();
//        }
//        for (int i = 0; i < multipartFiles.size(); i++) {
//            MultipartFile multipartFile = multipartFiles.get(i);
//
//            if (!multipartFile.isEmpty()) {
//                // 확장자 명 검증 절차
//                String contentType = multipartFile.getContentType();
//                String originalFileExtension;
//                // 확장자 명이 없으면 잘못된 파일이므로 중지
//                if (ObjectUtils.isEmpty(contentType)) {
//                    break;
//                } else {
//                    if (contentType.contains("image/jpeg")) {
//                        originalFileExtension = ".jpg";
//                    } else if (contentType.contains("image/jpg")) {
//                        originalFileExtension = ".jpg";
//                    } else if (contentType.contains("image/png")) {
//                        originalFileExtension = ".png";
//                    } else if (contentType.contains("image/gif")) {
//                        originalFileExtension = ".gif";
//                    } else if (contentType.contains("image/heic")) {
//                        originalFileExtension = ".heic";
//                    } else {
//                        break;
//                    }
//                    // 현재 시간 + 확장자
//                    String newFileName = System.nanoTime() + originalFileExtension;
//
//                    // 보드-이미지 생성
//                    BoardImage boardImage = BoardImage.builder()
//                            .board(board)
//                            .originalFileName(newFileName)
//                            .stored_file_path(path + "/" + newFileName)
//                            .fileSize(multipartFile.getSize())
//                            .build();
//
//                    images.add(boardImage);
//
//                    // 저장된 파일로 변경하여 이를 보여주기
//                    file = new File(absolutePath + path + "/" + newFileName);
//                    multipartFile.transferTo(file);
//                    // 10MB 초과 시 리사이징
//                    if (multipartFile.getSize() > 10485760) {
//                        Thumbnails.of(file).size(1920, 1280).toFile(file);
//                    }
//                    System.out.println(multipartFile.getSize());
//
//
//                }
//                if (i == 0) {
//                    //썸네일 생성 메서드
//                    File thumbnail = new File(absolutePath + path + "/" + "thumbnail_of_" + board.getBoardId());
//                    Thumbnails.of(file).size(300, 300).outputFormat("png").toFile(thumbnail);
//                }
//            }
//        }
//        return images;
//    }

    public String updateAvatar(MultipartFile image, Member member) throws IOException {
        // 절대 경로 설정
        // todo: 나중에 s3로 변경
        String absolutePath = new File("").getAbsolutePath() + "/";
        // 저장 경로 설정
        String path = "images/avatar";
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

        String newFileName = "avatar_of_" + member.getMemberId() + originalFileExtension;

        // 저장된 파일로 변경하여 이를 보여주기
        file = new File(absolutePath + path + "/" + "avatar_of_" + member.getMemberId()+"_origin" + originalFileExtension);
        image.transferTo(file);

        File file2 = new File(absolutePath + path + "/" + newFileName);
        Thumbnails.of(file).size(100, 100).outputFormat("png").toFile(file2);

        FileItem fileItem = new DiskFileItem("mainFile", Files.probeContentType(file2.toPath()), false, file2.getName(), (int) file2.length(), file2.getParentFile());

        try {
            InputStream input = new FileInputStream(file2);
            OutputStream os = fileItem.getOutputStream();
            IOUtils.copy(input, os);
            // Or faster..
            // IOUtils.copy(new FileInputStream(file), fileItem.getOutputStream());
        } catch (IOException ex) {
            // do something.
        }

        MultipartFile multipartFile = new CommonsMultipartFile(fileItem);

        String avatarName = "member_avatar/" + System.nanoTime() + "avatar_of_" + member.getMemberId();

        try {
            ObjectMetadata metadata = new ObjectMetadata();
            byte[] bytes = IOUtils.toByteArray(multipartFile.getInputStream());
            metadata.setContentType(contentType);
            metadata.setContentLength(bytes.length);
            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bytes);

            amazonS3.putObject(new PutObjectRequest(bucket, avatarName, byteArrayInputStream, metadata)
                    .withCannedAcl(CannedAccessControlList.PublicRead));

        } catch (AmazonServiceException e) {
            e.printStackTrace();
        } catch (SdkClientException e) {
            e.printStackTrace();
        }

        // s3에 업로드 후 ec2 파일은 제거
        file.delete();
        file2.delete();

        return "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/" + avatarName;
    }

    public List<BoardImage> saveImageOnS3(Board board, List<MultipartFile> multipartFiles) throws IOException {
        List<BoardImage> images = new ArrayList<>();

        if (multipartFiles.isEmpty()) {
            return images;
        }

        for (int i = 0; i < multipartFiles.size(); i++) {
            MultipartFile image = multipartFiles.get(i);

            String fileName = "board_images/" + board.getBoardId() + "board_" + i;

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
                        byte[] bytes = IOUtils.toByteArray(image.getInputStream());
                        metadata.setContentType(contentType);
                        metadata.setContentLength(bytes.length);
                        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bytes);

                        amazonS3.putObject(new PutObjectRequest(bucket, fileName, byteArrayInputStream, metadata)
                                .withCannedAcl(CannedAccessControlList.PublicRead));

                    } catch (AmazonServiceException e) {
                        e.printStackTrace();
                    } catch (SdkClientException e) {
                        e.printStackTrace();
                    }

                    BoardImage boardImage = BoardImage.builder()
                            .board(board)
                            .originalFileName(fileName)
                            .storedFilePath(amazonS3.getUrl(bucket, fileName).toString())
                            .fileSize(image.getSize())
                            .build();

                    images.add(boardImage);

                    if (i == 0) {
                        String absolutePath = new File("").getAbsolutePath() + "/";
                        // 저장 경로 설정
                        String path = "images";
                        File file = new File(path);

                        // 디렉토리가 없을 때 생성
                        if (!file.exists()) {
                            file.mkdirs();
                        }

                        String newFileName = System.nanoTime() + originalFileExtension;

                        file = new File(absolutePath + path + "/" + newFileName);
                        image.transferTo(file);

                        Thumbnails.of(file).size(300, 300).outputFormat("png").toFile(file);

                        FileItem fileItem = new DiskFileItem("mainFile", Files.probeContentType(file.toPath()), false, file.getName(), (int) file.length(), file.getParentFile());

                        try {
                            InputStream input = new FileInputStream(file);
                            OutputStream os = fileItem.getOutputStream();
                            IOUtils.copy(input, os);
                            // Or faster..
                            // IOUtils.copy(new FileInputStream(file), fileItem.getOutputStream());
                        } catch (IOException ex) {
                            // do something.
                        }

                        MultipartFile multipartFile = new CommonsMultipartFile(fileItem);

                        String thumbnailName = "board_thumbnail/" + System.nanoTime() + "thumbnail_of_" + board.getBoardId();

                        try {
                            ObjectMetadata metadata = new ObjectMetadata();
                            byte[] bytes = IOUtils.toByteArray(multipartFile.getInputStream());
                            metadata.setContentType(contentType);
                            metadata.setContentLength(bytes.length);
                            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(bytes);

                            amazonS3.putObject(new PutObjectRequest(bucket, thumbnailName, byteArrayInputStream, metadata)
                                    .withCannedAcl(CannedAccessControlList.PublicRead));

                        } catch (AmazonServiceException e) {
                            e.printStackTrace();
                        } catch (SdkClientException e) {
                            e.printStackTrace();
                        }

                        board.setThumbnail("https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/"+thumbnailName);
                        boardRepository.save(board);
                        // s3에 업로드 후 ec2 파일은 제거
                        file.delete();
                    }
                }
            }
        }
        return images;
    }
    public List<BoardImage> updateImages(Board board, List<String> images){
        List<BoardImage> imagessss = new ArrayList<>();
        for (int i = 0; i < images.size(); i++) {
            String imageString = images.get(i);

            if (imageString.contains("https://")){
//                "url이므로 처리"
                String bucket = "https://pre-032-bucket.s3.ap-northeast-2.amazonaws.com/";

                BoardImage boardImage = boardImageRepository.findByStoredFilePath(imageString);

            }else {
                // blob데이타 처리


            }
        }
        return  imagessss;
    }
}