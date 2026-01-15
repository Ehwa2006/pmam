const saved = JSON.parse(localStorage.getItem("SPOTS_DATA"));

const SPOTS = saved || {
  imun: {
    id: "imun",
    name: "이문설농탕",
    year: "1904",
    qr: "SPOT_IMUN",
    target: "assets/targets/img.mind",
    story: [
      "1904년, 조선 말기. 이문설농탕의 문이 열렸다.",
      "설농탕은 왕이 백성에게 나누어주던 선농제에서 유래한 음식이다.",
      "일제강점기와 전쟁을 거치며 이곳은 서민들의 식당이 되었다.",
      "오늘날 이문설농탕은 서울미래유산으로 지정되어 있다."
    ]
  }
};
