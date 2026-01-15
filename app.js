window.addEventListener("DOMContentLoaded", async () => {

  const status = document.getElementById("status");
  const qrScanner = new Html5Qrcode("reader");

  try {
    const cameras = await Html5Qrcode.getCameras();
    if (!cameras.length) {
      status.innerText = "카메라 없음";
      return;
    }

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
        const spot = Object.values(SPOTS)
          .find(s => s.qr === scanned);

        if (!spot) return;

        navigator.vibrate?.(100);
        sessionStorage.setItem("currentSpot", spot.id);
        qrScanner.stop();
        location.href = "ar.html";
      }
    );

  } catch (e) {
    console.error(e);
    status.innerText = "카메라 실행 실패";
  }
});
