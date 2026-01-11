// script.js

const shareBtn = document.querySelector(".share");
const sharePanel = document.querySelector(".share-panel");
const activeShareBtn = document.querySelector(".share-active-btn");
const profile = document.querySelector(".profile");

// 1. 点击原始按钮：显示面板
shareBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // 防止冒泡
  console.log("share btn");
  if (profile.classList.contains("active")) {
    profile.classList.remove("active");
  } else {
    profile.classList.add("active");
  }
});

// 2. 点击面板内的黑色按钮：隐藏面板
// (注意：这里加个 if 判断，防止如果你还没写这个按钮 JS 报错)
if (activeShareBtn) {
  activeShareBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    profile.classList.remove("active");
  });
}

// 3. 点击页面空白处：关闭面板（可选优化体验）
document.addEventListener("click", (e) => {
  // 如果面板是打开的，且点击的位置不在 profile 内部
  if (profile.classList.contains("active") && !profile.contains(e.target)) {
    profile.classList.remove("active");
  }
});
