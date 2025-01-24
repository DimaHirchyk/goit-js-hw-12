export function creatGalleryCard(arr) {
  return arr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        ` <li class="gallery-iteam">
            <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-img" src="${webformatURL}" alt="${tags}" width="360" loading="lazy"></img></a>
              <ul class="inform-list">
                <li class="inform-iteam">
                  <h3 class="inform-title">Likes:</h3>
                  <p class="inform-par">${likes}</p>
                </li>
                <li class="inform-iteam">
                  <h3 class="inform-title">Views:</h3>
                  <p class="inform-par">${views}</p>
                </li>
                <li class="inform-iteam">
                  <h3 class="inform-title">Comments:</h3>
                  <p class="inform-par">${comments}</p>
                </li>
                <li class="inform-iteam">
                  <h3 class="inform-title">Downloads:</h3>
                  <p class="inform-par">${downloads}</p>
                </li>
              </ul>
          </li>`
    )
    .join('');
}
