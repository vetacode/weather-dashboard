fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById('author-name').innerText = `By: ${data.user.name}`;
    document.getElementById(
      'author-img'
    ).innerHTML = `<img src=${data.profile_image.large})>`;
  });

/**
 * Challenge part 2: Display the image's author
 *
 * With the data you've already fetched, display the name of the
 * image author on the page. They show up as the "user" in the data
 * returned from the API.
 *
 * Don't worry about positioning the author in the lower-left yet.
 */
