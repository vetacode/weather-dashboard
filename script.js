fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    throw Error('I am an error!');

    // document.body.style.backgroundImage = `url(${data.urls.regular})`;
    // document.getElementById('author-name').innerText = `By: ${data.user.name}`;
    // document.getElementById(
    //   'author-img'
    // ).innerHTML = `<img src=${data.profile_image.large})>`;
  })
  .catch((err) => console.error('something went wrong!!', err));

/**
 * Challenge: get a URL for a default background image and set it here
 *
 * 1. Change the query in the URL above back to something real
 * 2. Log the image url to the console (replacing console.log(data) above)
 * 3. Use that URL as the "default" background image to be used if
 *    the promise is ever rejected.
 */
