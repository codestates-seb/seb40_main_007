package codestates.main007.tag;

import codestates.main007.board.Board;
import codestates.main007.board.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class TagService {
    private final TagRepository tagRepository;

    public List<Tag> save(List<Long> tagIds, Board board) {
        List<Tag> tags = new ArrayList<>();
        for (long tagId : tagIds) {
            Tag tag = tagRepository.findById(tagId).get();
            tag.updateBoards(board);

            tagRepository.save(tag);
            tags.add(tag);
        }
        return tags;
    }

    public Tag find(long tagId){
        return tagRepository.findById(tagId).get();
    }

    public List<Tag> findAll(List<Long> tagIds){
        return tagRepository.findAllById(tagIds);
    }
}
