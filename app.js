// ==========================
// 데이터
// ==========================
const SPOTS = {
  imun: {
    id: "imun",
    name: "이문설농탕",
    qr: "SPOT_IMUN"
  }
};

// ==========================
// QR 스캔 (index 전용)
// ==========================
window.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startScan");
  const readerElem = document.getElementById("reader");
  const status = document.getElementById("status");

  if (!startBtn || !readerElem) return;

  let qrScanner = null;
  let isScanning = false;

  startBtn.addEventListener("click", async () => {

    if (isScanning) return;

    status.innerText = "카메라 시작 중...";
    qrScanner = new Html5Qrcode("reader");

    try {
      const cameras = await Html5Qrcode.getCameras();
      if (!cameras.length) {
        status.innerText = "카메라를 찾을 수 없습니다.";
        return;
      }

      isScanning = true;

      await qrScanner.start(
        cameras[0].id,
        { fps: 10, qrbox: 250 },
        qrText => {
          const scanned = qrText.trim();
          console.log("QR:", scanned);

          const spot = Object.values(SPOTS)
            .find(s => s.qr === scanned);

          if (!spot) {
            status.innerText = "등록되지 않은 장소입니다.";
            return;
          }

          navigator.vibrate?.(100);
          sessionStorage.setItem("currentSpot", spot.id);

          qrScanner.stop();
          location.href = "ar.html";
        }
      );

      status.innerText = "QR을 인식해주세요";

    } catch (err) {
      console.error(err);
      status.innerText = "카메라 실행 실패";
      isScanning = false;
    }
  });
});
