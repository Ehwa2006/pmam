// ==========================
// URL → 스팟 판별 함수
// ==========================
async function getSpotFromUrl(url) {
  const res = await fetch(url);
  const html = await res.text();
  const text = html.toUpperCase();

  const TEXT_SPOT_MAP = {
    "SPOT_IMUN": "imun",
    "SPOT_SEWOON": "sewoon",
    "SPOT_SUPYO": "supyo",
    "SPOT_SAMIL": "samil",
    "SPOT_JANGTONG": "jangtong",
    "SPOT_GWANGTONG": "gwangtong"
  };

  for (const key in TEXT_SPOT_MAP) {
    if (text.includes(key)) {
      return TEXT_SPOT_MAP[key];
    }
  }

  return null;
}

// ==========================
// QR 스캔 (index 전용)
// ==========================
window.addEventListener("DOMContentLoaded", async () => {

  const status = document.getElementById("status");
  const qr = new Html5Qrcode("reader");

  try {
    const cameras = await Html5Qrcode.getCameras();
    if (!cameras.length) {
      status.innerText = "카메라를 찾을 수 없습니다.";
      return;
    }

    // 📷 뒷카메라 우선
    const backCam =
      cameras.find(c =>
        c.label.toLowerCase().includes("back") ||
        c.label.toLowerCase().includes("rear")
      ) || cameras[0];

    status.innerText = "QR을 스캔해주세요";

    await qr.start(
      backCam.id,
      { fps: 10, qrbox: 250 },
      async qrText => {

        const scanned = qrText.trim();
        console.log("스캔:", scanned);

        let spotId = null;

        // ✅ URL QR 처리
        if (scanned.startsWith("http")) {
          spotId = await getSpotFromUrl(scanned);
        }
        // ✅ 텍스트 QR 처리
        else {
          const spot = Object.values(SPOTS)
            .find(s => s.qr === scanned);
          spotId = spot?.id;
        }

        if (!spotId) {
          status.innerText = "등록되지 않은 장소입니다.";
          return;
        }

        navigator.vibrate?.(100);
        sessionStorage.setItem("currentSpot", spotId);

        // 📌 카메라 정지 후 이동
        qr.stop().then(() => {
          location.href = "ar.html";
        });
      }
    );

  } catch (e) {
    console.error(e);
    status.innerText = "카메라 실행 실패";
  }
});
