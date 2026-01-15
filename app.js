window.addEventListener("DOMContentLoaded", async () => {

  const status = document.getElementById("status");
  const qr = new Html5Qrcode("reader");

  try {
    const cameras = await Html5Qrcode.getCameras();
    const backCam =
      cameras.find(c => c.label.toLowerCase().includes("back")) || cameras[0];

    status.innerText = "QR을 스캔해주세요";

    await qr.start(
      backCam.id,
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

        sessionStorage.setItem("currentSpot", spot.id);
        qr.stop();
        location.href = "ar.html";
      }
    );

  } catch (e) {
    console.error(e);
    status.innerText = "카메라 실행 실패";
  }
});
