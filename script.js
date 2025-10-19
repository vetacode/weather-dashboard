try {
  const res = await fetch(
    'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
  );

  const data = await res.json();
  console.log(data);
  document.body.style.backgroundImage = `url(${data.urls.full})`;
  document.getElementById(
    'author-name'
  ).textContent = `Image By: ${data.user.name}`;
} catch (err) {
  document.body.style.backgroundImage = `url(https://plus.unsplash.com/premium_photo-1682310096066-20c267e20605?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2112)`;
  document.getElementById(
    'author-name'
  ).textContent = `Failed to Load the Image, Please Refresh the Page!`;
}

try {
  const res = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
  if (!res.ok) {
    document.body.style.backgroundImage = `url(https://plus.unsplash.com/premium_photo-1682310093719-443b6fe140e8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2112)`;
    document.getElementById(
      'author-name'
    ).textContent = `Failed to Load Crypto Information, Please Reload the Page!`;
    throw Error('XXX this is an Error');
  }

  const data = await res.json();
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
} catch (err) {
  console.error('XXX The data is unavailable', err);
}

fetch('https://api.quotable.io/quotes/random')
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].content);

    document.getElementById(
      'quotes-content'
    ).textContent = `"${data[0].content}"`;
    document.getElementById(
      'quotes-author'
    ).textContent = `- ${data[0].author} -`;
  });

function getCurrentTime() {
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
<p>${now.toLocaleTimeString('en-US', { timeStyle: 'medium' })}
</p>`;
}

setInterval(getCurrentTime, 1000);

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

// navigator.geolocation.getCurrentPosition((position) => {
//   console.log(position);
// });

navigator.geolocation.getCurrentPosition(async (position) => {
  const res = await fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  );
  if (!res.ok) {
    throw Error('Weather data is unavailable');
  }
  const data = await res.json();
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  document.getElementById('weather').innerHTML = `
  <img src=${iconUrl} >
  <p>${Math.round(data.main.temp)}℃</>
  `;
  document.getElementById('city').innerHTML = `
  <p>${data.name}</p>            
  `;

  // .catch((err) => console.error('There is something wrong', err));
});

// navigator.geolocation.getCurrentPosition((position) => {
//   fetch(
//     `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
//   )
//     .then((res) => {
//       if (!res.ok) {
//         throw Error('Weather data is unavailable');
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

//       console.log(iconUrl);

//       document.getElementById('weather').innerHTML = `
//       <img src=${iconUrl} >
//       <p>${Math.round(data.main.temp)}℃</>
//       `;
//       document.getElementById('city').innerHTML = `
//       <p>${data.name}</p>
//       `;
//     })
//     .catch((err) => console.error('There is something wrong', err));
// });
