class Util {
  
  validGuess(guess: any): Boolean {
    const re = /^[0-9]{1,2}$/;

    if (!re.test(guess) || guess > 15) {
        return false;
    }

    if (guess < 0 ) {
        return false;
    }

    return true;
  }

  todaysDate() {
    const date = new Date();
    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()];
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'November', 'Dec'];
    const monthsInString = months[month];

    const fullDate = `${day} / ${monthsInString} / ${year}`;

    return fullDate;
}
}

export const util = new Util();