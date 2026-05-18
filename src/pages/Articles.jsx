export default function Articles() {
  return (
    <div className="p-10 text-5xl font-bold">
      Articles Page
    </div>
  );
}

import { useEffect, useState } from "react";
import { getArticles } from "../services/strapi";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold mb-10">
        Articles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-zinc-800 p-6 rounded-xl"
          >
            <h2 className="text-2xl font-bold">
              {article.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}