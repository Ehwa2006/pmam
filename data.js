const saved =
  JSON.parse(localStorage.getItem("SPOTS_DATA"));

const SPOTS = saved || {
  imun: {
    id: "imun",
    name: "이문설농탕",
    year: "1904",
    qr: "SPOT_IMUN",
    target: "assets/targets/img.mind", // ⭐ 여기
    story: [
      "1904년, 조선 말기. 이문설농탕의 문이 열렸다.",
      "설농탕은 왕이 백성에게 베풀던 선농제에서 유래한 음식이다.",
      "일제강점기와 한국전쟁을 거치며 이곳은 노동자와 서민의 식당이 되었다.",
      "손기정 선수를 비롯한 수많은 인물들이 이곳에서 국밥 한 그릇으로 하루를 시작했다.",
      "오늘날 이문설농탕은 서울미래유산으로 지정되어 있다."
    ]
  }
};
