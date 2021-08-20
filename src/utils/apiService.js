const apiUrl = 'https://pixabay.com/api/';
const apiKey = '22632103-559b096d748294a4f3f26d1f6';
const restApiQuery = '&image_type=photo&orientation=horizontal&per_page=12';

// function fetchArticles(name, page) {
//   const url = `${apiUrl}?q=${name}&page=${page}&key=${apiKey}${restApiQuery}`;

//   return fetch(url).then(r => {
//     if (r.ok) {
//       return r.json();
//     }

//     return Promise.reject(new Error(`Nothing matches found. ${name}`));
//   });
// }

// const api = {
//   fetchArticles,
// };

const api = {
  searchQuery: '',
  page: 1,

  async fetchArticles() {
    const url = `${apiUrl}?q=${this.searchQuery}&page=${this.page}&key=${apiKey}${restApiQuery}`;

    const response = await fetch(url);
    const data = await response.json();
    if (!data.totalHits) {
      return Promise.reject(
        `On your query "${this.searchQuery}" nothing matches found. `,
      );
    }
    this.incrementPage();
    return data;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },
};

export default api;
