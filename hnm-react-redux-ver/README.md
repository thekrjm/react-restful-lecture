1. index.js에 Provider 추가 및 store props로 넣기
2. redux폴더 생성 후 store 파일 생성 import { createStore } from 'redux';
3. reducers 폴더 생성 후 파일 생성, reducer엔 parameter로 state와 action이 들어감
4. 미들웨어 적용을 위해 store에 applyMiddleware, thunk 추가로 import한다 (참고 주로 https://github.com/reduxjs/redux-thunk)
5. reduct폴더에 actions 폴더 및 파일 생성하여 미들웨어 함수 생성 후 상품전체를 나타내는 ProductAll.js의 getProducts()를 productAction으로 가져간다
   ㄴ 알아야 할 사항 미들웨어는 함수를 리턴한다 함수의 파라미터로는 dispatch와 state가 들어감
6. productAction이라는 미들웨어를 거쳐서 가기 위해 ProductAll에 dispatch는 poductAction에 있는 getProduct 함수를 호출한다.
