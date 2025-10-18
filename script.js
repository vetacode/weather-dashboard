fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.urls.regular);

    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById('author-name').innerText = `By: ${data.user.name}`;
    // document.getElementById(
    //   'author-img'
    // ).innerHTML = `<img src=${data.profile_image.large})>`;
  })
  .catch(() => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1502790671504-542ad42d5189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjA4MDU4MDd8&ixlib=rb-4.1.0&q=80&w=1080)`;
  });

fetch(
  'https://api.coingecko.com/api/v3/simple/price?ids=BTC%2C%20ETH%2C%20DOGE%2C%20QNT&vs_currencies=USDT&include_market_cap=false&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false&precision=2'
)
  .then((res) => res.json())
  .then((data) => console.log(data));
