// ==========================
// QR 스캔 (index 전용, 자동 실행)
// ==========================
window.addEventListener("DOMContentLoaded", async () => {

  const readerElem = document.getElementById("reader");
  const status = document.getElementById("status");

  if (!readerElem) return;

  const qrScanner = new Html5Qrcode("reader");

  try {
    const cameras = await Html5Qrcode.getCameras();

    if (!cameras.length) {
      status.innerText = "카메라를 찾을 수 없습니다.";
      return;
    }

    status.innerText = "QR을 인식해주세요";

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

  } catch (err) {
    console.error(err);
    status.innerText = "카메라 권한이 필요합니다.";
  }
});
