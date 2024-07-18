const axios = require("axios");
const fs = require("fs"); // Assuming fs is available in your environment
const path = require("path");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const sitemap = async () => {
  const storeId = process.env.REACT_APP_STORE_ID;
  const appUrl = process.env.REACT_APP_URL;

  // Product Routes
  const response = await axios.post(
    "https://rewardsplus.in/api/store/getAllProduct",
    {
      store_id: storeId,
    }
  );

  const products = response?.data?.payload_getAllProducts;

  const productUrls = products?.map(
    (product) => `/product/${product.name_url}`
  );

  // Website routes
  const app = fs.readFileSync(path.join("./src/routes/PublicRoutes.js"), "utf8");
  const routes = app.match(/<Route path=".*" element={.*} \/>/g);

  const urls = routes.map((route) => {
    const url = route.match(/path="(.*)"/)[1];
    return url;
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls, ...productUrls]
  .map(
    (url) => `
<url>
<loc>${appUrl}${url}</loc>
<changefreq>weekly</changefreq>
<priority>0.8</priority>
<lastmod>${new Date().toISOString()}</lastmod>
</url>
`
  )
  .join("\n")}
</urlset>`;
  fs.writeFileSync(path.join("./public/sitemap.xml"), sitemap);
};

sitemap();
