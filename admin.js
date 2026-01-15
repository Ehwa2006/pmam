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
