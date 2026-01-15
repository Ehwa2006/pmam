// ==========================
// QR 스캔 (index 자동 실행)
// ==========================
window.addEventListener("DOMContentLoaded", async () => {

  const status = document.getElementById("status");
  const qrScanner = new Html5Qrcode("reader");

  // URL → SPOT 매핑
  const URL_MAP = {
    "https://qrly.org/T6Ta7n": "SPOT_IMUN"
  };

  try {
    const cameras = await Html5Qrcode.getCameras();
    if (!cameras.length) {
      status.innerText = "카메라 없음";
      return;
    }

    // 후면 카메라 선택
    const backCamera = cameras.find(cam =>
      cam.label.toLowerCase().includes("back") ||
      cam.label.toLowerCase().includes("rear") ||
      cam.label.toLowerCase().includes("environment")
    );

    const cameraId = backCamera ? backCamera.id : cameras[0].id;

    status.innerText = "QR을 인식해주세요";

    await qrScanner.start(
      cameraId,
      { fps: 10, qrbox: 250 },
      qrText => {
        const scanned = qrText.trim();
        console.log("스캔:", scanned);

        let spot = null;

        // URL QR 처리
        if (scanned.startsWith("http")) {
          const spotKey = URL_MAP[scanned];
          if (spotKey) {
            spot = Object.values(SPOTS)
              .find(s => s.qr === spotKey);
          }
        } else {
          // 텍스트 QR 처리
          spot = Object.values(SPOTS)
            .find(s => s.qr === scanned);
        }

        if (!spot) {
          status.innerText = "등록되지 않은 장소입니다.";
          return;
        }

        navigator.vibrate?.(100);
        sessionStorage.setItem("currentSpot", spot.id);

        qrScanner.stop().then(() => {
          location.href = "ar.html";
        });
      }
    );

  } catch (e) {
    console.error(e);
    status.innerText = "카메라 실행 실패";
  }
});
