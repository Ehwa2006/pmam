function renderStamps() {
  const stampList = document.getElementById("stampList");
  const stamps = JSON.parse(localStorage.getItem("stamps") || "[]");

  if (stamps.length === 0) {
    stampList.innerHTML = "<p>아직 받은 스탬프가 없습니다.</p>";
    return;
  }

  stampList.innerHTML = "";

  stamps.forEach(id => {
    const spot = SPOTS[id];
    if (!spot) return;

    const div = document.createElement("div");
    div.className = "stamp-item";
    div.innerHTML = `
      <strong>📍 ${spot.name}</strong>
      <span>${spot.year}</span>
    `;
    stampList.appendChild(div);
  });
}

// 페이지 로드 시 실행
renderStamps();
