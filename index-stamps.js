function renderStamps() {
  const stampList = document.getElementById("stampList");
  const stamps = JSON.parse(localStorage.getItem("stamps") || "[]");

  if (stamps.length === 0) {
    stampList.innerHTML =
      "<p style='color:#777'>아직 받은 스탬프가 없습니다.</p>";
    return;
  }

  stampList.innerHTML = "";

  stamps.forEach(id => {
    const spot = SPOTS[id];
    if (!spot) return;

    const item = document.createElement("div");
    item.className = "stamp-item";

    item.innerHTML = `
      <strong>📍 ${spot.name}</strong>
      <span>${spot.year}</span>
    `;

    stampList.appendChild(item);
  });
}

// 페이지 로드 시 & AR 복귀 시 자동 실행
renderStamps();
