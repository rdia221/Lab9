
const apiKey = "c453bc3fcc5fd41b6287fb1093a9409d";

const newsContainer = document.getElementById("news-container");

fetch(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&max=10&apikey=${apiKey}`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch news");
        }
        return response.json();
    })
    .then(data => {
        newsContainer.innerHTML = "";

        data.articles.forEach(article => {
            const news = document.createElement("div");

            news.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description || "No description available."}</p>
                <a href="${article.url}" target="_blank">
                    Read More
                </a>
                <hr>
            `;

            newsContainer.appendChild(news);
        });
    })
    .catch(error => {
        newsContainer.innerHTML = "Error loading news.";
        console.error(error);
    });
