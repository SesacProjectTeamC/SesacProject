INSERT INTO user VALUES
	('1', '87awjkdf', '성춘향', 'test1@test.com', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00'),
    ('2', 'qxur8sda', '변사또', 'test2@test.com', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00'),
    ('3', 'jk48fn4', '한조', 'test3@test.com', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00'),
    ('4', '38ewifh3', '위도우', 'test4@test.com', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00'),
    ('5', 'k3f3ah', '송하나', 'test5@test.com', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00'),
    ('6', '4ifha7f', '정크랫',  'test@test.com', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00');
    
    
INSERT INTO question VALUES
	( '1','sexysung', '87awjkdf', '1','1',   '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00', '1'),
    ( '2','power70', 'qxur8sda', '2', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00','2'),
    ( '3','hanjo', 'jk48fn4', '3', '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00','3'),
    ( '4','widowmaker', '38ewifh3', '4','1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00','4'),
    ( '5','dvadva', 'k3f3ah', '5',  '1', '영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00','5'),
    ( '6','jungkrat', '4ifha7f', '6',   '1','영등포', '2023-09-08 00:00:00', '2023-09-08 00:00:00','6');
    
  -- upadate set DATE_FORMAT(createdAt, '%a %b %d %Y') AS createdAt FROM question;
    
    INSERT INTO answer VALUES
	( '1','답변제목1', '답변내용1', '3','2023-09-08 00:00:00', '2023-09-08 00:00:00',  '1', '1'),
    ( '2','답변제목2', '답변내용2', '24', '2023-09-08 00:00:00', '2023-09-08 00:00:00','2', '2'),
    ( '3','답변제목3', '답변내용3', '20', '2023-09-08 00:00:00', '2023-09-08 00:00:00', '3', '3'),
    ( '4','답변제목4', '답변내용4', '10','2023-09-08 00:00:00', '2023-09-08 00:00:00', '4', '4'),
	('5','답변제목5', '답변내용5', '2','2023-09-08 00:00:00', '2023-09-08 00:00:00', '5', '5'),
	( '6','답변제목6', '답변내용6', '8', '2023-09-08 00:00:00', '2023-09-08 00:00:00', '6', '6');

    
    
INSERT INTO board VALUES
	( '1','게시글1', '87awjkdf', '1','1',  '2023-09-08 00:00:00', '2023-09-08 00:00:00', '1'),
    ( '2','게시글2', 'qxur8sda', '2', '1', '2023-09-08 00:00:00', '2023-09-08 00:00:00','2'),
    ( '3','게시글3', 'jk48fn4', '3', '1',  '2023-09-08 00:00:00', '2023-09-08 00:00:00','3'),
    ( '4','게시글4', '38ewifh3', '4','1',  '2023-09-08 00:00:00', '2023-09-08 00:00:00','4'),
    ( '5','게시글5', 'k3f3ah', '5',  '1', '2023-09-08 00:00:00', '2023-09-08 00:00:00','5'),
    ( '6','게시글6', '4ifha7f', '6',   '1', '2023-09-08 00:00:00', '2023-09-08 00:00:00','6');
    

    
INSERT INTO comment VALUES
	( '1','질문답변 댓글1','2023-09-08 00:00:00', '2023-09-08 00:00:00', '1', '0', '1'),
    ( '2','질문답변 댓글2',  '2023-09-08 00:00:00', '2023-09-08 00:00:00','2', '0', '2'),
    ( '3','자유게시판 댓글1',  '2023-09-08 00:00:00', '2023-09-08 00:00:00','3', '1', '0'),
    ( '4','자유게시판 댓글2', '2023-09-08 00:00:00', '2023-09-08 00:00:00','4', '2', '0'),
	('5','질문답변 댓글3', '2023-09-08 00:00:00', '2023-09-08 00:00:00','5', '0', '3'),
	( '6','자유게시판 댓글3',  '2023-09-08 00:00:00', '2023-09-08 00:00:00','6', '3', '0');


truncate table comment;
    
-- left join
-- 질문과 답변 연결 (제목, 내용)
SELECT q.*, a.title AS answer_title, a.content AS answer_content
FROM question q
LEFT JOIN answer a ON q.uId = a.uId;
   
-- 외래키 무시
set foreign_key_checks = 0;
    
use sesacin;