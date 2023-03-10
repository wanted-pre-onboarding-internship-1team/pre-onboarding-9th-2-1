# 원티드 프리온보딩 Week2 - 라이크어로컬

<br />

## ✏️ 과제 설명
여행 상품 리스트를 보고 장바구니에 저장할 수 있는 사이트 구현

<br />

## 💡 프로젝트 실행 방법

```
git clone https://github.com/wanted-pre-onboarding-internship-1team/pre-onboarding-9th-2-1.git
npm install
npm start
```

<br />

## 📌 배포 링크
http://wanted-intenship-project1.s3-website.ap-northeast-2.amazonaws.com/

<br />

## 🛠 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Chakra UI-319795?style=flat-square&logo=Chakra UI&logoColor=white"/> <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">

<br />

## 🎄 폴더 구조

```
📄 src
├── App.js
├── index.js
├── apis # api 서버와 통신하는 비즈니스 로직
│   └── api.js
├── components
│   ├── common
│   │   ├── Header.jsx
│   │   ├── LazyImage.jsx
│   │   ├── ProductName.jsx
│   │   ├── ProductNumber.jsx
│   │   ├── ProductPrice.jsx
│   │   └── ThumbNailImage.jsx
│   ├── filter
│   │   ├── CheckFilter.jsx
│   │   ├── Filters.jsx
│   │   └── RangeFilter.jsx
│   ├── product
│   │   ├── ProductDetail.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── reservations
│   │   ├── productBody
│   │   │   └── DeleteButton.jsx
│   │   ├── CountChangeArea.jsx
│   │   ├── ProductBody.jsx
│   │   ├── ProductItem.jsx
│   │   ├── ProductList.jsx
│   │   └── TotalPrice.jsx
├── contexts
│   └── ProductContext.jsx
├── hooks
│   ├── reducer
│   │   └── productReducer.js
│   ├── useAddProduct.js
│   ├── useFilter.js
│   ├── useProduct.js
│   └── useProductList.js
├── pages
│   ├── MainPage.jsx
│   └── Reservations.jsx
├── router
│   └── Router.jsx
├── style
│   └── customTheme.js
└── utils
│   └── getLocalStorage.js
    └── setReservedStorage.js
```

<br />

## 👏 협업 방법

주된 커뮤니케이션 툴로 [**팀 노션**](https://www.notion.so/1-48d83304b94c42ad8352fcf6e7973b9f?pvs=4) 페이지와 **디스코드**, **Google meet**를 사용했습니다.

### **노션 페이지**

1. 팀원들의 코드를 분석하고, 그 중에서 Best Practice를 정리하였습니다.
2. commit 컨벤션, git flow 전략, 네이밍을 정의하였습니다.
3. 팀원들의 역할 분담, 일정 조율을 위해 활용되었습니다.

### **Discord / Google Meet**

팀원들의 의사소통 및 화면 공유를 통한 협업을 위해 활용되었습니다.

<br />

## ⭐️ 과제 구현 및 Best Practice 산정

### 전반적인 프로젝트
> - useReducer와 customHook을 사용하여 로직을 분리해 선언적인 컴포넌트를 작성
> - Redux를 사용할 만큼 프로젝트 단위가 크지않고 괜히 번들 크기만 커져 무거워지므로 ContextAPI를 사용하여 장바구니 및 Product의 전역상태관리
> - AWS S3를 통해 배포하여 CI/CD 자동화 배포를 구축

<br />

#### ✅ Assignment 1

- 유저가 페이지를 처음 열었을 때 “/main”에 도착하도록 만들어주세요
- main에는 여행 상품 정보 (mock JSON) 를 활용하여 여행 상품 정보를 노출해야합니다.
- 리스트에서 노출해야 하는 정보: idx, name, mainImage, price, spaceCategory
- 예약 버튼을 달아 예약 버튼을 클릭시 여행 상품 장바구니에서 사용 할 수 있도록 상품 데이터
를 저장해주세요.
- 여행 상품 정보를 클릭했을 때 여행 상품을 자세히 볼 수 있는 모달창을 제작해주세요
- 모달에서 노출해야 하는 정보: idx, name, mainImage, description, spaceCategory, price, maximumPurchases, registrationDate

![](https://user-images.githubusercontent.com/112826154/224315177-dec3135b-e27d-4da3-9368-d61663c237a2.gif)

>  **💡 Best Practice 산정 이유**
> - defalt path로 접근 시 Router에서 바로 /main으로 Navigate 하여 불필요한 컴포넌트 생성하지 않게 구현
> - 리스트 이미지에 lazy loading기법을 사용하여 스크롤 전에는 이미지를 로드시키지 않아 로드 속도 증가
> - 모달창에도 예약버튼 생성
> - 예약버튼 클릭 시 toast 팝업, 최대 구매가능 수량보다 더 많이 클릭 시 error toast 팝업 노출로 UX 향상
> - 상품 데이터 저장 시 새로고침이나 재접속 시 장바구니 정보를 유지하기 위해 localstorage에 저장

<br />
    
#### ✅ Assignment 2

- 여행 상품 리스트의 가격(price), 공간(spaceCategory) 필터 기능을 만들어주세요.
- 예시)  0 ~ 1000, 150 0~ 3000(가격)
- 예시) 서울, 부산(공간)
- 개별 필터링과, 다중 필터링이 모두 가능하도록 구현해주세요

![](https://user-images.githubusercontent.com/112826154/224315742-76c0fa2c-1eae-4b20-b72c-e6ad4971b4ea.gif
)
>  **💡 Best Practice 산정 이유**
> - chakra drawer을 이용한 깔끔한 UI
> - 필터 미적용시 toast 팝업으로 UX 향상

<br />

 #### ✅ Assignment 3

- 여행 상품 장바구니 (/reservations)를 만들어주세요.
- 저장한 여행 상품의 리스트를 보여주고 삭제가 가능할 수 있도록 구성해주세요.
- 여행 상품의 구매 수량을 변경 가능할 수 있도록 해주세요.
- 장바구니에 있는 여행 상품의 총 결제액 수를 계산하여 표시해주세요

![](https://user-images.githubusercontent.com/112826154/224316209-5e74e885-0b63-438d-b30b-e41a90fbd8a4.gif)

>  **💡 Best Practice 산정 이유**
> - 장바구니에 상품이 없을 때 예외 페이지
> - 상품 수량을 수정할 때 0개가 되면 자동으로 삭제

<br />


## 💗 팀원 소개

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/merrybmc"><img src="https://avatars.githubusercontent.com/u/65064563?v=4" width="100px;" alt=""/><br /><sub><b>조병민(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sujeong-dev"><img src="https://avatars.githubusercontent.com/u/112826154?v=4" width="100px;" alt=""/><br /><sub><b>구수정</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/rladygks329"><img src="https://avatars.githubusercontent.com/u/64533351?v=4" width="100px;" alt=""/><br /><sub><b>김요한</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sduu"><img src="https://avatars.githubusercontent.com/u/46313348?v=4" width="100px;" alt=""/><br /><sub><b>손혜수</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/SeungYn"><img src="https://avatars.githubusercontent.com/u/66045666?v=4" width="100px;" alt=""/><br /><sub><b>유승윤</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/lzns960"><img src="https://avatars.githubusercontent.com/u/78632299?v=4" width="100px;" alt=""/><br /><sub><b>박수지</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/gong25"><img src="https://avatars.githubusercontent.com/u/60168937?v=4" width="100px;" alt=""/><br /><sub><b>신공섭</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dhsimpson"><img src="https://avatars.githubusercontent.com/u/12489026?v=4" width="100px;" alt=""/><br /><sub><b>윤동희</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/dobidugi"><img src="https://avatars.githubusercontent.com/u/21123166?v=4" width="100px;" alt=""/><br /><sub><b>이유태</b></sub></a><br /></td>
     <tr/>
     
  </tbody>
</table>
