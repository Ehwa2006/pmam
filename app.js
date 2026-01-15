// ==========================
// 데이터 (최상단)
// ==========================
const SPOTS = {
  imun: {
    id: "imun",
    name: "이문설농탕",
    year: "1904",
    qr: "SPOT_IMUN",
    story: [
      "이문설농탕은 1904년 문을 연 한국 최고(最古)의 식당 중 하나다.",
      "일제강점기와 전쟁을 견디며 서민들의 삶을 지켜왔다.",
      "손기정 선수를 비롯한 수많은 인물들이 찾은 장소다.",
      "오늘날 서울미래유산으로 지정되어 있다."
    ]
  }
};

// ==========================
// QR 스캔 로직 (index 전용)
// ==========================
window.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startScan");
  const status = document.getElementById("status");

  if (!startBtn) {
    console.log("QR 페이지 아님");
    return;
  }

  let qrScanner = null;

  startBtn.addEventListener("click", () => {

    status.innerText = "카메라 권한 요청 중...";

    if (!qrScanner) {
      qrScanner = new Html5Qrcode("reader");
    }

    qrScanner.start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      qrText => {
        const scanned = qrText.trim();
        console.log("스캔:", scanned);

        const spot = Object.values(SPOTS)
          .find(s => s.qr === scanned);

        if (!spot) {
          status.innerText = "등록되지 않은 장소입니다.";
          return;
        }

        navigator.vibrate?.(100);

        sessionStorage.setItem("currentSpot", spot.id);
        location.href = "ar.html";
      }
    ).catch(err => {
      console.error(err);
      status.innerText = "카메라 권한을 허용해주세요";
    });

  });

});
