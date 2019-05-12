/**
 * Created by dinanjanag on 5/11/19.
 */

const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

const AUTH = {
  base: "http://localhost:8080/auth",
  endpoints: {
    login: {path: "/login", method: [HTTP_METHODS.POST] } }
};

const USER = {
  base: "localhost:8080/auth",
  context: "/users",
  endpoints: {
    users: {path: "", method: [HTTP_METHODS.POST, HTTP_METHODS.PUT]},
    state: {path: "/state?active=:id", method: [HTTP_METHODS.GET]},
    activate: {path: "/activate" , method: [HTTP_METHODS.PUT]},
    admin: {path: "/admin/:id", method: [HTTP_METHODS.POST]}
  }
};

const ROLE = {
  base: "localhost:8080/auth",
  context: "/roles",
  endpoints: {
    roles: { path: "", method: [HTTP_METHODS.GET, HTTP_METHODS.POST] }
  }
};

const PAGE = {
  base: "localhost:8080/auth",
  context: "/pages",
  endpoints: {
    pages: { path: "", method: [HTTP_METHODS.GET, HTTP_METHODS.POST] },
    delete: { path: "/:id", method: [HTTP_METHODS.DELETE] }
  }
};

const ENDPOINTS = {
  AUTH,
  USER,
  ROLE,
  PAGE
};

module.exports = {
  ENDPOINTS, HTTP_METHODS
};