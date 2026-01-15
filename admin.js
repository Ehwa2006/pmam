// 스팟 목록 불러오기
const select = document.getElementById("spotSelect");

Object.values(SPOTS).forEach(spot => {
  const option = document.createElement("option");
  option.value = spot.id;
  option.textContent = spot.name;
  select.appendChild(option);
});

// 스팟 선택 시 기존 스토리 로드
select.addEventListener("change", () => {
  const spot = SPOTS[select.value];
  document.getElementById("storyInput").value =
    spot.story.join("\n");
});

// 저장
function saveStory() {
  const spot = SPOTS[select.value];
  spot.story =
    document.getElementById("storyInput")
      .value.split("\n");

  localStorage.setItem("SPOTS_DATA", JSON.stringify(SPOTS));
  alert("저장 완료 (로컬 기준)");
}
const stampList = document.getElementById("stampList");

// 저장된 스탬프 불러오기
const stamps = JSON.parse(localStorage.getItem("stamps") || "[]");

if (stamps.length === 0) {
  stampList.innerHTML = `
    <p class="empty">아직 받은 스탬프가 없습니다.</p>
  `;
} else {
  stamps.forEach(id => {
    const spot = SPOTS[id];
    if (!spot) return;

    const card = document.createElement("div");
    card.className = "stamp-card";

    card.innerHTML = `
      <h3>📍 ${spot.name}</h3>
      <p>설립 연도: ${spot.year}</p>
      <p class="done">✅ 방문 완료</p>
    `;

    stampList.appendChild(card);
  });
}

