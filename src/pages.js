module.exports = {
  index(request, response) {
    const city = request.query.city;
    return response.render("index", { city });
  },
  orphanage(request, response) {
    return response.render("orphanage");
  },
  orphanages(request, response) {
    return response.render("orphanages");
  },
  createOrphanage(request, response) {
    return response.render("create-orphanage");
  },
};
