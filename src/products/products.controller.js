const productsService = require("./products.service");

function read(req, res, next) {
  const { product: data } = res.locals;
  res.json({ data });
}


/*
function list(req, res, next) {
  productsService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}
*/
async function list(req, res, next) {
  const data = await productsService.list();
  res.json({ data });
}


/*
function productExists(req, res, next) {
  productsService
    .read(req.params.productId)
    .then((product) => {
      if (product) {
        res.locals.product = product;
        return next();
      }
      next({ status: 404, message: `Product cannot be found.` });
    })
    .catch(next);
}
*/
async function productExists(req, res, next) {
  const product = await productsService.read(req.params.productId);
  if (product) {
    res.locals.product = product;
    return next();
  }
  next({ status: 404, message: `Product cannot be found.` });
}



module.exports = {
  read: [productExists, read],
  list: [list],
};
