function currentdate() {
    return new Date();
}
  
function formatdate(date) {
    return date.toLocaleDateString('fi-FI', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
}
  
module.exports = { currentdate, formatdate };