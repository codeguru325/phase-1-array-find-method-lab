const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  function superbowlWin(record) {
    const winnings = record.find(function (element) {
      return element.result === "W";
    });
  
    if (winnings) {
      return winnings.year
    } else {
      return undefined
    }
  }
  
 

