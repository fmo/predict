class Util {
  
  validGuess(guess: any) {
    const re = /^[0-9]{1,2}$/;

    if (!re.test(guess) || guess > 15) {
        return false;
    }

    if (guess < 0 ) {
        return false;
    }

    return true;
  }
}

export const util = new Util();