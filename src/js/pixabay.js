import axios from 'axios';

const ADDRES_API = 'https://pixabay.com/api/';
const KEY_API = '42699555-a78da0bc423c0d9818d6fae0b';

export async function creatingRequestPhoto(question, page = 1, perPage = 15) {
  const { data } = await axios(`${ADDRES_API}`, {
    params: {
      key: KEY_API,
      q: question,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });

  return data;
}
