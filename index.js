const { hash } = window.location;
// destructure hash from window.location (window.location.hash)

const message = atob(hash.replace("#", ""));

if (message) {
  document.querySelector("#message-show").classList.remove("hide");
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("h1").innerText = message;
}

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // stop default form submit behaviour which is to send data to back end (which we don't have)

  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");

  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.focus();
  linkInput.select();
});
