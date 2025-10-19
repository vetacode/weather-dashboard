fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data.urls.regular);

    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById('author-name').innerText = `By: ${data.user.name}`;
  })
  .catch(() => {
    document.body.style.backgroundImage = `url(https://plus.unsplash.com/premium_photo-1682310096066-20c267e20605?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2112)`;
  });

fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
  .then((res) => {
    if (!res.ok) {
      document.body.style.backgroundImage = `url(https://media.istockphoto.com/id/670634464/id/foto/closeup-pengusaha-wanita-tangan-memegang-tanda-kartu-putih-dengan-di-bawah-konstruksi-pesan-teks.jpg?s=2048x2048&w=is&k=20&c=jfENiKwbPUi8HKPMAcsVGEuNUZ3LKgOk-Yh8E5v8sk8=)`;
      throw Error('XXX this is an Error');
    }
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById(
      'crypto-name'
    ).innerHTML = `<img src=${data.image.small} alt=${data.name}>
    <span>${data.name}</span>
    
    `;

    document.getElementById('crypto-price').innerHTML = `
    <p>🎯: $${data.market_data.current_price.usd.toLocaleString('en-US')}</p>
    <p>👆: $${data.market_data.high_24h.usd.toLocaleString('en-US')}</p>
    <p>👇: $${data.market_data.low_24h.usd.toLocaleString('en-US')}</p>
    `;
  })
  .catch((err) => console.error('XXX The data is unavailable', err));

const now = new Date();
const dateFormat = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

// const timeFormat = {
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
// };

document.getElementById('time').innerHTML = `
<p>${now.toLocaleDateString('en-US', dateFormat)}
</p>
<p>${now.toLocaleTimeString('en-US', { timeStyle: 'short' })}
</p>

`;

// ?tickers=true&market_data=true&community_data=true&developer_data=true&sparkline=true
// "https://httpstat.us/200"

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
