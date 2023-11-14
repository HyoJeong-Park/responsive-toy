const moveHome = document.querySelector('.moveHome');
const movePreview = document.querySelector('.movePreview');
const moveTry = document.querySelector('.moveTry');

// 리사이즈 시 0.3초 후 리로드
window.addEventListener('resize', () => {
  setTimeout(() => {
    document.location.reload();
  }, 300)
})

// 메뉴 탭 이동
if(window.innerWidth >= 758){
  const desktopMargin = 100;
  const homeHeight = window.pageYOffset + document.querySelector('#homeSection').getBoundingClientRect().top - desktopMargin;
  const previewHeight = window.pageYOffset + document.querySelector('#previewSection').getBoundingClientRect().top - desktopMargin;
  const tryHeight = window.pageYOffset + document.querySelector('#trySection').getBoundingClientRect().top - desktopMargin;
  moveHome.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: homeHeight
    })
  })
  movePreview.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: previewHeight
    })
  })
  moveTry.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: tryHeight
    })
  })
}
if(window.innerWidth < 768 && window.innerWidth >= 320){
  const mobileMargin = 80;
  const homeHeight = window.pageYOffset + document.querySelector('#homeSection').getBoundingClientRect().top - mobileMargin;
  const previewHeight = window.pageYOffset + document.querySelector('#previewSection').getBoundingClientRect().top - mobileMargin;
  const tryHeight = window.pageYOffset + document.querySelector('#trySection').getBoundingClientRect().top - mobileMargin;
  moveHome.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: homeHeight
    })
  })
  movePreview.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: previewHeight
    })
  })
  moveTry.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: tryHeight
    })
  })

  const mobilePreviewContentWrapper = document.querySelector('.previewContentWrapper');
  mobilePreviewContentWrapper.style.width = window.innerWidth * 3 + 'px';
  // 여기 실행 안됐던 이유: innerWidth 값 구한 거에 단위 지정 안 해줘서

  let previewTitle = document.querySelector('.previewTitle');
  previewTitle.innerHTML = "여행지 정보와 후기를 <br> 미리 확인하세요!"
  console.group(previewTitle);

  // 미리보기 좌우 이동
const previewContentPrevButton = document.querySelector('.previewContentPrevButton'); // 다음 버튼ㅋ
const previewContentNextButton = document.querySelector('.previewContentNextButton'); // 다음 버튼ㅋ
const previewContentActullaySeen = document.querySelector('.previewContentActullaySeen'); // 보여지는 영역
const previewContentWrapper = document.querySelector('.previewContentWrapper'); // 컨텐츠 전체 영역
const previewContents = document.querySelectorAll('.previewContent'); // 컨텐츠 영역(개별)

let currentIndex = 0; // 컨텐츠 인덱스
let previewSliderCount = previewContents.length; // 전체 컨텐츠 개수
let previewSliderWidth = previewContentActullaySeen.getBoundingClientRect().width; // 보여지는 영역 너비

previewContentWrapper.style.width = (previewSliderWidth * previewSliderCount) + "px";

updateButton(); // 버튼 초기 설정
function updateSlider() {
  const translateValue = -currentIndex * previewSliderWidth; // 몇번째 컨텐츠인지 인덱스랑 현재 보여지는 너비 곱하기
  // 만약에 두번째 게시글이라면 -1 * 390
  previewContentWrapper.style.transform = `translateX(${translateValue}px)`;
  // 움직이는 전체 영역의 translateX 를 -390px 시켜서 오른쪽 -> 왼쪽 이동처럼 보여짐
  updateButton(); // 버튼 클릭 시 작동
}

previewContentPrevButton.addEventListener('click', () => {
  if(currentIndex > 0){
    currentIndex--;
    updateSlider();
  }
});

previewContentNextButton.addEventListener('click', () => {
  if (currentIndex < previewSliderCount - 1) {
      currentIndex++;
      updateSlider();
  }
  // 현재 인덱스가 개수-1 보다 작으면 다음 버튼이 작동되면서 인덱스 + 1
});

function updateButton () {
  // 첫 번째, 마지막 게시글에는 각각 이전 - 다음 버튼 안보이게
  previewContentPrevButton.style.display = currentIndex === 0 ? 'none' : 'inline';
  previewContentNextButton.style.display = currentIndex === previewSliderCount - 1 ? 'none' : 'inline';
};
}

