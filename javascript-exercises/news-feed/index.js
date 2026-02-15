console.log("=== News Feed Starting ===");

// Get HTML elements
const loadingDiv = document.getElementById('loading');
const newsContainer = document.getElementById('news-container');

// Function to fetch news from local JSON file
async function fetchNews() {
  console.log("\n=== Fetching News ===");
  console.log("Loading feed.json...");

  try {
    // Fetch the JSON file
    const response = await fetch('feed.json');
    console.log("Response received:", response);
    console.log("Status:", response.status, response.statusText);

    // Parse JSON
    const data = await response.json();
    console.log("JSON parsed successfully");
    console.log("Articles found:", data.articles.length);
    console.log("Data:", data);

    return data.articles;

  } catch (error) {
    console.error("❌ Error fetching news:", error);
    loadingDiv.textContent = "Error loading news. Check console for details.";
    return [];
  }
}

// Function to create an article element
function createArticleElement(article) {
  console.log("Creating element for:", article.title);

  // Create article container
  const articleDiv = document.createElement('div');
  articleDiv.className = 'news-article';

  // Create title
  const title = document.createElement('h2');
  title.textContent = article.title;

  // Create meta info
  const meta = document.createElement('div');
  meta.className = 'news-meta';
  meta.textContent = `${article.author} • ${article.date}`;

  // Create description
  const description = document.createElement('p');
  description.textContent = article.description;

  // Create read more link
  const link = document.createElement('a');
  link.href = article.url;
  link.textContent = 'Read more →';
  link.target = '_blank';

  // Assemble the article
  articleDiv.appendChild(title);
  articleDiv.appendChild(meta);
  articleDiv.appendChild(description);
  articleDiv.appendChild(link);

  return articleDiv;
}

// Function to display articles
function displayArticles(articles) {
  console.log("\n=== Displaying Articles ===");
  console.log("Number of articles:", articles.length);

  // Hide loading message
  loadingDiv.style.display = 'none';

  // Clear container
  newsContainer.innerHTML = '';

  // Create and add each article
  articles.forEach((article, index) => {
    console.log(`Adding article ${index + 1}:`, article.title);
    const articleElement = createArticleElement(article);
    newsContainer.appendChild(articleElement);
  });

  console.log("✅ All articles displayed");
}

// Main function to initialize the news feed
// Note: Using async/await for cleaner asynchronous code
async function initNewsFeed() {
  console.log("Initializing news feed...");

  // Fetch articles
  const articles = await fetchNews();

  // Display articles
  if (articles.length > 0) {
    displayArticles(articles);
  }
}

// Start the app
initNewsFeed();

// YOUR TURN:
// 1. Add more articles to feed.json
// 2. Add a search/filter feature
// 3. Add category tags to articles
// 4. BONUS: Fetch from a real news API (requires API key)