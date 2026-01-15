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
