// fetch(
//   'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
// )
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.urls.regular);

//     document.body.style.backgroundImage = `url(${data.urls.regular})`;
//     document.getElementById('author-name').innerText = `By: ${data.user.name}`;
//   })
//   .catch(() => {
//     document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1502790671504-542ad42d5189?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjA4MDU4MDd8&ixlib=rb-4.1.0&q=80&w=1080)`;
//   });

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  // ?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true
  // "https://httpstat.us/200"
  .then((res) => res.json())
  .then((data) => {
    throw Error('XXX this is an Error');
    console.log(data);
  })
  .catch((err) => console.error('XXX The data is unavailable', err));

// fetch('https://httpstat.us/200')
//   .then((res) => {
//     console.log(res.ok);
//     console.log(res.status);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.error(err));
