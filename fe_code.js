const express = require('express');
const app = express();
const port = 3000;

const products = [
  { id: 1, name: "T-Shirt", price: 25 },
  { id: 2, name: "Jeans", price: 60 },
  { id: 3, name: "Shoes", price: 80 }
];

app.get('/', (req, res) => {
  let html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Shopping Site</title>
      <style>
        body { font-family: sans-serif; background: #f4f4f4; margin: 0; padding: 0; }
        header, footer { background: #333; color: white; padding: 1rem; text-align: center; }
        .products { display: flex; gap: 20px; padding: 20px; justify-content: center; flex-wrap: wrap; }
        .product-card { background: white; border: 1px solid #ccc; padding: 15px; width: 200px; text-align: center; }
        button { background: #28a745; color: white; border: none; padding: 10px 15px; cursor: pointer; }
      </style>
    </head>
    <body>
      <header><h1>Simple Shopping Site</h1></header>
      <main>
        <h2 style="text-align:center;">Products</h2>
        <div class="products">
  `;

  products.forEach(product => {
    html += `
      <div class="product-card">
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });

  html += `
        </div>
      </main>
      <footer><p>&copy; 2025 Shopping Inc.</p></footer>
    </body>
    </html>
  `;

  res.send(html);
});

app.listen(port, () => {
  console.log(`Shopping site running at http://localhost:${port}`);
});
