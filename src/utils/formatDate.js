export function getFormattedDate(timeStamp) {
    const date = new Date(timeStamp);
    return date.toLocaleDateString("en-GB");
  }