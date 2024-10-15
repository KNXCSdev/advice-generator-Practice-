document.querySelector(".btn").addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".advice").textContent = data.slip.advice;
      document.querySelector(".advice--number").textContent = ` #${data.slip.id}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
