document.getElementById("message").addEventListener("input", function () {
  const maxLength = this.getAttribute("maxlength");
  const currentLength = this.value.length;

  if (currentLength >= maxLength) {
    document.getElementById("message-info").textContent =
      "Maximum of " + maxLength + " characters reached";
  } else {
    document.getElementById("message-info").textContent = "";
  }
});
