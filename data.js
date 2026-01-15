const saved =
  JSON.parse(localStorage.getItem("SPOTS_DATA"));

const SPOTS = saved || {
  imun: { "name": "이문설농탕", "story": [] },
  spot2: { "name": "스팟2", "story": [] }
};
