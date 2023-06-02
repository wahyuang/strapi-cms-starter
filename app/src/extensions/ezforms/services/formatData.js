module.exports = ({ strapi }) => ({
  formatData(data) {
    let message = "";
    //Loop through data and construct message from data object
    for (let key in data) {
      if (typeof data[key] === "object") {
        message += `<strong>${key}</strong>: ${JSON.stringify(
          data[key],
          null,
          2
        )}<br />`;
      } else {
        message += `<strong>${key}</strong>: ${data[key]}<br />`;
      }
    }
    return message;
  },
});
