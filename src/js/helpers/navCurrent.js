module.exports = function(link, currentPage) {
  if (link === currentPage) {
    return "current";
  }
};
