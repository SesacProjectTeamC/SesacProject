const changeType = (component, type) => {
  const active = document.querySelector('.activeM');
  active.classList.remove('activeM');
  component.classList.add('activeM');
};

const moveToMakePost = () => {
  console.log(document.querySelector('.activeM').innerHTML);
  if (document.querySelector('.activeM').innerHTML === '자유게시판') {
    window.location.href = '/board/create';
  } else {
    window.location.href = '/question/create';
  }
};

//=== 0. 버튼 클릭 시 url 이동 ===
// 1) 질문
const moveToCreateQuestion = () => {
  window.location.href = '/question/create';
};

const moveToEditQuestion = (qId) => {
  window.location.href = `/question/${qId}/edit`;
};

// 2) 답변
const moveToCreateAnswer = (qId) => {
  window.location.href = `/question/${qId}/answer/create`;
};

const moveToEditAnswer = (qId, aId) => {
  window.location.href = `/question/${qId}/answer/${aId}/edit`;
};

// 3) 댓글
const moveToCreateComment = (qId, aId) => {
  window.location.href = `/question/${qId}/${aId}/comment/create`;
};

const moveToEditComment = (qId, aId, cId) => {
  window.location.href = `/question/${qId}/${aId}/comment/${cId}/edit`;
};

//=== 1. Question ===
// 1) 생성
const createQuestionDone = () => {
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');
  const type = 'front';

  axios({
    method: 'POST',
    url: '/question/create',
    data: { title: title.value, content: content.value, qType: type },
  }).then((res) => {
    console.log('sdsd');
  });
};

const createQuestionCancel = (qId) => {
  alert('취소되었습니다.');
  window.location.href = `/question/${qId}`;
};

// 2) 수정
const editQuestionDone = (qId) => {
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');

  axios({
    method: 'PATCH',
    url: `/question/${qId}/edit`,
    data: {
      title: title.value,
      content: content.value,
    },
  }).then((res) => {
    if (res.data) {
      alert('수정 완료되었습니다.');
      document.location.href = `/question/${qId}`;
    }
  });
};

const editQuestionCancel = (qId) => {
  window.location.href = `/question/${qId}`;
};

// 3) 삭제
const deleteQuestion = (qId) => {
  if (!confirm('삭제하시겠습니까?')) return;

  axios({
    method: 'DELETE',
    url: `/question/${qId}/delete`,
  }).then((res) => {
    if (res.data.result) {
      alert('삭제되었습니다');
      document.location.href = '/';
    }
  });
};

//=== 2. Answer ===
// 1) 생성
const createAnswerDone = (qId) => {
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');

  axios({
    method: 'POST',
    url: `/question/${qId}/answer/create`,
    data: { title: title.value, content: content.value },
  }).then((res) => {
    if (res) {
      alert('답변이 등록되었습니다 !');
      document.location.href = `/question/${qId}`;
    }
  });
};

const createAnswerCancel = (qId) => {
  alert('취소되었습니다.');
  window.location.href = `/question/${qId}`;
};

// 2) 수정
const editAnswerDone = (qId, aId) => {
  const title = document.querySelector('#title');
  const content = document.querySelector('#content');

  axios({
    method: 'PATCH',
    url: `/question/${qId}/answer/${aId}/edit`,
    data: {
      title: title.value,
      content: content.value,
    },
  }).then((res) => {
    if (res.data) {
      alert('답변이 수정되었습니다 !');
      document.location.href = `/question/${qId}`;
    }
  });
};

const editAnswerCancel = (qId) => {
  alert('취소되었습니다.');
  window.location.href = `/question/${qId}`;
};

// 3) 삭제
const deleteAnswer = (qId, aId) => {
  if (!confirm('삭제하시겠습니까?')) return;

  axios({
    method: 'DELETE',
    url: `/question/${qId}/answer/${aId}/delete`,
  }).then((res) => {
    if (res.data.result) {
      alert('삭제되었습니다');
    }
    window.location.href = `/question/${qId}`;
  });
};

//=== 3. Comment ===
// 1) 조회

// 2) 생성
const createCommentDone = (qId, aId) => {
  const content = document.querySelector('#content');

  axios({
    method: 'POST',
    url: `/question/${qId}/${aId}/comment/create`,
    data: { content: content.value },
  }).then((res) => {
    if (res) {
      alert('댓글이 등록되었습니다 !');
      document.location.href = `/question/${qId}`;
    }
  });
};

const createCommentCancel = (qId) => {
  alert('취소되었습니다.');
  window.location.href = `/question/${qId}`;
};

// 3) 수정
const editCommentDone = (qId, aId, cId) => {
  const content = document.querySelector('#content');

  axios({
    method: 'PATCH',
    url: `/question/${qId}/${aId}/comment/${cId}/edit`,
    data: {
      content: content.value,
    },
  }).then((res) => {
    if (res.data) {
      alert('댓글이 수정되었습니다 !');
      document.location.href = `/question/${qId}`;
    }
  });
};

const editCommentCancel = (qId) => {
  alert('취소되었습니다.');
  window.location.href = `/question/${qId}`;
};

// 4) 삭제
const deleteComment = (qId, aId, cId) => {
  if (!confirm('삭제하시겠습니까?')) return;

  axios({
    method: 'DELETE',
    url: `/question/${qId}/${aId}/comment/${cId}/delete`,
  }).then((res) => {
    if (res.data.result) {
      alert('삭제되었습니다');
    }
    window.location.href = `/question/${qId}`;
  });
};
