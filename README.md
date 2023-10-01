# MOA 🎨

![배너](https://github.com/Green-Team-D/MOA/assets/112158792/997047da-b46c-4f19-94a1-e22bc31c8b3e)

- 배포 URL: [https://port-0-moa2-ixj2mllmav52m.sel3.cloudtype.app/](https://port-0-moa2-ixj2mllmav52m.sel3.cloudtype.app/)
- 테스트 계정
  - `ID`: projectmoatest@gmail.com
  - `PassWord`: projectmoa

<br/>

## 1. 프로젝트 소개

미션을 통해 모은 코인으로 단어를 구매하면 문장을 만들 수 있어요. <br />
만든 문장은 원하는 타입으로 인공지능이 대신 그려줘요. 

> Open AI의 Dall-e라는 이미지 생성 기계학습 모델의 open API를 활용하여 사용자가 단어를 조합해 만든 문장의 이미지를 생성하는 서비스를 제작했습니다. 
<br/>

## 2. 기술 스택
### Framework
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">

### Database
 <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">

### Open API
 <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white">

### Library
<div diplay="inline-block" >
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/Chart.js-13324B?style=for-the-badge&logo=chartdotjs&logoColor=white">
  <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">
</div>

### Version Control 
<div diplay="inline-block" >
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">
</div>

### Design & Comuunication
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

```
"dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.3.0",
    "@fortawesome/free-regular-svg-icons": "^6.3.0",
    "@fortawesome/free-solid-svg-icons": "^6.3.0",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@next/font": "13.2.1",
    "axios": "^1.3.4",
    "canvas-confetti": "^1.6.0",
    "chart.js": "^4.2.1",
    "cloudinary": "^1.35.0",
    "cron": "^2.3.0",
    "dom-to-image": "^2.6.0",
    "eslint": "8.34.0",
    "eslint-config-next": "13.2.1",
    "file-saver": "^2.0.5",
    "framer-motion": "^10.1.0",
    "google-auth-library": "^8.7.0",
    "mongodb": "^3.6.4",
    "next": "13.2.1",
    "next-auth": "^4.20.1",
    "node-cron": "^3.0.2",
    "nookies": "^2.5.2",
    "openai": "^3.1.0",
    "react": "18.2.0",
    "react-canvas-confetti": "^1.3.0",
    "react-confetti": "^6.1.0",
    "react-dom": "18.2.0",
    "react-intersection-observer": "^9.4.3",
    "react-slick": "^0.29.0",
    "react-use": "^17.4.0",
    "sass": "^1.58.3",
    "slick-carousel": "^1.8.1",
    "use-window-size-v2": "^2.0.3"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.13",
    "postcss": "^8.4.21",
    "swiper": "^9.1.0"
  }
```
<br/>

## 3. 기술소개


<br/>

## 4. 시작하기
1. 의존성을 설치 합니다.
   
   ```
   npm install
   ```
   
2. env 환경변수로 api 키들 관리하고 있으므로 env 환경변수를 설정 해주어야 합니다. 

3. 빌드 후 시작합니다.

   ```
   npm run build
   npm run dev
   ```

<br/>

## 5. 폴더구조
- comopenents/: 각 페이지 및 공통 컴포넌트 관리
- context/: 페이지나 API라우팅 과정에서 요청(reaquest)과 응답(reponse)을 다루기 위해 활용
- database/: DB를 데이터베이스 시스템에 연결
- pages/: 페이지 구성 및 페이지 라우팅 설정
- public/: 이미지, 파비콘 등 정적 자산 제공
- styles/: 각 페이지 및 공통 스타일 시트

 ```

├──components
├──contexts
├──database
├──pages
│   ├── api
│   ├── ...
├──public
├──styles
└── .env
└── etc..

 ```
<br/>

## 6. 팀원소개

|    [조민서](https://github.com/ZziBooOooo) | [김형재](https://github.com/wo3214) | [김세림](https://github.com/imserimkim) |
|-------------------------------------------|-------------------------------------|------------------------------------------|
|       `WEB FE` `리드 개발자`               |            `WEB FE`                 |               `WEB FE`                   |
