module.exports = {
  type: "content-api",
  routes: [
    {
      method: "POST",
      path: "/send",
      handler: "sendController.index",
      config: {
        policies: [],
      },
    },
  ],
};
