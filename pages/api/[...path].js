const { createMysqlPool, handleApi } = require("../../lib/api");

let pool;

function getPool() {
  if (!pool) pool = createMysqlPool();
  return pool;
}

module.exports = function apiHandler(req, res) {
  const pathname = `/api/${(req.query.path || []).join("/")}`;
  return handleApi(req, res, pathname, getPool());
};

module.exports.config = {
  api: {
    bodyParser: false
  }
};
