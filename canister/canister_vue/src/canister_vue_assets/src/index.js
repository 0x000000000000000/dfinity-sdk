import { canister_vue } from "../../declarations/canister_vue";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with canister_vue actor, calling the greet method
  const greeting = await canister_vue.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
