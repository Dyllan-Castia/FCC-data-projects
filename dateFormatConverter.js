const currentDate = new Date();

const currentDateFormat = `Current Date and Time: ${currentDate}`;

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return `Formatted Date (MM/DD/YYYY): ${month}/${day}/${year}`
}
console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric"
  }
  const formatedDate = date.toLocaleDateString("en-US", options);

  return `Formatted Date (Month Day, Year): ${formatedDate}`
}
console.log(formatDateLong(currentDate));
