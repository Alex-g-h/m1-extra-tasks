const RANGE_FROM = 1016;
const RANGE_TO = 1937;

const ticketNumber = getWinnerTicket();
if (ticketNumber < RANGE_FROM)
  console.log('No winner ticket');
else  
  console.log(ticketNumber);


/**
 * Search winner ticket 
 * @returns Winner ticket number or '-1' otherwise
 */
function getWinnerTicket() {
  let ticketNmb = -1;  
  for (let i = RANGE_TO; i >= RANGE_FROM; i--) {
    let isFound = true;
    isFound &&= (i % 3 == 0);
    isFound &&= (i % 7 == 0);
    isFound &&= (i % 5 != 0);
    isFound &&= (i % 2 != 0);

    if (isFound) {
      ticketNmb = i;
      break;
    }
  }

  return ticketNmb;
}