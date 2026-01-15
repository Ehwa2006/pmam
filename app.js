new Html5Qrcode("reader").start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 220 },
  qrText => {

    const scanned = qrText.trim(); // ⭐ 핵심
    console.log("스캔된 QR:", scanned);

    const spot = Object.values(SPOTS)
      .find(s => s.qr === scanned);

    if (!spot) {
      document.getElementById("status").innerText =
        `등록되지 않은 장소입니다.\n(${scanned})`;
      return;
    }

    sessionStorage.setItem("currentSpot", spot.id);
    location.href = "ar.html";
  }
);
