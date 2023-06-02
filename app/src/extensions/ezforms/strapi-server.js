"use strict";

const services = require("./services");
const routes = require("./routes");
const controllers = require("./controllers");

module.exports = (plugin) => {
  plugin.services = {
    ...plugin.services,
    ...services,
  };

  plugin.controllers = {
    ...plugin.controllers,
    ...controllers,
  };

  plugin.routes = {
    ...plugin.routes,
    ...routes,
  };

  return plugin;
};
