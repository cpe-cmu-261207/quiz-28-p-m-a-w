async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  const result = resp.data.results[0];
  document.querySelector("img#img-profile").src = result.picture.large;
  document.querySelector(
    "p#p-name"
  ).innerHTML = `${result.name.first} ${result.name.last}`;
  const location = result.location;
  document.querySelector(
    "p#p-address"
  ).innerHTML = `${location.city} ${location.state} ${location.country} ${location.postcode}`;
  document.querySelector("p#p-email").innerHTML = result.email;
  document.querySelector("span#span-gender-icon").innerHTML =
    result.gender === "male" ? "👨" : "👩";

  document.querySelector("#div-loading-card").style.display = "none";
  document.querySelector("#div-user-card").style.display = "";
  document.querySelector("#span-gender-icon").style.display = "";
  return;
}
async function reload() {
  document.querySelector("#div-loading-card").style.display = "";
  document.querySelector("#div-user-card").style.display = "none";
  document.querySelector("#span-gender-icon").style.display = "none";
  await callApi();
}
reload();
