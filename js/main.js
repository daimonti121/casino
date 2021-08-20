// Immediately invoked function expression
// to not pollute the global scope
(function() {
    const wheel = document.querySelector('.abacasino__colors');
    const startButton = document.querySelector('.abacasino__button');
    const display = document.querySelector('.display');
    
    let deg = 0;
    let zoneSize = 45; // deg
  
    // Counter clockwise
    const symbolSegments = {
      1: "TRY AGAIN",
      2: "75% UP TO 100",
      3: "150FS",
      4: "50% UP TO 100",
      5: "NO WIN",
      6: "75%",
      7: "100% UP TO 200",
      8: "20FS",
    }
  
    const handleWin = (actualDeg) => {
      const winningSymbolNr = Math.ceil(actualDeg / zoneSize);
      // display.innerHTML = symbolSegments[winningSymbolNr];
      alert(symbolSegments[winningSymbolNr]);
    }
  
    startButton.addEventListener('click', () => {
      // Reset display
      display.innerHTML = "-";
      // Disable button during spin
      startButton.style.pointerEvents = 'none';
      // Calculate a new rotation between 5000 and 10 000
      deg = Math.floor(5000 + Math.random() * 5000);
      // Set the transition on the wheel
      wheel.style.transition = 'all 10s ease-out';
      // Rotate the wheel
      wheel.style.transform = `rotate(${deg}deg)`;
      // Apply the blur
      wheel.classList.add('blur');
    });
  
    wheel.addEventListener('transitionend', () => {
      // Remove blur
      wheel.classList.remove('blur');
      // Enable button when spin is over
      startButton.style.pointerEvents = 'auto';
      // Need to set transition to none as we want to rotate instantly
      wheel.style.transition = 'none';
      // Calculate degree on a 360 degree basis to get the "natural" real rotation
      // Important because we want to start the next spin from that one
      // Use modulus to get the rest value
      const actualDeg = deg % 360;
      // Set the real rotation instantly without animation
      wheel.style.transform = `rotate(${actualDeg}deg)`;
      // Calculate and display the winning symbol
      handleWin(actualDeg);
    });
  })();
  