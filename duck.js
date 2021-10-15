if (
  (
    document.documentElement.textContent || document.documentElement.innerText
  ).indexOf("Duck") > -1
) {
  document.body.style.border = "15px solid green";
}
