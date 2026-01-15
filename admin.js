// AR + 스토리 동적 생성
const scene = document.getElementById("scene");
scene.setAttribute(
  "mindar-image",
  `imageTargetSrc: ${spot.target};`
);

document.getElementById("storyBox").innerHTML = `
  <h3>${spot.name} (${spot.year})</h3>
  ${spot.story.map(s => `<p>${s}</p>`).join("")}
`;

function complete() {
  const stamps = JSON.parse(localStorage.getItem("stamps") || "[]");
  if (!stamps.includes(spot.id)) {
    stamps.push(spot.id);
    localStorage.setItem("stamps", JSON.stringify(stamps));
  }
  location.href = "stamps.html";
}
