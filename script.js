fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=asdgsgsrg'
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
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1596825113842-9c559495f65b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjA4MDU1MDJ8&ixlib=rb-4.1.0&q=80&w=1080)`;
  });
