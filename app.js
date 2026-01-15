new Html5Qrcode("reader").start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 220 },
  qrText => {
    const spot = Object.values(SPOTS)
      .find(s => s.qr === qrText);

    if (!spot) {
      document.getElementById("status").innerText =
        "등록되지 않은 장소입니다.";
      return;
    }

    sessionStorage.setItem("currentSpot", spot.id);
    location.href = "ar.html";
  }
);
