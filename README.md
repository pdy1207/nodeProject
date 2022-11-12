<p align="center">
  <img src="https://user-images.githubusercontent.com/110442250/201089444-6362d275-d34b-4047-8a6e-9549f24e48c1.png" height="250">
  <h2 align="center">nodeProject</h2>
  <p align="center">Creating a Pharmacy Map with Node 🚑<p>

  </p>
</p>

### node.js? 
  
  node.js란 자바스크립트를 브라우저가 아닌 다른 환경에서 사용할 수 있게 해주는 무언가이다. <br>
  
  지금까지 자바스크립트는 브라우저만이 자바스크립트의 유일한 ***런타임*** 이었다. <br>
  
  하지만 Nodejs가 브라우저 밖에서 자바스크립트를 사용할 수 있는 환경을 제공한다. <br> 
  
  이로 인해 자바스크립트로 데스크탑 앱도 만들고, 서버도 만들고 할 수 있다.
  
### node.js 특징

 - 자바스크립트를 사용한다
 - 단일 스레드 이벤트 루프 기반
 - Non-blocking I/O (비동기)
 - 방대한 모듈 생태계(NPM)
 
> Node.js의 여러 글들에서 공통적으로 언급되는 큰 특징 두가지는'논블로킹 I/O'와 '이벤트 루프'인데, <br> 
  깊게 파고들면 양이 너무 방대하여, 공부하는 입장에서 아직 이해가 많이 부족하다.
  
### node.js 장점  

 - 첫째, 멀티 스레드 방식에 비해 적은 컴퓨터 자원을 사용합니다. 
 - 둘째, I/O작업이 많은 서버로 적합합니다. 
 - 셋째, 웹 서버가 내장되어 있어 별도의 웹서버를 설치할 필요가 없습니다. 
 - 넷째, 자바스크립트를 사용하기 때문에 JSON 형식과 쉽게 호환됩니다.
  
  <p align="center">
 <img src="https://user-images.githubusercontent.com/110442250/201114440-ea76a87b-d159-40a4-bda1-3c8470838641.jpg" height="380"> </p>


### Non blocking I/O (논 블로킹 I/O = Input/Output)

> Non blocking 이란 이전작업이 완료될 때까지 멈추지 않고 다음 작업을 수행하는 패러다임 이다.

### Event Loop 

> Event Loop는 Single-Thread 기반에서 비동기 메시지를 처리합니다. - Node JS 공식 홈페이지 -
 
 <hr>
 
 [동기와 비동기의 차이를 알아보자](https://moondol-ai.tistory.com/367)
 
 
 ### 약국 프로젝트
 
 > 지금의 경우는 cors 오류 때문에 교차 리소스 보안 문제 때문에 <br>
  그 문제를 해결하기 위해서 노드로 바로 api 가는게 아니라 노드로서 <br> 
  서버를 만들고 환경 구축을 하였음.
