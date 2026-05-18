const API_URL = import.meta.env.VITE_STRAPI_URL;

export async function getArticles() {
  const response = await fetch(
    `${API_URL}/api/articles?populate=*`
  );

  const data = await response.json();

  return data.data;
}