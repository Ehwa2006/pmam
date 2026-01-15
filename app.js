const reader = new Html5Qrcode("reader");

const stamps = JSON.parse(localStorage.getItem("stamps") || "[]");

reader.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  qrText => {
    const spotId = parseInt(qrText.replace("SPOT_", ""));

    if (!stamps.includes(spotId)) {
      stamps.push(spotId);
      localStorage.setItem("stamps", JSON.stringify(stamps));
      location.href = "ar.html";
    } else {
      document.getElementById("status").innerText =
        "이미 방문한 장소입니다.";
    }
  }
);
const SPOTS = {
  imun: {
    id: "imun",
    name: "이문설농탕",
    year: "1904",
    qr: "SPOT_IMUN",
    target: "assets/targets/imun.mind",
    story: [
      "이문설농탕은 1904년 문을 연, 한국에서 가장 오래된 식당 중 하나다.",
      "일제강점기와 한국전쟁을 거치며 수많은 시대를 견뎌왔다.",
      "손기정 선수를 비롯한 수많은 인물들이 이곳을 찾았다.",
      "오늘날에는 서울미래유산으로 지정되어 그 가치를 인정받고 있다."
    ]
  },

  spot2: {
    id: "spot2",
    name: "○○ 골목 입구",
    year: "1930s",
    qr: "SPOT_2",
    target: "assets/targets/spot2.mind",
    story: [
      "이 골목은 1930년대부터 상인들이 모여들던 장소였다.",
      "전쟁 이후 서민들의 삶이 스며든 공간으로 변화했다."
    ]
  }
};
new Html5Qrcode("reader").start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 220 },

  qrText => {
    const scanned = qrText.trim();
    console.log("스캔된 QR:", scanned);

    let spot = null;

    // 1️⃣ URL QR 처리
    if (scanned.startsWith("http")) {

      // 🔑 URL → 스팟 매핑 테이블
      const URL_MAP = {
        "https://qrly.org/T6Ta7n": "SPOT_IMUN"
      };

      const spotKey = URL_MAP[scanned];
      if (spotKey) {
        spot = Object.values(SPOTS)
          .find(s => s.qr === spotKey);
      }

    } else {
      // 2️⃣ 기존 텍스트 QR 처리
      spot = Object.values(SPOTS)
        .find(s => s.qr === scanned);
    }

    if (!spot) {
      document.getElementById("status").innerText =
        "등록되지 않은 장소입니다.";
      return;
    }

    sessionStorage.setItem("currentSpot", spot.id);
    location.href = "ar.html";
  }
);

navigator.vibrate?.(100);
