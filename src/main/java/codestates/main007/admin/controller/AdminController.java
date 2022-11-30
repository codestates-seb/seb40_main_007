package codestates.main007.admin.controller;

import codestates.main007.admin.service.AdminService;
import codestates.main007.board.entity.Board;
import codestates.main007.board.dto.BoardDto;
import codestates.main007.board.service.BoardService;
import codestates.main007.boardMember.entity.BoardMember;
import codestates.main007.boardMember.repository.BoardMemberRepository;
import codestates.main007.dto.AdminDto;
import codestates.main007.member.entity.Member;
import codestates.main007.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping
@RequiredArgsConstructor
public class AdminController {
    private final MemberService memberService;
    private final AdminService adminService;

    @GetMapping("/adminPage")
    @ResponseStatus(HttpStatus.OK)
    public AdminDto getAdminPage(@RequestHeader(name = "Authorization") String accessToken) {
        return adminService.getAdminPage(accessToken);
    }

    @DeleteMapping("/drop-member/{member-id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void dropMember(@RequestHeader(name = "Authorization") String accessToken,
                           @PathVariable("member-id") long memberId) {
        memberService.dropMember(accessToken, memberId);
    }
}
