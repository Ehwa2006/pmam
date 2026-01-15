const saved = JSON.parse(localStorage.getItem("SPOTS_DATA"));

const SPOTS = {

  imun: {
    id: "imun",
    type: "restaurant",
    name: "이문설농탕",
    year: "1904",
    qr: "SPOT_IMUN",

    story: [
      "이문설농탕은 1904년에 문을 연 한국에서 가장 오래된 식당 중 하나다.",
      "청계천 인근에서 노동자와 상인들의 삶을 지탱해온 공간이다."
    ],

    comic: [
      "assets/comics/imun_1.png",
      "assets/comics/imun_2.png",
      "assets/comics/imun_3.png",
      "assets/comics/imun_4.png"
    ]
  },

  /* =====================
     1️⃣ 광통교
  ===================== */
  gwangtong: {
    id: "gwangtong",
    name: "광통교",
    year: "조선 태종",
    qr: "SPOT_GWANGTONG",
    targetIndex: 0,
    target: "assets/targets/gwangtong.mind",
    image: "assets/images/gwangtong.jpg",


    story: [
      "광통교는 조선 시대 청계천을 대표하던 가장 중요한 다리였다.",
      "왕실과 관청을 잇는 길목으로 관리와 사신들이 반드시 건너야 했다.",
      "이 다리는 도시 질서와 권력을 상징하는 장소였다.",
      "청계천 복원 이후, 광통교는 다시 서울의 시작점이 되었다."
    ],

    comic: [
      "assets/comics/gwangtong_1.jpg",
      "assets/comics/gwangtong_2.jpg",
      "assets/comics/gwangtong_3.jpg",
      "assets/comics/gwangtong_4.jpg"
    ]
  },

  /* =====================
     2️⃣ 장통교
  ===================== */
  jangtong: {
    id: "jangtong",
    name: "장통교",
    year: "조선 후기",
    qr: "SPOT_JANGTONG",    
    targetIndex: 1,
    target: "assets/targets/jangtong.mind",
    image: "assets/images/jangtong.jpg",

    story: [
      "장통교 주변에는 조선 최대 규모의 시장이 형성되었다.",
      "청계천은 물길이자 상인의 길이었다.",
      "물자와 사람이 끊임없이 오가며 서울의 하루를 만들었다.",
      "이곳은 도시 경제의 심장부였다."
    ],

    comic: [
      "assets/comics/jangtong_1.jpg",
      "assets/comics/jangtong_2.jpg",
      "assets/comics/jangtong_3.jpg",
      "assets/comics/jangtong_4.jpg"
    ]
  },

  /* =====================
     3️⃣ 수표교
  ===================== */
  supyo: {
    id: "supyo",
    name: "수표교",
    year: "조선 세종",
    qr: "SPOT_SUPYO",
    target: "assets/targets/supyo.mind",
    targetIndex: 2,
    image: "assets/images/supyo.jpg",

    story: [
      "수표교에는 홍수를 대비한 수표석이 설치되어 있었다.",
      "조선은 이미 과학적인 수자원 관리 시스템을 갖추고 있었다.",
      "물의 높이를 기록하는 것은 곧 백성을 지키는 일이었다.",
      "이 다리는 과학과 행정의 상징이었다."
    ],

    comic: [
      "assets/comics/supyo_1.jpg",
      "assets/comics/supyo_2.jpg",
      "assets/comics/supyo_3.jpg",
      "assets/comics/supyo_4.jpg"
    ]
  },

  /* =====================
     4️⃣ 삼일교
  ===================== */
  samil: {
    id: "samil",
    name: "삼일교",
    year: "1960년대",
    qr: "SPOT_SAMIL",
    targetIndex: 3,
    target: "assets/targets/samil.mind",
    image: "assets/images/samil.jpg",

    story: [
      "삼일교는 근현대 서울의 변화를 가장 가까이에서 지켜본 다리다.",
      "1960~70년대 민주화의 열기가 이곳을 지나갔다.",
      "청계천은 단지 하천이 아니라 시민의 공간이었다.",
      "이 다리는 기억과 저항의 상징이 되었다."
    ],

    comic: [
      "assets/comics/samil_1.jpg",
      "assets/comics/samil_2.jpg",
      "assets/comics/samil_3.jpg",
      "assets/comics/samil_4.jpg"
    ]
  },

  /* =====================
     5️⃣ 세운교
  ===================== */
  sewoon: {
    id: "sewoon",
    name: "세운교",
    year: "1970년대",
    qr: "SPOT_SEWOON",
    targetIndex: 4,
    target: "assets/targets/sewoon.mind",
    image: "assets/images/sewoon.jpg",
    story: [
      "세운교는 산업화 시대 서울의 풍경을 상징한다.",
      "전자상가와 기술자들이 모여들던 공간이었다.",
      "청계천은 산업과 기술의 기반이 되었다.",
      "이 다리는 과거에서 미래로 넘어가는 다리다."
    ],

    comic: [
      "assets/comics/sewoon_1.jpg",
      "assets/comics/sewoon_2.jpg",
      "assets/comics/sewoon_3.jpg",
      "assets/comics/sewoon_4.jpg"
    ]
  }

};
