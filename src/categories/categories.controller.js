const categoriesService = require("./categories.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");


/*
function list(req, res, next) {
  categoriesService
    .list()
    .then((data) => res.json({ data }))
    .catch(next);
}
*/
async function list(req, res) {
  const data = await categoriesService.list();
  res.json({ data });
}










module.exports = {
  list: asyncErrorBoundary(list),
}