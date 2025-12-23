const productiveSites = ["github.com", "stackoverflow.com"];
const unproductiveSites = ["facebook.com", "youtube.com"];

chrome.storage.local.get({data: {}}, (result) => {
  const data = result.data;
  const list = document.getElementById("list");
  
  for (const url in data) {
    const li = document.createElement("li");
    const minutes = Math.floor(data[url] / 60000);
    li.textContent = `${url}: ${minutes} min`;

    if (productiveSites.some(site => url.includes(site))) {
      li.classList.add("productive");
    } else if (unproductiveSites.some(site => url.includes(site))) {
      li.classList.add("unproductive");
    }

    list.appendChild(li);
  }
});
