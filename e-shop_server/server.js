const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('Server started on 3000 port!');
});

function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(`eshopData${filePath}`, 'utf8', (err, data) => {
      if (err) {
        reject('{"result": 0}');
      } else {
        resolve(data);
      }
    });
  });
}

function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(`eshopData${filePath}`, JSON.stringify(data), err => {
        if (err) {
          console.log('Ошибка');
          reject(`{"Ошибка": ${err}`)
        } else {
          console.log('ОК');
          resolve(JSON.stringify(data));
        }
      });
  });
}

function writeStats({action: action, product: product}) {
  const currentTime = new Date();
  let stat = {
    action: action,
    productName: product.title,
    time: currentTime.toISOString(),
    localTime: currentTime.toLocaleString()
  };
  console.log(stat);
  readFile('/stats.json')
    .then(data => {
      const statsList = JSON.parse(data);
      statsList.push(stat);
      return statsList;
    })
    .then(data => {
      return writeFile('/stats.json', data);
    })
    .catch(err => console.log(`Ошибка!!! - ${err}`));
}

/**
 * GET-запрос на получение товаров каталога
 */
app.get('/catalogData', (req, res) => {
  readFile('/catalogData.json')
    .then(data => res.send(data))
    .catch(err => res.send(`"result" = 0, "error" = ${JSON.stringify(err)}`));
});

/**
 * GET-запрос на получение товаров корзины
 */
app.get('/cartData', (req, res) => {
  readFile('/cartData.json')
    .then(data => res.send(data))
    .catch(err => res.send(`"result" = 0, "error" = ${JSON.stringify(err)}`));
});


/**
 * POST-запрос на добавление товаров в корзину
 */
app.post('/addToCart', (req, res) => {
  writeStats({action: 'add product', product: req.body});
  readFile('/cartData.json')
    .then(data => {
      const cart = JSON.parse(data);
      const item = req.body;

      let foundProduct = cart.find(element => element.id === item.id);
      if (foundProduct === undefined) {
        let cartProduct = Object.assign({quantity: 1}, item);
        cart.push(cartProduct);
      } else {
        foundProduct.quantity++;
      }
      return cart;
    })
    .then(cartData => {
      return writeFile('/cartData.json', cartData);
    })
    .then(data => res.send(data));
});

/**
 * POST-запрос на уменьшение количества товара
 */
app.post('/reduceProduct', (req, res) => {
  writeStats({action: 'reduce product', product: req.body});
  readFile('/cartData.json')
    .then(data => {
      const cart = JSON.parse(data);
      const item = req.body;

      let foundProduct = cart.find(element => element.id === item.id);
      foundProduct.quantity -= 1;

      return cart;
    })
    .then(data => {
      return writeFile('/cartData.json', data);
    })
    .then(data => res.send(data))
});

/**
 * POST-запрос на удаление товара
 */
app.post('/deleteProduct', (req, res) => {
  writeStats({action: 'delete product', product: req.body});
  readFile('/cartData.json')
    .then(data => {
      let cart = JSON.parse(data);
      const item = req.body;

      return  cart.filter(element => element.id !== item.id);
    })
    .then(data => {
      return writeFile('/cartData.json', data);
    })
    .then(data => res.send(data))
});



