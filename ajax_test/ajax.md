```js
$.ajax({
    url: "",
    type: "",
    cache: ,
    dataType: "",
    data: "",
    success: function(data){

  
    },
    error: function (request, status, error){        


    }
});
```


- url : 요청 url을 의미한다.
- type : 데이터 전송방식. GET 또는 POST
- cache : 요청 페이지의 캐시 여부. false 또는 true
- datatype : 서버에서 받아올 데이터를 어떤 형태로 해석할 것인지. xml, json, html, script를 선택할 수 있다.
- data : 서버로 데이터를 전송할 때 사용한다. "name="+name 이런 형태로
- success : Ajax 통신에 성공했을 때 실행되는 이벤트.
- error : Ajax 통신에 실패했을 때 실행되는 이벤트. request, status, error로 에러 정보를 확인할 수 있다.


