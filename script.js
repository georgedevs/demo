const messages = [
  "Update headline copy",
  "Tweak button color",
  "Fix typo in subtitle",
  "Add footer note",
  "Adjust spacing"
];

let version = 1;
const btn = document.getElementById("ship-btn");
const log = document.getElementById("commit-log");
const buildNumber = document.getElementById("build-number");
const deployTime = document.getElementById("deploy-time");
const headline = document.getElementById("headline");

function randomHash() {
  return Math.random().toString(16).slice(2, 9);
}

btn.addEventListener("click", () => {
  version += 1;

  const msg = messages[(version - 2) % messages.length];

  const entry = document.createElement("li");
  entry.className = "log-entry";
  entry.innerHTML = `
    <span class="log-hash">${randomHash()}</span>
    <span class="log-msg">${msg}</span>
  `;
  log.prepend(entry);

  buildNumber.textContent = `v${version}`;
  headline.textContent = `This page has been redeployed ${version - 1} time(s).`;
  deployTime.textContent = `deployed ${new Date().toLocaleTimeString()}`;
});
