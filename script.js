let count = localStorage.getItem("beskoClicks") || 0;
document.getElementById("count").innerText = count;

function clickIt() {
  count++;
  localStorage.setItem("beskoClicks", count);
  document.getElementById("count").innerText = count;
}
