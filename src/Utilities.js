export function formatDate(timestamp) {
  // formatting here
  let date = new Date(timestamp);
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dayArray[date.getDay()];
  return `${day}, ${formatTime(timestamp)}`;
  // return it
}

export function formatTime(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
