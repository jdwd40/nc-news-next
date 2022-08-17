export function getFormattedDate(timeStamp) {
    const date = new Date(timeStamp);
    console.log("from formattedDate: ",date);
    return date.toLocaleDateString("en-US");
  
  }