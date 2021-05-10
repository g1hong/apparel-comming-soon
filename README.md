# Frontend Mentor - Base Apparel coming soon page

## 의류 홈페이지 커밍순 페이지

## 목차

- [개요](#개요)
  - [작업 목표](#작업-목표)
  - [스크린샷](#스크린샷)
  - [링크](#링크)
- [작업일지](#작업일지)
  - [사용 언어](#사용-언어)
  - [배운 점](#배운-점)
  - [개선할 부분](#개선할-부분)
  - [참고자료](#참고자료)
- [만든 이](#만든-이)

## 개요

### 작업 목표

사용자는 :

- 장치의 화면 크기에 따라 최적의 레이아웃을 본다. (반응형 웹페이지)
- hover 상태일 때 반응하는 요소를 본다.
- `form`의 submit 버튼을 눌렀을 때, 아래의 경우 에러메세지를 출력한다:
  - `input`영역이 비어있을 때
  - 이메일 주소가 형식에 맞지 않을 때

### 스크린샷

![mobile](/screenshots/mobileMode.png)
![desktop](/screenshots/desktop.png)

### 링크

- 챌린지 출처 URL : [frontendmentor.io](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0)

- 작업물 사이트 URL: [g1hong.github.io/testimonials-slider/](https://g1hong.github.io/apparel-comming-soon/)

## 작업일지

- 시작일 : 2021년 5월 6일
- 종료일 : 2021년 5월 10일

  (21.05.06)

- git repository 생성 및 업로드
- mobile(375px) 완성

  (21.05.07)

- 단위 px -> rem
- 모든 화면단위 반응형 웹페이지 완성

  (21.05.08)

- field-error 태그들 위치조정 / 모바일화면 수정

  (21.05.10)

- 데스크탑 화면 수정
- 버튼 click 시 반투명하게, email validation 추가

### 사용 언어

- HTML : 시맨틱 HTML5 markup
- CSS : 사용자 지정 CSS 속성 사용, Flexbox
- Javascript : 이메일 유효성 검사
- 모바일 화면을 먼저 구현하는 작업흐름

### 배운 점

이번 작업에서 제일 신경쓴 부분은 1. position:absolute를 적절하게 활용하기 2. email form css 였습니다.

- 1. position:absolute를 적절하게 활용하기 : tag에 position absolute를 적용했을 때 위치를 잡는 데에 있어서 화면 크기에 따라 영향을 받다보니 까다로움을 느꼈습니다. 이번 작업에서 이를 극복하고 제대로 구현한 것 같아 개인적으로 뿌듯함을 느꼈습니다.
- 2. email form css : email form을 구성하는 여러가지 tag (input, button, label 등)에 css를 적용하며 변화를 주었습니다. 앞으로 활용할 경우가 많을 것 같아 뜻깊었습니다.

### 개선할 부분

- 1. 이전 세네 작업들을 scss로 작업하여 이번에는 css로만 작업했습니다. 그런데 이를 github page로 나타내는 데에 있어서 경로설정에 어려움이 있었습니다.

### 참고자료

- [이메일 유효성검사 정규식](https://doolyit.tistory.com/104)
- [button 그림자 css](https://aboooks.tistory.com/290)
- [github pages css 적용](https://5ummer.tistory.com/62)

## 만든 이

- Github - [홍지원](https://github.com/g1hong)
