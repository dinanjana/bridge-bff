/**
 * Created by dinanjanag on 5/11/19.
 */

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const HOST = 'localhost:8080';

const AUTH = {
  base: `${HOST}/auth`,
  endpoints: {
    login: {path: "/login", method: [HTTP_METHODS.POST] } }
};

const USER = {
  base: `${HOST}/auth`,
  context: "/users",
  endpoints: {
    users: {path: "", method: [HTTP_METHODS.POST, HTTP_METHODS.PUT]},
    state: {path: "/state?active=:id", method: [HTTP_METHODS.GET]},
    activate: {path: "/activate" , method: [HTTP_METHODS.PUT]},
    admin: {path: "/admin/:id", method: [HTTP_METHODS.POST]}
  }
};

const ROLE = {
  base: `${HOST}/auth`,
  context: "/roles",
  endpoints: {
    roles: { path: "", method: [HTTP_METHODS.GET, HTTP_METHODS.POST] }
  }
};

const PAGE = {
  base: `${HOST}/auth`,
  context: "/pages",
  endpoints: {
    pages: { path: "", method: [HTTP_METHODS.GET, HTTP_METHODS.POST] },
    delete: { path: "/:id", method: [HTTP_METHODS.DELETE] }
  }
};

const HSCODE = {
  base: "http://localhost:3010",
  context: "/hs"
};

const REGAPPROVAL = {
  base: "http://localhost:3010",
  context: "/regapproval"
};

const SUPPLIER = {
  base: "http://localhost:3020",
  context: "/supplier"
};

const INCOTERM = {
  base: "http://localhost:3010",
  context: "/incoterm"
};
const BANK = {
  base: "http://localhost:3020",
  context: "/bank"
};

const PAYMENT_TERM = {
  base: "http://localhost:3020",
  context: "/paymentterm"
};

const TRADE_AGREEMENT = {
  base: "http://localhost:3010",
  context: "/tradeagreement"
};


const ENDPOINTS = {
  AUTH,
  USER,
  ROLE,
  PAGE,
  HSCODE,
  REGAPPROVAL,
  SUPPLIER,
  INCOTERM,
  BANK,
  PAYMENT_TERM,
  TRADE_AGREEMENT
};

const OPS = {
  read: 'read',
  write: 'write',
  edit: 'edit',
  upload: 'upload',
};

module.exports = {
  ENDPOINTS, HTTP_METHODS, OPS
};