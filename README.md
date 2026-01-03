# Earth Reviews (클론)

스크린샷처럼 **아이템(현실 요소)별 리뷰를 남기고**, 별점/좋아요/정렬(최신/인기)까지 가능한 간단한 웹앱입니다.

## 기능

- **홈**: 아이템 카드 그리드(평점/평점 수)
- **상세**: 아이템 헤더 + 리뷰 리스트
  - 최신/인기 정렬
  - 좋아요(토글)
- **리뷰 작성 모달**: 이름/내용/별점 입력 + 검증
- **영속성**: 브라우저 `localStorage`에 리뷰/좋아요 저장

## 실행

```bash
bun install
bun run dev
```

브라우저에서 `http://localhost:3000` 접속.

## 데이터 초기화(리뷰/좋아요 리셋)

브라우저 DevTools → Application/Storage → Local Storage 에서 아래 키 삭제:

- `earth-reviews:v1`
