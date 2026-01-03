export type Category = "ALL" | "CONSUMABLE" | "MAP" | "SYSTEM" | "NPC" | "NATURE";

export type EarthItem = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: Category;
  ratingAvg: number; // 초기값 (useItemStats로 덮어씌워짐)
  ratingCount: number;
  reviewCount: number;
  accentFrom: string; // Deprecated
  accentTo: string; // Deprecated
};

export type Review = {
  id: string;
  itemId: string;
  name: string;
  text: string;
  rating: number; // 1..5
  likes: number;
  createdAt: number; // epoch ms
};

export const EARTH_ITEMS: EarthItem[] = [
  // --- ☕️ 식음료 (CONSUMABLE) ---
  {
    id: "ice-americano",
    name: "아이스 아메리카노",
    tagline: "생명연장 물약",
    description: "K-직장인의 HP를 일시적으로 회복시켜주는 검은 물입니다.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#4b3621",
    accentTo: "#000000",
  },
  {
    id: "fried-chicken",
    name: "치느님",
    tagline: "서버 유일의 구원자",
    description: "섭취 시 행복도가 급상승하지만, 금전적 타격이 동반됩니다.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#f59e0b",
    accentTo: "#ef4444",
  },
  {
    id: "soju",
    name: "소주",
    tagline: "기억 삭제 포션",
    description: "적당히 마시면 버프, 많이 마시면 로그아웃.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#22c55e",
    accentTo: "#16a34a",
  },
  {
    id: "mix-coffee",
    name: "믹스커피",
    tagline: "회사 지급 마나 포션",
    description: "달달함으로 스트레스를 녹이지만 배 둘레 스탯을 올립니다.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#fcd34d",
    accentTo: "#b45309",
  },
  {
    id: "gukbap",
    name: "국밥",
    tagline: "K-화폐 단위",
    description: "모든 음식 가격의 기준점이 되는 경제적 지표입니다.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#7f1d1d",
  },
  {
    id: "cup-ramen",
    name: "컵라면",
    tagline: "3분 컷 생존템",
    description: "PC방 버프를 받으면 맛이 +50% 증가합니다.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#fca5a5",
    accentTo: "#ef4444",
  },
  {
    id: "zero-cola",
    name: "제로 콜라",
    tagline: "죄책감 면죄부",
    description: "칼로리는 없지만 맛은 있는, 물리 법칙을 거스르는 아이템.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#000000",
    accentTo: "#ef4444",
  },
  {
    id: "mint-choco",
    name: "민트초코",
    tagline: "호불호 끝판왕",
    description: "치약인가 음식인가, 끊임없는 논쟁의 대상.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#34d399",
    accentTo: "#064e3b",
  },
  {
    id: "pyongyang-naengmyeon",
    name: "평양냉면",
    tagline: "슴슴한 중독",
    description: "처음엔 걸레 빤 물 같지만 나중엔 생각나는 마성의 육수.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#d1d5db",
    accentTo: "#9ca3af",
  },
  {
    id: "pork-belly",
    name: "삼겹살",
    tagline: "회식 메인 디시",
    description: "지글거리는 소리만으로도 HP가 회복됩니다.",
    category: "CONSUMABLE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#fca5a5",
    accentTo: "#ef4444",
  },

  // --- 🏙 도시 및 인프라 (MAP) ---
  {
    id: "subway-line-9",
    name: "지옥철 9호선",
    tagline: "압축기 체험관",
    description: "출근길에 탑승하면 인간 압축 과정을 체험할 수 있습니다.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#d97706",
    accentTo: "#b45309",
  },
  {
    id: "seoul-apartment",
    name: "서울 아파트",
    tagline: "엔드 콘텐츠 보상",
    description: "서버 내 최고가 아이템 중 하나. 획득 난이도: Hell.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#9ca3af",
    accentTo: "#4b5563",
  },
  {
    id: "han-river-park",
    name: "한강 공원",
    tagline: "도심 속 오아시스",
    description: "라면 먹으러 가는 곳. 커플 생성 구역이기도 합니다.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#3b82f6",
    accentTo: "#1d4ed8",
  },
  {
    id: "convenience-store",
    name: "편의점",
    tagline: "24시간 세이브 포인트",
    description: "언제 어디서나 당신을 기다리는 보급소.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#3b82f6",
    accentTo: "#10b981",
  },
  {
    id: "coin-karaoke",
    name: "코인 노래방",
    tagline: "천 원의 행복",
    description: "스트레스 해소용 미니게임 맵.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#a855f7",
    accentTo: "#7e22ce",
  },
  {
    id: "starbucks",
    name: "스타벅스",
    tagline: "카공족 길드 아지트",
    description: "입장권: 커피 한 잔. 콘센트 자리 경쟁이 치열합니다.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#15803d",
    accentTo: "#14532d",
  },
  {
    id: "olive-young",
    name: "올리브영",
    tagline: "개미지옥",
    description: "구경만 하러 들어갔다가 양손 가득 나오는 마법의 상점.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#84cc16",
    accentTo: "#65a30d",
  },
  {
    id: "daiso",
    name: "다이소",
    tagline: "초보자 파밍 구역",
    description: "모든 아이템이 저렴하지만 내구도는 보장 못 합니다.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#b91c1c",
  },
  {
    id: "commute-bus",
    name: "출근길 버스",
    tagline: "도심 레이싱",
    description: "기사님의 드리프트 실력을 강제로 감상해야 합니다.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#3b82f6",
    accentTo: "#2563eb",
  },
  {
    id: "public-toilet",
    name: "공용 화장실",
    tagline: "랜덤 위생 던전",
    description: "휴지가 있을지 없을지 모르는 스릴 넘치는 곳.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#9ca3af",
    accentTo: "#6b7280",
  },

  // --- 💼 사회 생활 (SYSTEM/NPC) ---
  {
    id: "boss",
    name: "직장 상사",
    tagline: "언어 공격형 몬스터",
    description: "논리가 통하지 않는 AI를 탑재했습니다.",
    category: "NPC",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#b91c1c",
  },
  {
    id: "monday",
    name: "월요일",
    tagline: "주간 초기화 이벤트",
    description: "매주 찾아오는 광역 디버프의 날.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#374151",
    accentTo: "#1f2937",
  },
  {
    id: "company-dinner",
    name: "회식",
    tagline: "업무 연장선",
    description: "고기 굽기 미니게임을 강제로 수행해야 합니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#f97316",
    accentTo: "#ea580c",
  },
  {
    id: "overtime",
    name: "야근",
    tagline: "무한 반복 퀘스트",
    description: "보상은 없는데 난이도는 높습니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#374151",
    accentTo: "#000000",
  },
  {
    id: "tax-settlement",
    name: "연말정산",
    tagline: "13월의 월급 or 폭탄",
    description: "1년 농사의 결과를 확인하는 시간. 뱉어내면 눈물 납니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#3b82f6",
    accentTo: "#2563eb",
  },
  {
    id: "wedding",
    name: "결혼식",
    tagline: "축의금 징수 이벤트",
    description: "주말에 돈 내고 출석 체크하러 가는 퀘스트.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#f472b6",
    accentTo: "#db2777",
  },
  {
    id: "holiday",
    name: "명절",
    tagline: "친척 레이드",
    description: "잔소리 광역 딜을 버텨야 하는 기간 한정 던전.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#fca5a5",
    accentTo: "#ef4444",
  },
  {
    id: "group-project",
    name: "조별 과제",
    tagline: "인류애 상실 테스트",
    description: "혼자 다 하게 되는 불합리한 파티 시스템.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#7f1d1d",
  },
  {
    id: "group-chat",
    name: "단톡방",
    tagline: "알림 지옥",
    description: "나가면 초대되고 나가면 초대되는 무간지옥.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#facc15",
    accentTo: "#ca8a04",
  },
  {
    id: "nunchi",
    name: "눈치",
    tagline: "K-서버 필수 패시브",
    description: "이 스킬 레벨이 낮으면 생존하기 힘듭니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#6b7280",
    accentTo: "#4b5563",
  },

  // --- 📱 디지털 & 시스템 (SYSTEM) ---
  {
    id: "public-certificate",
    name: "공인인증서",
    tagline: "분노 유발 보안 시스템",
    description: "액티브X와 함께 당신의 인내심을 테스트합니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#1f2937",
    accentTo: "#111827",
  },
  {
    id: "rocket-delivery",
    name: "로켓 배송",
    tagline: "시공간 초월 배송",
    description: "주문하고 자고 일어나면 문 앞에 와있는 마법.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#3b82f6",
    accentTo: "#2563eb",
  },
  {
    id: "alarm-clock",
    name: "알람 시계",
    tagline: "아침의 적",
    description: "가장 듣기 싫은 BGM 1위.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#b91c1c",
  },
  {
    id: "instagram",
    name: "인스타그램",
    tagline: "상대적 박탈감 생성기",
    description: "남들의 하이라이트 장면만 모아 보여줍니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ec4899",
    accentTo: "#be185d",
  },
  {
    id: "youtube-algorithm",
    name: "유튜브 알고리즘",
    tagline: "시간 삭제 머신",
    description: "잠 좀 자게 해주세요. 내 취향을 나보다 잘 압니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#dc2626",
  },
  {
    id: "delivery-fee",
    name: "배달비",
    tagline: "음식값보다 비싼 수수료",
    description: "배보다 배꼽이 더 큰 시스템.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#1f2937",
    accentTo: "#000000",
  },
  {
    id: "spam-message",
    name: "스팸 문자",
    tagline: "끈질긴 구애",
    description: "김미영 팀장님의 후예들이 매일 안부를 묻습니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#b91c1c",
  },
  {
    id: "kiosk",
    name: "키오스크",
    tagline: "디지털 문맹 테스트",
    description: "뒤에 사람 기다리면 식은땀이 흐르는 주문 기계.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#6b7280",
    accentTo: "#4b5563",
  },
  {
    id: "stock-app",
    name: "주식 어플",
    tagline: "합법적 사이버 도박",
    description: "파란불(하락)이 들어오면 하루 기분이 나빠집니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#3b82f6",
  },
  {
    id: "mbti",
    name: "MBTI",
    tagline: "현대판 사주팔자",
    description: "4글자로 사람을 판단하는 편리하고 위험한 도구.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#a855f7",
    accentTo: "#9333ea",
  },

  // --- ☀️ 자연 및 기타 (NATURE/SYSTEM) ---
  {
    id: "fine-dust",
    name: "미세먼지",
    tagline: "강제 누런 필터",
    description: "봄마다 찾아오는 호흡기 공격 이벤트.",
    category: "NATURE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#d1d5db",
    accentTo: "#9ca3af",
  },
  {
    id: "mosquito",
    name: "여름 모기",
    tagline: "밤의 암살자",
    description: "귓가에서 들리는 윙윙 소리는 공포 그 자체입니다.",
    category: "NATURE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#991b1b",
  },
  {
    id: "monsoon-season",
    name: "장마철",
    tagline: "습도 99% 체험",
    description: "빨래가 마르지 않고 곰팡이와 동거해야 합니다.",
    category: "NATURE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#3b82f6",
    accentTo: "#1d4ed8",
  },
  {
    id: "cold-wave",
    name: "한파",
    tagline: "시베리아 체험판",
    description: "롱패딩 없이는 생존할 수 없는 계절.",
    category: "NATURE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#0ea5e9",
    accentTo: "#0284c7",
  },
  {
    id: "ginkgo-nut",
    name: "은행 열매",
    tagline: "길거리 지뢰",
    description: "밟는 순간 후각 테러가 시작됩니다.",
    category: "NATURE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#facc15",
    accentTo: "#ca8a04",
  },
  {
    id: "pigeon",
    name: "비둘기",
    tagline: "도심의 지배자",
    description: "날지 않고 걸어 다니는 닭둘기.",
    category: "NATURE",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#9ca3af",
    accentTo: "#6b7280",
  },
  {
    id: "noise-pollution",
    name: "층간 소음",
    tagline: "윗집의 발망치",
    description: "새벽에 들리는 쿵쿵 소리는 살인 충동을 유발합니다.",
    category: "MAP",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#ef4444",
    accentTo: "#7f1d1d",
  },
  {
    id: "diet",
    name: "다이어트",
    tagline: "평생의 과제",
    description: "내일부터 해야지 하다가 평생 못 하는 퀘스트.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#84cc16",
    accentTo: "#4d7c0f",
  },
  {
    id: "suneung",
    name: "수능",
    tagline: "12년의 결실",
    description: "하루 만에 인생이 결정되는 잔혹한 시스템.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#6b7280",
    accentTo: "#374151",
  },
  {
    id: "age",
    name: "나이",
    tagline: "강제 배송 상품",
    description: "거부할 수 없이 매년 1개씩 배송됩니다.",
    category: "SYSTEM",
    ratingAvg: 0,
    ratingCount: 0,
    reviewCount: 0,
    accentFrom: "#d1d5db",
    accentTo: "#9ca3af",
  },
];

export const EARTH_ITEM_BY_ID = EARTH_ITEMS.reduce<Record<string, EarthItem>>(
  (acc, item) => {
    acc[item.id] = item;
    return acc;
  },
  {},
);

const BASE_TIME = 1735600000000;

// 각 아이템별로 가짜 리뷰 2개씩 생성
const MOCK_REVIEWS_DATA = [
  // 1. 아이스 아메리카노
  { id: "ice-americano", r1: { name: "생명연장", text: "맛으로 먹는 거 아님. 포션 쿨타임 돌아서 마시는 거임. 안 마시면 두통 디버프 걸림.", rate: 5 }, r2: { name: "카페인노예", text: "겨울 시즌에도 판매하는 건 좋은데, 먹고 나면 수전증 오는 밸런스 좀 잡아주세요.", rate: 3 } },
  // 2. 치킨
  { id: "fried-chicken", r1: { name: "치느님", text: "서버 내 유일한 힐링 아이템. 근데 가격 인플레이션 버그가 너무 심함.", rate: 4 }, r2: { name: "배달비혐오", text: "맛은 1티어 인정하는데, 배달비까지 합치면 가성비 최악의 아이템으로 전락함.", rate: 2 } },
  // 3. 소주
  { id: "soju", r1: { name: "알콜요정", text: "현생의 기억을 삭제해주는 유일한 마법 물약. 가성비 최고.", rate: 5 }, r2: { name: "숙취지옥", text: "다음 날 로그인을 못 하게 만듦. 두통 지속 데미지가 너무 셈.", rate: 1 } },
  // 4. 믹스커피
  { id: "mix-coffee", r1: { name: "김대리", text: "회사라는 던전에서 지급하는 유일한 무료 보급품. 이거 없었으면 탈주했음.", rate: 5 }, r2: { name: "당뇨조심", text: "마실 땐 천국인데 배 둘레 스탯이 강제로 올라감.", rate: 3 } },
  // 5. 국밥
  { id: "gukbap", r1: { name: "가성비충", text: "든든함 수치 +100. 모든 경제 관념의 기준점. (ex. 파스타? 그 돈이면 국밥이...)", rate: 5 }, r2: { name: "아재입맛", text: "혼자 밥 먹기 퀘스트 수행할 때 난이도 제일 낮음.", rate: 3 } },
  // 6. 컵라면
  { id: "cup-ramen", r1: { name: "PC방죽돌이", text: "이상하게 집에서 먹으면 이 맛이 안 남. 장소 버프 받는 아이템인 듯.", rate: 4 }, r2: { name: "나트륨폭탄", text: "3분 만에 조리되는 건 혁명인데, 먹고 나면 얼굴 붓는 부작용 있음.", rate: 2 } },
  // 7. 제로 콜라
  { id: "zero-cola", r1: { name: "다이어터", text: "피자 먹으면서 죄책감 스탯을 0으로 만들어주는 면죄부.", rate: 5 }, r2: { name: "설탕파", text: "끝맛이 밍밍함. 역시 오리지널 템이 근본임.", rate: 3 } },
  // 8. 민트초코
  { id: "mint-choco", r1: { name: "치약혐오", text: "음식 데이터에 치약 텍스처 잘못 입힌 거 아님? 운영자 나와.", rate: 1 }, r2: { name: "민초단", text: "이 상쾌함을 모르는 뉴비들이 불쌍함. 고인물 전용 미식 아이템.", rate: 5 } },
  // 9. 평양냉면
  { id: "pyongyang-naengmyeon", r1: { name: "초딩입맛", text: "걸레 빤 물 맛이라는 소문이 사실이었음. 無맛이 맛이라니 사기 아님?", rate: 1 }, r2: { name: "면스플레인", text: "세 번만 참고 먹어보면 중독됨. 슴슴한 맛의 미학을 모르면 조용히 하길.", rate: 5 } },
  // 10. 삼겹살
  { id: "pork-belly", r1: { name: "고기러버", text: "소주랑 세트 효과 발동하면 행복 수치 MAX 찍음. 굽는 소리 ASMR 기능 추가 좀.", rate: 5 }, r2: { name: "냄새배임", text: "먹고 지하철 타면 주변 NPC들이 다 쳐다봄. 냄새가 안 빠짐.", rate: 2 } },
  // 11. 지옥철 9호선
  { id: "subway-line-9", r1: { name: "압사위기", text: "사람을 화물 취급함. 출근하다가 갈비뼈 나가는 줄. 숨쉬기 버튼이 안 눌려요.", rate: 1 }, r2: { name: "급행유저", text: "빠르긴 진짜 빠름. 쾌적함을 포기하고 속도를 얻은 등가교환.", rate: 4 } },
  // 12. 서울 아파트
  { id: "seoul-apartment", r1: { name: "지방러", text: "튜토리얼 30년 깨고 골드 다 모아도 못 삼. 난이도 조절 실패한 콘텐츠.", rate: 1 }, r2: { name: "영끌족", text: "샀는데 이자 내느라 캐릭터가 굶어 죽게 생겼음. 하우스 푸어 칭호 획득.", rate: 2 } },
  // 13. 한강 공원
  { id: "han-river-park", r1: { name: "라면맛집", text: "여기서 끓여 먹는 라면은 연금술 등급임. 야경 그래픽 퀄리티 좋음.", rate: 5 }, r2: { name: "커플지옥", text: "솔로 유저 진입 시 정신력 지속 데미지 입음. 커플 NPC 스폰율 좀 줄여주세요.", rate: 1 } },
  // 14. 편의점
  { id: "convenience-store", r1: { name: "야간알바", text: "언제 어디서나 세이브 가능. 24시간 열려있는 게 말이 안 됨.", rate: 5 }, r2: { name: "4캔만원", text: "자꾸 1+1이나 2+1 미끼 상품에 낚여서 인벤토리 꽉 참.", rate: 2 } },
  // 15. 코인 노래방
  { id: "coin-karaoke", r1: { name: "가수지망생", text: "천 원으로 스트레스 게이지 초기화 가능. 가성비 혜자 미니게임.", rate: 5 }, r2: { name: "위생불량", text: "마이크에서 침 냄새 남. 소독 아이템 필수 지참.", rate: 3 } },
  // 16. 스타벅스
  { id: "starbucks", r1: { name: "카공족", text: "노트북이랑 이어폰 없으면 입장 불가능한 길드 아지트. 콘센트 자리 경쟁 치열함.", rate: 4 }, r2: { name: "된장남", text: "커피값이 밥값보다 비쌈. 기프티콘 선물 받았을 때만 가는 곳.", rate: 2 } },
  // 17. 올리브영
  { id: "olive-young", r1: { name: "지갑털림", text: "입장료 무료래서 들어갔는데 나올 때 5만 원 결제됨. 개미지옥 맵.", rate: 1 }, r2: { name: "직원부담", text: "NPC가 자꾸 따라다니면서 말 검. 은신 스킬 쓰고 쇼핑하고 싶음.", rate: 3 } },
  // 18. 다이소
  { id: "daiso", r1: { name: "자취생", text: "초기 장비 파밍 성지. 퀄리티는 낮은데 일단 쌈. 없으면 안 됨.", rate: 5 }, r2: { name: "일회용", text: "분명 샀는데 집에 오면 금방 고장 남. 내구도 10짜리 아이템들.", rate: 2 } },
  // 19. 출근길 버스
  { id: "commute-bus", r1: { name: "멀미왕", text: "기사님이 레이싱 게임 하시는 듯. 손잡이 놓치면 바로 날아감.", rate: 1 }, r2: { name: "환승러", text: "지하철이랑 환승 연계되는 시스템은 갓패치 인정.", rate: 3 } },
  // 20. 공용 화장실
  { id: "public-toilet", r1: { name: "비번잠김", text: "급해 죽겠는데 도어락 퀘스트 풀어야 함. 비밀번호 좀 크게 써붙여라.", rate: 1 }, r2: { name: "휴지없음", text: "보스룸 입장했는데 무기(휴지)가 없는 상황. 절망적임.", rate: 2 } },
  // 21. 직장 상사
  { id: "boss", r1: { name: "퇴사마렵", text: "NPC AI가 고장 난 듯. 했던 말 또 하고 논리가 없음. 음소거 기능 시급.", rate: 1 }, r2: { name: "라떼는", text: "자꾸 옛날 서버(쌍팔년도) 이야기함. 스킵 버튼이 안 먹힘.", rate: 2 } },
  // 22. 월요일
  { id: "monday", r1: { name: "주말순삭", text: "일요일 저녁 8시부터 가슴 답답해짐. 이 요일 삭제 좀 해주세요.", rate: 1 }, r2: { name: "출근충", text: "매주 돌아오는 광역 디버프. 이동 속도 -50%, 지능 -30%.", rate: 1 } },
  // 23. 회식
  { id: "company-dinner", r1: { name: "강제참여", text: "업무의 연장인데 수당은 안 줌. 고기 굽기 미니게임만 2시간 하다 옴.", rate: 1 }, r2: { name: "법카찬스", text: "내 돈 주고 못 사 먹는 비싼 메뉴 먹을 때만 별점 줌.", rate: 3 } },
  // 24. 야근
  { id: "overtime", r1: { name: "열정페이", text: "보상 없는 무한 반복 퀘스트. 집에 보내줘요 제발.", rate: 1 }, r2: { name: "눈치게임", text: "일 다 끝났는데 상사 안 가서 못 가는 상황. 대기 모드 지루함.", rate: 2 } },
  // 25. 연말정산
  { id: "tax-settlement", r1: { name: "토해냄", text: "13월의 월급이라더니 13월의 세금폭탄임. 국가가 삥 뜯어감.", rate: 1 }, r2: { name: "환급러", text: "용돈 받는 기분. 근데 따지고 보면 내가 더 낸 돈 돌려받는 조삼모사.", rate: 4 } },
  // 26. 결혼식
  { id: "wedding", r1: { name: "축의금", text: "주말에 쉬고 싶은데 돈 내고 출석 체크하러 가야 함. 뷔페 맛없으면 화남.", rate: 2 }, r2: { name: "하객알바", text: "오랜만에 동창들 만나는 이벤트. 근데 서로 '너는 언제 가냐' 딜 넣음.", rate: 3 } },
  // 27. 명절
  { id: "holiday", r1: { name: "잔소리", text: "친척 몹들이 광역 딜 넣음. '취업은?', '결혼은?' 방어력 0 됨.", rate: 1 }, r2: { name: "전부치기", text: "기름 냄새 디버프 걸림. 다 끝나고 먹는 비빔밥 보상 하나 보고 버팀.", rate: 3 } },
  // 28. 조별 과제
  { id: "group-project", r1: { name: "무임승차", text: "인류애 상실하는 퀘스트. 결국 나 혼자 다 함. 파티 플레이 최악.", rate: 1 }, r2: { name: "자료조사", text: "복붙만 해오는 트롤러들 신고 기능 없나요?", rate: 1 } },
  // 29. 단톡방
  { id: "group-chat", r1: { name: "알림지옥", text: "나가면 초대하고 나가면 초대하는 감옥. 숫자 300+ 보면 현기증 남.", rate: 2 }, r2: { name: "눈팅족", text: "정보 얻기용으로 들어가 있긴 한데 말하기 귀찮음.", rate: 3 } },
  // 30. 눈치
  { id: "nunchi", r1: { name: "사회생활", text: "이 서버 필수 패시브 스킬. 이거 만렙 찍으면 어디서든 살아남음.", rate: 4 }, r2: { name: "피곤함", text: "숨 쉬는 것도 눈치 봐야 함. 마이웨이 특성 찍고 싶다.", rate: 1 } },
  // 31. 공인인증서
  { id: "public-certificate", r1: { name: "분노조절", text: "내 돈 내가 쓰겠다는데 본인 확인을 5번 시킴. 키보드 샷건 칠 뻔.", rate: 1 }, r2: { name: "액티브X", text: "이거 만든 개발자분, 평생 비밀번호 5번씩 틀리시길 바랍니다.", rate: 1 } },
  // 32. 로켓 배송
  { id: "rocket-delivery", r1: { name: "한국인", text: "어제 시켰는데 오늘 아침에 와있음. 운영자가 마법 쓴 듯. 갓패치.", rate: 5 }, r2: { name: "박스산", text: "편하긴 한데 쓰레기 아이템(박스)이 너무 많이 나옴.", rate: 3 } },
  // 33. 알람 시계
  { id: "alarm-clock", r1: { name: "아침의적", text: "듣기만 해도 심박수 올라가는 BGM. 5분만 더 기능 없었으면 폰 던졌음.", rate: 1 }, r2: { name: "모닝콜", text: "매일 아침 나와의 싸움에서 지게 만드는 기계.", rate: 2 } },
  // 34. 인스타그램
  { id: "instagram", r1: { name: "상대적박탈", text: "나 빼고 다 오마카세 먹고 해외여행 감. 자존감 도둑 어플.", rate: 2 }, r2: { name: "시간삭제", text: "릴스 몇 번 내렸는데 2시간 지나있음. 타임머신 기능 탑재.", rate: 3 } },
  // 35. 유튜브 알고리즘
  { id: "youtube-algorithm", r1: { name: "소름", text: "나보다 내 취향을 더 잘 암. 무서운 놈임.", rate: 5 }, r2: { name: "수면방해", text: "잘라고 누웠는데 자꾸 흥미로운 썸네일로 유혹함.", rate: 3 } },
  // 36. 배달비
  { id: "delivery-fee", r1: { name: "창렬", text: "배달비가 밥값보다 비싸짐. 내가 가서 받아오고 말지.", rate: 1 }, r2: { name: "무료배달", text: "요즘 무료 이벤트 한다는데 메뉴 가격을 올린 느낌.", rate: 2 } },
  // 37. 스팸 문자
  { id: "spam-message", r1: { name: "김미영", text: "유일하게 나를 꾸준히 찾아주는 팀장님. 가끔 외로울 때 반가움.", rate: 3 }, r2: { name: "차단불가", text: "차단해도 번호 바꿔서 계속 옴. 바퀴벌레 같은 생명력.", rate: 1 } },
  // 38. 키오스크
  { id: "kiosk", r1: { name: "선택장애", text: "뒤에 사람 기다리면 식은땀 남. 메뉴 찾는 UI 너무 복잡함.", rate: 2 }, r2: { name: "어르신", text: "뉴비 배려가 전혀 없는 불친절한 인터페이스. 주문하다 포기함.", rate: 1 } },
  // 39. 주식 어플
  { id: "stock-app", r1: { name: "파란나라", text: "고장 난 신호등임. 맨날 파란불(하락)만 들어옴. 삭제가 답이다.", rate: 1 }, r2: { name: "도박", text: "합법적 도박장. 9시만 되면 심장이 쫄깃해짐.", rate: 3 } },
  // 40. MBTI
  { id: "mbti", r1: { name: "과몰입러", text: "4글자로 사람 파악 가능. 소개팅 공략집 그 자체.", rate: 3 }, r2: { name: "과학호소", text: "혈액형별 성격설의 현대판 버전. 그냥 재미로만 보자 제발.", rate: 2 } },
  // 41. 미세먼지
  { id: "fine-dust", r1: { name: "그래픽오류", text: "서버 전체에 누런 필터 씌움. 시야 확보 안 되고 목 아픔.", rate: 1 }, r2: { name: "중국발", text: "옆 서버에서 넘어오는 버그 픽스 좀 해주세요.", rate: 2 } },
  // 42. 여름 모기
  { id: "mosquito", r1: { name: "멸종기원", text: "자려는데 귓가에서 윙윙거림. 고문 기술자임. 존재 이유를 모르겠음.", rate: 1 }, r2: { name: "간지러움", text: "물리면 며칠 동안 디버프 남음. 히트박스 작아서 잡기도 힘듦.", rate: 1 } },
  // 43. 장마철
  { id: "monsoon-season", r1: { name: "축축함", text: "양말 젖는 기분 최악. 빨래 안 마르고 집에서 냄새남.", rate: 1 }, r2: { name: "파전", text: "비 오는 날 막걸리 마시는 감성 하나 때문에 별점 2개 줌.", rate: 2 } },
  // 44. 한파
  { id: "cold-wave", r1: { name: "한파", text: "생존용 갑옷(롱패딩) 없으면 외출 불가. 시베리아 체험판.", rate: 3 }, r2: { name: "수족냉증", text: "손발이 얼어서 타자가 안 쳐짐. 난방비 폭탄의 계절.", rate: 1 } },
  // 45. 은행 열매
  { id: "ginkgo-nut", r1: { name: "똥냄새", text: "가을의 낭만은 개뿔. 바닥에 깔린 지뢰임. 밟으면 하루 망함.", rate: 1 }, r2: { name: "노란길", text: "눈으로 볼 때만 예쁨. 후각 테러범.", rate: 2 } },
  // 46. 비둘기
  { id: "pigeon", r1: { name: "닭둘기", text: "평화의 상징 아님. 날지 않고 걸어 다니는 깡패 몹.", rate: 1 }, r2: { name: "위생", text: "푸드덕거릴 때마다 병균 퍼지는 느낌. 제발 저리 가.", rate: 2 } },
  // 47. 층간 소음
  { id: "noise-pollution", r1: { name: "발망치", text: "윗집에 코끼리 사는 듯. 새벽에 쿵쿵대면 살인 충동 느낌.", rate: 1 }, r2: { name: "보복스피커", text: "이웃 사랑 퀘스트 실패. 전쟁이다.", rate: 1 } },
  // 48. 다이어트
  { id: "diet", r1: { name: "무한루프", text: "성공한 유저를 본 적이 없음. '내일부터'만 반복하는 버그 걸림.", rate: 1 }, r2: { name: "식단", text: "풀만 먹고 어떻게 사냐. 맛있는 건 다 살찜. 억울함.", rate: 2 } },
  // 49. 수능
  { id: "suneung", r1: { name: "잔인함", text: "19년 인생을 하루 만에 평가함. 너무 가혹한 시스템.", rate: 1 }, r2: { name: "해방감", text: "끝나고 나면 세상 다 가진 기분. (성적표 나오기 전까지만)", rate: 3 } },
  // 50. 나이
  { id: "age", r1: { name: "강제배송", text: "주문 안 했는데 매년 1월 1일에 강제로 배송됨. 반품 불가.", rate: 1 }, r2: { name: "체력저하", text: "숫자 올라갈수록 스테미나 회복 속도가 느려짐. 슬픔.", rate: 2 } },
];

const EXTRA_MOCK_REVIEWS = [
  { itemId: "ice-americano", name: "카페인중독", text: "혈관에 커피 흐르는 중. 수혈 완료.", rate: 5 },
  { itemId: "subway-line-9", name: "김포공항행", text: "이게 사람이 탈 수 있는 건가요? 짐짝 체험 2일차.", rate: 1 },
  { itemId: "fried-chicken", name: "양념파", text: "후라이드는 사파다. 양념이 진리임.", rate: 5 },
  { itemId: "boss", name: "넵무새", text: "넵. 알겠습니다. 넵. (살려줘)", rate: 1 },
  { itemId: "monday", name: "월요병환자", text: "주말이 1초 만에 지나갔어요. 버그 아닌가요?", rate: 1 },
  { itemId: "mbti", name: "INFJ", text: "저는 내향형이라 눈팅만 하고 갑니다.", rate: 3 },
  { itemId: "delivery-fee", name: "거지", text: "배달비 아까워서 포장해옴. 운동되고 좋네... (눈물)", rate: 2 },
  { itemId: "soju", name: "주량반병", text: "쓰다... 인생보다 쓰다...", rate: 3 },
  { itemId: "public-certificate", name: "인내심테스트", text: "키보드 보안 프로그램 설치만 3번째. 그냥 안 살란다.", rate: 1 },
  { itemId: "diet", name: "아가리어터", text: "맛있게 먹으면 0칼로리 맞죠? 제발 맞다고 해줘.", rate: 5 },
  { itemId: "seoul-apartment", name: "한강뷰", text: "다음 생에는 살 수 있겠죠?", rate: 1 },
  { itemId: "gukbap", name: "국밥부장관", text: "뜨끈~하고 든든~한 국밥 한 그릇이면 세상 부러울 게 없다.", rate: 5 },
  { itemId: "youtube-algorithm", name: "새벽3시", text: "건축학개론 해석 영상 보다가 밤샘. 책임져라.", rate: 4 },
  { itemId: "mosquito", name: "헌혈천사", text: "제 피 그만 좀 가져가세요. 빈혈 오겠음.", rate: 1 },
  { itemId: "wedding", name: "프로하객러", text: "뷔페 육회 상태가 별로였음. 별점 깎음.", rate: 3 },
  { itemId: "mix-coffee", name: "맥심골드", text: "황금 비율. 바리스타가 타준 것보다 맛있음.", rate: 5 },
  { itemId: "stock-app", name: "존버단", text: "구조대 언제 오나요? 3년째 기다리는 중.", rate: 2 },
  { itemId: "mint-choco", name: "반민초협회", text: "치약 맛을 돈 주고 사 먹다니 이해 불가.", rate: 1 },
  { itemId: "commute-bus", name: "총알택시", text: "기사님 운전 실력이 F1 레이서급. 멀미는 덤.", rate: 3 },
  { itemId: "fine-dust", name: "마스크맨", text: "오늘 미세먼지 수치 최악. 목 칼칼함.", rate: 1 },
  { itemId: "suneung", name: "재수생", text: "이번엔 진짜 잘 본다. 딱 기다려라 대학.", rate: 4 },
  { itemId: "kiosk", name: "디지털소외", text: "주문하기 너무 어려워요. 직원 불러주세요.", rate: 2 },
  { itemId: "rocket-delivery", name: "쿠팡맨", text: "없는 게 없음. 생활의 필수품.", rate: 5 },
  { itemId: "age", name: "빠른년생", text: "족보 꼬이는 주범. 친구 먹기 애매함.", rate: 2 },
  { itemId: "pigeon", name: "비둘기야", text: "먹이 주지 마세요. 제발.", rate: 2 },
  { itemId: "pork-belly", name: "상추쌈", text: "마늘이랑 고추 넣고 한 입 크게 먹으면 극락.", rate: 5 },
  { itemId: "zero-cola", name: "펩시제로", text: "라임 맛이 진리임. 코카콜라 반성해라.", rate: 5 },
  { itemId: "noise-pollution", name: "이어플러그", text: "귀마개 끼고 자야 함. 윗집 뭐 하냐 진짜.", rate: 1 },
  { itemId: "olive-young", name: "세일기간", text: "필요 없는 것까지 사게 됨. 마케팅의 노예.", rate: 3 },
  { itemId: "han-river-park", name: "돗자리", text: "날씨 좋을 때 맥주 한 캔 하면 최고.", rate: 5 },
  { itemId: "coin-karaoke", name: "천원에4곡", text: "서비스 한 곡만 더 주세요 사장님.", rate: 4 },
  { itemId: "starbucks", name: "사이렌오더", text: "줄 안 서도 돼서 편함. 닉네임 불릴 때 좀 창피함.", rate: 4 },
  { itemId: "daiso", name: "천냥백화점", text: "건전지 사러 갔다가 2만 원 쓰고 옴.", rate: 4 },
  { itemId: "tax-settlement", name: "세금환급", text: "치킨값 벌었다. 나이스.", rate: 5 },
  { itemId: "group-project", name: "조장", text: "잠수탄 조원 이름 뺍니다. ㅅㄱ", rate: 1 },
  { itemId: "nunchi", name: "눈치게임", text: "1!", rate: 3 },
  { itemId: "cold-wave", name: "전기장판", text: "이불 밖은 위험해. 귤 까먹으면서 넷플릭스 보는 게 최고.", rate: 4 },
  { itemId: "instagram", name: "인스타충", text: "사진 찍으러 카페 감. 커피 맛은 중요하지 않음.", rate: 3 },
  { itemId: "monsoon-season", name: "제습기", text: "제습기 발명한 사람 상 줘야 함. 뽀송뽀송.", rate: 5 },
  { itemId: "holiday", name: "용돈수금", text: "조카들이 무섭다... 내 지갑...", rate: 2 },
  { itemId: "group-chat", name: "읽씹", text: "읽었는데 답장 안 함. 귀찮아.", rate: 3 },
  { itemId: "spam-message", name: "국제발신", text: "[Web발신] 회원님 당첨되셨습니다. (사기꾼들)", rate: 1 },
  { itemId: "convenience-store", name: "편순이", text: "폐기 도시락 먹는 재미로 알바함.", rate: 3 },
  { itemId: "commute-bus", name: "만원버스", text: "뒷문으로 내릴게요!!! (다급)", rate: 2 },
  { itemId: "public-toilet", name: "급똥", text: "휴지 있어서 다행이다. 천만다행.", rate: 5 },
  { itemId: "alarm-clock", name: "5분만", text: "스누즈 기능 없었으면 난 이미 해고당했음.", rate: 4 },
  { itemId: "ginkgo-nut", name: "은행테러", text: "신발 밑창 닦아도 냄새 남. 으악.", rate: 1 },
  { itemId: "overtime", name: "야근수당", text: "돈이라도 많이 주면 참겠는데...", rate: 2 },
  { itemId: "company-dinner", name: "건배사", text: "시키지 좀 마세요. 체할 것 같음.", rate: 1 },
  { itemId: "boss", name: "꼰대", text: "나 때는 말이야~ (어쩌라고)", rate: 1 },
];

export const EARTH_SEED_REVIEWS: Review[] = [
  ...MOCK_REVIEWS_DATA.flatMap((item, idx) => {
    const t1 = BASE_TIME + 1000 * 60 * 60 * 24 * (idx + 1); // 날짜 분산
    const t2 = t1 + 1000 * 60 * 60 * 12;

    return [
      {
        id: `${item.id}-1`,
        itemId: item.id,
        name: item.r1.name,
        text: item.r1.text,
        rating: item.r1.rate,
        likes: Math.floor(Math.random() * 500) + 10,
        createdAt: t1,
      },
      {
        id: `${item.id}-2`,
        itemId: item.id,
        name: item.r2.name,
        text: item.r2.text,
        rating: item.r2.rate,
        likes: Math.floor(Math.random() * 500) + 10,
        createdAt: t2,
      },
    ];
  }),
  ...EXTRA_MOCK_REVIEWS.map((review, idx) => {
    const createdAt = BASE_TIME + Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
    const likes = Math.floor(Math.random() * 300);
    const id = `extra-${idx}`;

    return {
      id,
      itemId: review.itemId,
      name: review.name,
      text: review.text,
      rating: review.rate,
      likes,
      createdAt,
    };
  }),
];
