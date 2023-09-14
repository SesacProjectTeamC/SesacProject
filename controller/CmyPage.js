const { User, Question, Answer, Comment, Board } = require("../models");
const { Op } = require("sequelize");

exports.getHistory = async (req, res) => {
  try {
    // 임의 유저 1
    const uId = 1;

    const user = await User.findOne({
      where: {
        uId,
      },
    });
    // 1. 좋아요 / 작성한 게시글 / 답변 / 댓글
    //-- 좋아요 클릭 게시글 가져오기
    // isLike
    // const likes = await Mo

    //-- 작성한 게시글 가져오기
    const posts = await Question.findAll({ where: { uId } });

    //-- 작성한 답변 가져오기
    const answers = await Answer.findAll({ where: { uId } });

    //-- 작성한 댓글 가져오기
    const comments = await Comment.findAll({ where: { uId } });
    // 사용자 정보를 마이페이지 템플릿에 전달하여 렌더링합니다.
    res.render("myPage", {
      userData: user,
      postData: posts,
      answerData: answers,
      commentData: comments,
    });
  } catch (err) {
    // 기타 데이터베이스 오류
    console.log(err);
    res.status(500).send({
      OK: false,
      msg: "데이터베이스 오류 발생",
    });
    return;
  }
};