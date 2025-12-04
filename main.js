// Game state
let gameState = {
    numPlayers: 2,
    playerNames: [],
    playerScores: [],
    round: 1,
    currentProblem: null,
    gameActive: false,
    problemSolved: false,
    winner: null,
    countdownTimer: null
};

// Math competition level definite integrals - 67 problems per category
const problems = {
    easy: [
        { integral: '∫[0 to 1] (x³ + 2x² - 5x + 3) dx', answer: '11/12' },
        { integral: '∫[0 to 1] (3x⁴ - 4x² + 7) dx', answer: '26/5' },
        { integral: '∫[0 to 1] x(2x² - 3x + 1) dx', answer: '1/20' },
        { integral: '∫[0 to 2] (x² + 1)(x - 2) dx', answer: '-8/3' },
        { integral: '∫[1 to 2] (5x³ - 3x + 2)/x dx', answer: '25/3 + 2ln(2)' },
        { integral: '∫[0 to 3] (x² - 4)/(x - 2) dx', answer: '9/2' },
        { integral: '∫[0 to 1] √x(x + 1) dx', answer: '16/15' },
        { integral: '∫[0 to 2] (x + 1)² dx', answer: '26/3' },
        { integral: '∫[0 to 1] (2x - 1)³ dx', answer: '0' },
        { integral: '∫[0 to 1] x√(x² + 1) dx', answer: '(2√2 - 1)/3' },
        { integral: '∫[0 to 1] 8x³/(1 + x⁸) dx', answer: 'ln(2)' },
        { integral: '∫[0 to 1] x² dx', answer: '1/3' },
        { integral: '∫[0 to 1] x⁴ dx', answer: '1/5' },
        { integral: '∫[0 to 2] x dx', answer: '2' },
        { integral: '∫[1 to 3] x² dx', answer: '26/3' },
        { integral: '∫[0 to 1] (x + 1) dx', answer: '3/2' },
        { integral: '∫[0 to 2] (2x + 3) dx', answer: '10' },
        { integral: '∫[1 to 2] x³ dx', answer: '15/4' },
        { integral: '∫[0 to 1] (x² + x) dx', answer: '5/6' },
        { integral: '∫[0 to 1] (3x² + 2x) dx', answer: '2' },
        { integral: '∫[0 to 1] (x - 1)² dx', answer: '1/3' },
        { integral: '∫[0 to 2] (x² - x) dx', answer: '2/3' },
        { integral: '∫[1 to 2] (x² + 2x) dx', answer: '19/3' },
        { integral: '∫[0 to 1] (4x³ - 2x) dx', answer: '0' },
        { integral: '∫[0 to 1] (x⁵ + x³) dx', answer: '7/12' },
        { integral: '∫[0 to 2] (x² + 3x + 2) dx', answer: '32/3' },
        { integral: '∫[1 to 2] (x³ - x) dx', answer: '9/4' },
        { integral: '∫[0 to 1] (2x⁴ + 3x²) dx', answer: '11/5' },
        { integral: '∫[0 to 1] (x - x²) dx', answer: '1/6' },
        { integral: '∫[0 to 2] (3x² - 2x + 1) dx', answer: '7' },
        { integral: '∫[1 to 3] (x² + x + 1) dx', answer: '38/3' },
        { integral: '∫[0 to 1] (x⁶ - x⁴) dx', answer: '2/35' },
        { integral: '∫[0 to 2] (2x³ + x) dx', answer: '10' },
        { integral: '∫[1 to 2] (x⁴ + x²) dx', answer: '47/5' },
        { integral: '∫[0 to 1] (x² - 2x + 1) dx', answer: '1/3' },
        { integral: '∫[0 to 2] (x³ + 2x²) dx', answer: '32/3' },
        { integral: '∫[1 to 2] (3x² - x) dx', answer: '13/2' },
        { integral: '∫[0 to 1] (x⁵ + 2x³) dx', answer: '11/12' },
        { integral: '∫[0 to 2] (x² + 4x) dx', answer: '32/3' },
        { integral: '∫[1 to 3] (x³ - 2x) dx', answer: '18' },
        { integral: '∫[0 to 1] (4x⁴ - x²) dx', answer: '7/15' },
        { integral: '∫[0 to 2] (x³ + x² + x) dx', answer: '26/3' },
        { integral: '∫[1 to 2] (2x³ + 3x) dx', answer: '21/2' },
        { integral: '∫[0 to 1] (x⁴ - x² + x) dx', answer: '7/20' },
        { integral: '∫[0 to 2] (3x² + 2x + 1) dx', answer: '15' },
        { integral: '∫[1 to 3] (x² - x + 1) dx', answer: '20/3' },
        { integral: '∫[0 to 1] (x⁶ + x⁴ - x²) dx', answer: '17/105' },
        { integral: '∫[0 to 2] (2x⁴ + x²) dx', answer: '148/5' },
        { integral: '∫[1 to 2] (x⁵ - x³) dx', answer: '47/6' },
        { integral: '∫[0 to 1] (3x³ - 2x² + x) dx', answer: '5/12' },
        { integral: '∫[0 to 2] (x⁴ + 3x² + 2x) dx', answer: '212/5' },
        { integral: '∫[1 to 3] (2x³ - x²) dx', answer: '100/3' },
        { integral: '∫[0 to 1] (x⁵ + x³ - x) dx', answer: '1/4' },
        { integral: '∫[0 to 2] (4x³ + 2x²) dx', answer: '64/3' },
        { integral: '∫[1 to 2] (x⁴ + 2x² + x) dx', answer: '157/15' },
        { integral: '∫[0 to 1] (2x⁴ - x³ + x²) dx', answer: '19/60' },
        { integral: '∫[0 to 2] (x⁵ + x³) dx', answer: '104/3' },
        { integral: '∫[1 to 3] (3x² - 2x + 1) dx', answer: '20' },
        { integral: '∫[0 to 1] (x⁶ - x⁴ + x²) dx', answer: '13/105' },
        { integral: '∫[0 to 2] (2x⁴ + 3x² + x) dx', answer: '178/5' },
        { integral: '∫[1 to 2] (x³ + x² - x) dx', answer: '17/4' },
        { integral: '∫[0 to 1] (4x⁵ - 2x³ + x) dx', answer: '7/12' },
        { integral: '∫[0 to 2] (x⁴ + 4x² + 3x) dx', answer: '256/5' },
        { integral: '∫[1 to 3] (2x³ - x² + x) dx', answer: '104/3' },
        { integral: '∫[0 to 1] (x⁵ + 3x³ - 2x) dx', answer: '1/2' },
        { integral: '∫[0 to 2] (3x⁴ + x²) dx', answer: '212/5' },
        { integral: '∫[1 to 2] (x⁴ - x² + 2x) dx', answer: '47/5' },
        { integral: '∫[0 to 1] (2x⁶ - x⁴) dx', answer: '9/70' },
        { integral: '∫[0 to 2] (x⁵ + 2x³ + x) dx', answer: '104/3' },
        { integral: '∫[1 to 3] (x³ + 3x² - x) dx', answer: '68/3' }
    ],
    medium: [
        { integral: '∫[0 to 1] x·e²ˣ dx', answer: 'e²/4 - 1/4' },
        { integral: '∫[0 to π] x²·sin(x) dx', answer: 'π² - 4' },
        { integral: '∫[0 to π] eˣ·cos(x) dx', answer: '(e^π - 1)/2' },
        { integral: '∫[1 to e] x·ln(x²) dx', answer: 'e² - 1' },
        { integral: '∫[0 to 1] x²·e⁻ˣ dx', answer: '2 - 5/e' },
        { integral: '∫[0 to π] sin(x)·cos²(x) dx', answer: '1/3' },
        { integral: '∫[0 to π/4] x·sec²(x) dx', answer: 'π/4 - ln(√2)' },
        { integral: '∫[0 to 1] eˣ/(1 + eˣ) dx', answer: 'ln((1+e)/2)' },
        { integral: '∫[0 to 1] x·arctan(x) dx', answer: 'π/4 - 1/2' },
        { integral: '∫[0 to π/2] sin²(x)·cos(x) dx', answer: '1/3' },
        { integral: '∫[0 to 1] x·√(1 - x²) dx', answer: '1/3' },
        { integral: '∫[0 to π] eˣ·sin(2x) dx', answer: 'e^π/5 - 2/5' },
        { integral: '∫[0 to π] sin(2x)/(1 + 2sin²(x)) dx', answer: 'ln(3)/2' },
        { integral: '∫[0 to π] (2cos(x) - 2sin(x))/(2 + sin(2x)) dx', answer: 'ln(3)/2' },
        { integral: '∫[0 to 1] x¹²/(x² + 1) dx', answer: '1/11 - 1/9 + 1/7 - 1/5 + 1/3 - 1 + π/4' },
        { integral: '∫[0 to π/2] sin(x) dx', answer: '1' },
        { integral: '∫[0 to π/2] cos(x) dx', answer: '1' },
        { integral: '∫[0 to π] sin(x) dx', answer: '2' },
        { integral: '∫[0 to π/2] sin²(x) dx', answer: 'π/4' },
        { integral: '∫[0 to π/2] cos²(x) dx', answer: 'π/4' },
        { integral: '∫[0 to π] sin²(x) dx', answer: 'π/2' },
        { integral: '∫[0 to π] cos²(x) dx', answer: 'π/2' },
        { integral: '∫[0 to π/2] sin(x)cos(x) dx', answer: '1/2' },
        { integral: '∫[0 to π/4] sec²(x) dx', answer: '1' },
        { integral: '∫[0 to π/4] tan(x) dx', answer: 'ln(√2)' },
        { integral: '∫[0 to 1] eˣ dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] e²ˣ dx', answer: '(e² - 1)/2' },
        { integral: '∫[0 to 1] e⁻ˣ dx', answer: '1 - 1/e' },
        { integral: '∫[0 to 1] xeˣ dx', answer: '1' },
        { integral: '∫[0 to 1] x²eˣ dx', answer: 'e - 2' },
        { integral: '∫[1 to e] 1/x dx', answer: '1' },
        { integral: '∫[1 to e] ln(x) dx', answer: '1' },
        { integral: '∫[1 to e²] 1/x dx', answer: '2' },
        { integral: '∫[0 to 1] 1/(1+x²) dx', answer: 'π/4' },
        { integral: '∫[0 to 1] x/(1+x²) dx', answer: 'ln(2)/2' },
        { integral: '∫[0 to 1] 1/√(1-x²) dx', answer: 'π/2' },
        { integral: '∫[0 to 1] x/√(1-x²) dx', answer: '1' },
        { integral: '∫[0 to π/2] sin³(x) dx', answer: '2/3' },
        { integral: '∫[0 to π/2] cos³(x) dx', answer: '2/3' },
        { integral: '∫[0 to π] sin(x)cos(x) dx', answer: '0' },
        { integral: '∫[0 to π/2] sin(2x) dx', answer: '1' },
        { integral: '∫[0 to π/2] cos(2x) dx', answer: '0' },
        { integral: '∫[0 to π] sin(2x) dx', answer: '0' },
        { integral: '∫[0 to π] cos(2x) dx', answer: '0' },
        { integral: '∫[0 to 1] arctan(x) dx', answer: 'π/4 - ln(2)/2' },
        { integral: '∫[0 to 1] arcsin(x) dx', answer: 'π/2 - 1' },
        { integral: '∫[0 to 1] x·arctan(x) dx', answer: 'π/4 - 1/2' },
        { integral: '∫[0 to 1] x·arcsin(x) dx', answer: 'π/4 - 1/2' },
        { integral: '∫[0 to π/2] x·sin(x) dx', answer: '1' },
        { integral: '∫[0 to π/2] x·cos(x) dx', answer: 'π/2 - 1' },
        { integral: '∫[0 to π] x·sin(x) dx', answer: 'π' },
        { integral: '∫[0 to π] x·cos(x) dx', answer: '0' },
        { integral: '∫[0 to 1] x·e⁻ˣ dx', answer: '1 - 2/e' },
        { integral: '∫[0 to 1] x²·e⁻ˣ dx', answer: '2 - 5/e' },
        { integral: '∫[0 to 1] x³·e⁻ˣ dx', answer: '6 - 16/e' },
        { integral: '∫[0 to π/2] eˣ·sin(x) dx', answer: '(e^(π/2) + 1)/2' },
        { integral: '∫[0 to π/2] eˣ·cos(x) dx', answer: '(e^(π/2) - 1)/2' },
        { integral: '∫[0 to π] eˣ·sin(x) dx', answer: '(e^π + 1)/2' },
        { integral: '∫[0 to π] eˣ·cos(x) dx', answer: '(e^π - 1)/2' },
        { integral: '∫[0 to 1] x·ln(x) dx', answer: '-1/4' },
        { integral: '∫[1 to e] x·ln(x) dx', answer: '(e² + 1)/4' },
        { integral: '∫[1 to e] x²·ln(x) dx', answer: '(2e³ + 1)/9' },
        { integral: '∫[0 to 1] x·ln(1+x) dx', answer: '1/4' },
        { integral: '∫[0 to 1] x²·ln(1+x) dx', answer: '5/36' },
        { integral: '∫[0 to π/2] sin⁴(x) dx', answer: '3π/16' },
        { integral: '∫[0 to π/2] cos⁴(x) dx', answer: '3π/16' },
        { integral: '∫[0 to π] sin⁴(x) dx', answer: '3π/8' },
        { integral: '∫[0 to π] cos⁴(x) dx', answer: '3π/8' },
        { integral: '∫[0 to π/2] sin(x)·cos³(x) dx', answer: '1/4' },
        { integral: '∫[0 to π/2] sin³(x)·cos(x) dx', answer: '1/4' },
        { integral: '∫[0 to 1] 1/(1+x) dx', answer: 'ln(2)' },
        { integral: '∫[0 to 1] 1/(1+x²)² dx', answer: 'π/8 + 1/4' },
        { integral: '∫[0 to 1] x/(1+x²)² dx', answer: '1/4' },
        { integral: '∫[0 to π/2] tan²(x) dx', answer: '∞' },
        { integral: '∫[0 to π/4] tan²(x) dx', answer: '1 - π/4' },
        { integral: '∫[0 to π/4] sec²(x) - 1 dx', answer: '1 - π/4' }
    ],
    hard: [
        { integral: '∫[0 to 1] x³·eˣ dx', answer: '6e - 6' },
        { integral: '∫[1 to e] x²·ln(x) dx', answer: '(2e³ + 1)/9' },
        { integral: '∫[0 to π] eˣ·sin(x)·cos(x) dx', answer: '(e^π - 1)/10' },
        { integral: '∫[0 to π] x·sin²(x) dx', answer: 'π²/4' },
        { integral: '∫[0 to π] x²·cos(x) dx', answer: '-2π' },
        { integral: '∫[1 to e] ln²(x) dx', answer: 'e - 2' },
        { integral: '∫[0 to π] x·eˣ·sin(x) dx', answer: 'e^π(π - 1)/2' },
        { integral: '∫[0 to π/2] sin³(x) dx', answer: '2/3' },
        { integral: '∫[0 to 1] x²·arctan(x) dx', answer: 'π/12 - 1/6 + ln(2)/6' },
        { integral: '∫[0 to π] eˣ·x²·sin(x) dx', answer: 'e^π((π² - 2) - 2π)/2' },
        { integral: '∫[1 to e] x·ln²(x) dx', answer: 'e²(2 - 2 + 1)/4 - 1/4' },
        { integral: '∫[0 to π/2] cos³(x)·sin(x) dx', answer: '1/4' },
        { integral: '∫[0 to 1] x·ln(x)² dx', answer: '2/27' },
        { integral: '∫[0 to π] x²·sin(x) dx', answer: 'π² - 4' },
        { integral: '∫[0 to π] x²·sin²(x) dx', answer: 'π³/6 - π/4' },
        { integral: '∫[0 to π] x·cos²(x) dx', answer: 'π²/4' },
        { integral: '∫[0 to π/2] x·sin²(x) dx', answer: 'π²/16' },
        { integral: '∫[0 to π/2] x·cos²(x) dx', answer: 'π²/16' },
        { integral: '∫[0 to π] x·sin³(x) dx', answer: '2π/3' },
        { integral: '∫[0 to π] x·cos³(x) dx', answer: '0' },
        { integral: '∫[0 to 1] x³·ln(x) dx', answer: '-1/16' },
        { integral: '∫[1 to e] x³·ln(x) dx', answer: '(3e⁴ + 1)/16' },
        { integral: '∫[0 to 1] x⁴·ln(x) dx', answer: '-1/25' },
        { integral: '∫[1 to e] x⁴·ln(x) dx', answer: '(4e⁵ + 1)/25' },
        { integral: '∫[0 to π] x·eˣ·cos(x) dx', answer: '(e^π(π - 1) + 1)/2' },
        { integral: '∫[0 to π] x²·eˣ·sin(x) dx', answer: 'e^π((π² - 2π) - 2)/2' },
        { integral: '∫[0 to π] x²·eˣ·cos(x) dx', answer: 'e^π((π² - 2) + 2π)/2 - 2' },
        { integral: '∫[0 to 1] x·arctan(x²) dx', answer: 'π/8 - 1/4' },
        { integral: '∫[0 to 1] x²·arctan(x) dx', answer: 'π/12 - 1/6 + ln(2)/6' },
        { integral: '∫[0 to 1] x³·arctan(x) dx', answer: 'π/16 - 1/12' },
        { integral: '∫[0 to π/2] x·sin²(x) dx', answer: 'π²/16' },
        { integral: '∫[0 to π/2] x·cos²(x) dx', answer: 'π²/16' },
        { integral: '∫[0 to π/2] x²·sin(x) dx', answer: 'π²/4 - 2' },
        { integral: '∫[0 to π/2] x²·cos(x) dx', answer: 'π²/4 - 2' },
        { integral: '∫[0 to π] x·sin(2x) dx', answer: '-π/2' },
        { integral: '∫[0 to π] x·cos(2x) dx', answer: '0' },
        { integral: '∫[0 to π] x²·sin(2x) dx', answer: '-π²/2' },
        { integral: '∫[0 to π] x²·cos(2x) dx', answer: 'π/2' },
        { integral: '∫[0 to 1] x·e^(2x) dx', answer: '(e² + 1)/4' },
        { integral: '∫[0 to 1] x²·e^(2x) dx', answer: '(e² - 1)/4' },
        { integral: '∫[0 to 1] x³·e^(2x) dx', answer: '(e² - 5)/8' },
        { integral: '∫[0 to 1] x·e^(-2x) dx', answer: '(1 - 3e^(-2))/4' },
        { integral: '∫[0 to 1] x²·e^(-2x) dx', answer: '(1 - 5e^(-2))/4' },
        { integral: '∫[0 to 1] x³·e^(-2x) dx', answer: '(3 - 13e^(-2))/8' },
        { integral: '∫[0 to π/2] eˣ·sin²(x) dx', answer: '(e^(π/2) - 1)/5' },
        { integral: '∫[0 to π/2] eˣ·cos²(x) dx', answer: '(e^(π/2) + 1)/5' },
        { integral: '∫[0 to π] eˣ·sin²(x) dx', answer: '(e^π - 1)/5' },
        { integral: '∫[0 to π] eˣ·cos²(x) dx', answer: '(e^π + 1)/5' },
        { integral: '∫[0 to 1] x·ln(1-x) dx', answer: '-3/4' },
        { integral: '∫[0 to 1] x²·ln(1-x) dx', answer: '-11/18' },
        { integral: '∫[0 to 1] x³·ln(1-x) dx', answer: '-25/48' },
        { integral: '∫[0 to 1] x·ln(1+x²) dx', answer: 'ln(2)/2 - 1/2' },
        { integral: '∫[0 to 1] x²·ln(1+x²) dx', answer: 'ln(2)/3 - 2/9' },
        { integral: '∫[0 to 1] x³·ln(1+x²) dx', answer: 'ln(2)/4 - 3/16' },
        { integral: '∫[0 to π/2] sin⁵(x) dx', answer: '8/15' },
        { integral: '∫[0 to π/2] cos⁵(x) dx', answer: '8/15' },
        { integral: '∫[0 to π/2] sin⁶(x) dx', answer: '5π/32' },
        { integral: '∫[0 to π/2] cos⁶(x) dx', answer: '5π/32' },
        { integral: '∫[0 to π] sin⁵(x) dx', answer: '16/15' },
        { integral: '∫[0 to π] cos⁵(x) dx', answer: '0' },
        { integral: '∫[0 to π] sin⁶(x) dx', answer: '5π/16' },
        { integral: '∫[0 to π] cos⁶(x) dx', answer: '5π/16' },
        { integral: '∫[0 to π/2] x·sin³(x) dx', answer: 'π/6' },
        { integral: '∫[0 to π/2] x·cos³(x) dx', answer: 'π/6' },
        { integral: '∫[0 to π/2] x²·sin²(x) dx', answer: 'π³/48 - π/8' },
        { integral: '∫[0 to π/2] x²·cos²(x) dx', answer: 'π³/48 + π/8' },
        { integral: '∫[0 to π] x·sin⁴(x) dx', answer: '3π²/16' },
        { integral: '∫[0 to π] x·cos⁴(x) dx', answer: '3π²/16' },
        { integral: '∫[0 to 1] x·arctan²(x) dx', answer: 'π²/32 - π/8 + ln(2)/4' },
        { integral: '∫[0 to 1] x²·arctan²(x) dx', answer: 'π²/48 - π/12 + ln(2)/6' },
        { integral: '∫[0 to π/2] eˣ·sin³(x) dx', answer: '(3e^(π/2) - 3)/10' },
        { integral: '∫[0 to π/2] eˣ·cos³(x) dx', answer: '(3e^(π/2) + 3)/10' },
        { integral: '∫[0 to π] eˣ·sin³(x) dx', answer: '(3e^π - 3)/10' },
        { integral: '∫[0 to π] eˣ·cos³(x) dx', answer: '(3e^π + 3)/10' },
        { integral: '∫[0 to 1] x·ln²(x) dx', answer: '2/27' },
        { integral: '∫[1 to e] x·ln²(x) dx', answer: 'e²(2 - 2 + 1)/4 - 1/4' },
        { integral: '∫[0 to 1] x²·ln²(x) dx', answer: '2/27' },
        { integral: '∫[1 to e] x²·ln²(x) dx', answer: 'e³(2ln²(e) - 4ln(e) + 2)/9 - 2/9' },
        { integral: '∫[0 to 1] x³·ln²(x) dx', answer: '2/64' },
        { integral: '∫[1 to e] x³·ln²(x) dx', answer: 'e⁴(2ln²(e) - 6ln(e) + 3)/16 - 3/16' },
        { integral: '∫[0 to π/2] x·sin⁴(x) dx', answer: '3π²/64' },
        { integral: '∫[0 to π/2] x·cos⁴(x) dx', answer: '3π²/64' },
        { integral: '∫[0 to π] x²·sin³(x) dx', answer: '2π²/3' },
        { integral: '∫[0 to π] x²·cos³(x) dx', answer: '0' },
        { integral: '∫[0 to 1] x·eˣ·ln(x) dx', answer: '1/4' },
        { integral: '∫[1 to e] x·eˣ·ln(x) dx', answer: 'e²(ln(e) - 1/2) - (ln(1) - 1/2)' },
        { integral: '∫[0 to 1] x²·eˣ·ln(x) dx', answer: '5/36' },
        { integral: '∫[1 to e] x²·eˣ·ln(x) dx', answer: 'e³(ln(e) - 2/3) - (ln(1) - 2/3)' },
        { integral: '∫[0 to π/2] x·eˣ·sin(x) dx', answer: '(e^(π/2)(π/2 - 1) + 1)/2' },
        { integral: '∫[0 to π/2] x·eˣ·cos(x) dx', answer: '(e^(π/2)(π/2 - 1) - 1)/2' },
        { integral: '∫[0 to π] x²·eˣ·sin(x) dx', answer: 'e^π((π² - 2π) - 2)/2' },
        { integral: '∫[0 to π] x²·eˣ·cos(x) dx', answer: 'e^π((π² - 2) + 2π)/2 - 2' }
    ],
    impossible: [
        { integral: '∫[0 to 1] eˣ²·2x dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] x·eˣ² dx', answer: '(e - 1)/2' },
        { integral: '∫[0 to π] sin(x)·e^cos(x) dx', answer: 'e - e^(-1)' },
        { integral: '∫[0 to π/2] cos(x)·e^sin(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] eˣ/(eˣ + 1)² dx', answer: '1/2 - 1/(e+1)' },
        { integral: '∫[0 to 1] x·e^(x²/2) dx', answer: 'e^(1/2) - 1' },
        { integral: '∫[0 to π/2] sin(x)·cos(x)·e^sin²(x) dx', answer: '(e - 1)/2' },
        { integral: '∫[0 to 1] x·ln(x² + 1)/(x² + 1) dx', answer: 'ln²(2)/4' },
        { integral: '∫[0 to π/4] e^tan(x)·sec²(x) dx', answer: 'e - 1' },
        { integral: '∫[1 to e] x·(ln(x))²/x dx', answer: '1/3' },
        { integral: '∫[0 to π/2] cos(x)·sin(x)·e^cos²(x) dx', answer: '(1 - e^(-1))/2' },
        { integral: '∫[0 to 1] e^(-2x) dx', answer: '(1 - e^(-2))/2' },
        { integral: '∫[0 to 1] x·e^(3x²) dx', answer: '(e³ - 1)/6' },
        { integral: '∫[0 to π] e^(2x)·sin(3x) dx', answer: '(2e^(2π) + 3)/13' },
        { integral: '∫[0 to π] e^(2x)·cos(3x) dx', answer: '(2e^(2π) - 2)/13' },
        { integral: '∫[0 to 1] x·(1 + x²)^3 dx', answer: '15/8' },
        { integral: '∫[0 to π] sin(2x)·e^(3x) dx', answer: '(3e^(3π) + 2)/13' },
        { integral: '∫[0 to 1] x²·e^(-2x) dx', answer: '1/4 - 5e^(-2)/4' },
        { integral: '∫[0 to 1] 1/(x² + 4) dx', answer: 'arctan(1/2)/2' },
        { integral: '∫[0 to 1] e^(3x)·x² dx', answer: 'e³(1/3 - 2/9 + 2/27) - 2/27' },
        { integral: '∫[1 to e] x·ln(x) dx', answer: 'e²/4' },
        { integral: '∫[0 to 1] e^(2x²)·x dx', answer: '(e² - 1)/4' },
        { integral: '∫[0 to π] sin(2x)·cos(3x) dx', answer: '0' },
        { integral: '∫[0 to 1] x·(1 + x²)^n dx (n=2)', answer: '4/3' },
        { integral: '∫[0 to 1] x·(1 + x²)^4 dx', answer: '31/10' },
        { integral: '∫[0 to 1] x·(1 + x²)^5 dx', answer: '63/12' },
        { integral: '∫[0 to 1] x·√(1 + x²) dx', answer: '(2√2 - 1)/3' },
        { integral: '∫[0 to 1] x·(1 + x²)^(1/2) dx', answer: '(2√2 - 1)/3' },
        { integral: '∫[0 to 1] x·(1 + x²)^(3/2) dx', answer: '(4√2 - 1)/5' },
        { integral: '∫[0 to 1] x·(1 + x²)^(5/2) dx', answer: '(6√2 - 1)/7' },
        { integral: '∫[0 to 1] e^(x²)·x dx', answer: '(e - 1)/2' },
        { integral: '∫[0 to 1] e^(2x²)·x dx', answer: '(e² - 1)/4' },
        { integral: '∫[0 to 1] e^(3x²)·x dx', answer: '(e³ - 1)/6' },
        { integral: '∫[0 to 1] e^(-x²)·x dx', answer: '(1 - 1/e)/2' },
        { integral: '∫[0 to 1] e^(-2x²)·x dx', answer: '(1 - 1/e²)/4' },
        { integral: '∫[0 to π/2] e^sin(x)·cos(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^cos(x)·sin(x) dx', answer: '1 - 1/e' },
        { integral: '∫[0 to π] e^sin(x)·cos(x) dx', answer: '0' },
        { integral: '∫[0 to π] e^cos(x)·sin(x) dx', answer: '0' },
        { integral: '∫[0 to π/4] e^tan(x)·sec²(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/4] e^cot(x)·(-csc²(x)) dx', answer: '1 - 1/e' },
        { integral: '∫[0 to 1] x·ln(1 + x²) dx', answer: 'ln(2)/2 - 1/2' },
        { integral: '∫[0 to 1] x²·ln(1 + x²) dx', answer: 'ln(2)/3 - 2/9' },
        { integral: '∫[0 to 1] x³·ln(1 + x²) dx', answer: 'ln(2)/4 - 3/16' },
        { integral: '∫[0 to 1] x·ln(1 - x²) dx', answer: '-ln(2)/2 - 1/2' },
        { integral: '∫[0 to 1] x²·ln(1 - x²) dx', answer: '-ln(2)/3 - 2/9' },
        { integral: '∫[0 to 1] x·e^(x²)·ln(x) dx', answer: '(e - 1)/4' },
        { integral: '∫[0 to 1] x²·e^(x²)·ln(x) dx', answer: '(e - 2)/8' },
        { integral: '∫[0 to π/2] e^(sin²(x))·sin(x)cos(x) dx', answer: '(e - 1)/2' },
        { integral: '∫[0 to π/2] e^(cos²(x))·sin(x)cos(x) dx', answer: '(1 - 1/e)/2' },
        { integral: '∫[0 to 1] x·arctan(x²) dx', answer: 'π/8 - 1/4' },
        { integral: '∫[0 to 1] x²·arctan(x²) dx', answer: 'π/12 - 1/6' },
        { integral: '∫[0 to 1] x³·arctan(x²) dx', answer: 'π/16 - 1/12' },
        { integral: '∫[0 to 1] x·arcsin(x²) dx', answer: 'π/8 - 1/4' },
        { integral: '∫[0 to 1] x²·arcsin(x²) dx', answer: 'π/12 - 1/6' },
        { integral: '∫[0 to π/2] e^(sin(x))·cos²(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^(cos(x))·sin²(x) dx', answer: '1 - 1/e' },
        { integral: '∫[0 to π] e^(sin(x))·cos²(x) dx', answer: 'π(e - 1/e)/2' },
        { integral: '∫[0 to π] e^(cos(x))·sin²(x) dx', answer: 'π(e - 1/e)/2' },
        { integral: '∫[0 to 1] x·e^(x²)·arctan(x) dx', answer: '(e·π/4 - e + 1)/2' },
        { integral: '∫[0 to 1] x²·e^(x²)·arctan(x) dx', answer: '(e·π/4 - 2e + 2)/4' },
        { integral: '∫[0 to π/2] e^(sin(x))·sin(x)cos(x) dx', answer: '(e - 1)/2' },
        { integral: '∫[0 to π/2] e^(cos(x))·sin(x)cos(x) dx', answer: '(1 - 1/e)/2' },
        { integral: '∫[0 to 1] x·ln(x)·e^(x²) dx', answer: '(e - 1)/4' },
        { integral: '∫[0 to 1] x²·ln(x)·e^(x²) dx', answer: '(e - 2)/8' },
        { integral: '∫[0 to π/2] e^(2sin(x))·cos(x) dx', answer: '(e² - 1)/2' },
        { integral: '∫[0 to π/2] e^(2cos(x))·sin(x) dx', answer: '(1 - 1/e²)/2' },
        { integral: '∫[0 to 1] x·(1 + x²)^(1/3) dx', answer: '3((2)^(4/3) - 1)/8' },
        { integral: '∫[0 to 1] x·(1 + x²)^(1/4) dx', answer: '4((2)^(5/4) - 1)/10' },
        { integral: '∫[0 to 1] x·(1 + x²)^(2/3) dx', answer: '3((2)^(5/3) - 1)/10' },
        { integral: '∫[0 to 1] x·(1 + x²)^(3/4) dx', answer: '4((2)^(7/4) - 1)/14' },
        { integral: '∫[0 to 1] e^(x³)·x² dx', answer: '(e - 1)/3' },
        { integral: '∫[0 to 1] e^(2x³)·x² dx', answer: '(e² - 1)/6' },
        { integral: '∫[0 to 1] e^(-x³)·x² dx', answer: '(1 - 1/e)/3' },
        { integral: '∫[0 to π/2] e^(sin²(x))·sin(x) dx', answer: '√π·erf(1)/2' },
        { integral: '∫[0 to π/2] e^(cos²(x))·cos(x) dx', answer: '√π·erf(1)/2' },
        { integral: '∫[0 to 1] x·ln²(1 + x²) dx', answer: 'ln²(2)/2 - ln(2) + 1/2' },
        { integral: '∫[0 to 1] x²·ln²(1 + x²) dx', answer: 'ln²(2)/3 - 2ln(2)/3 + 2/9' },
        { integral: '∫[0 to π/2] e^(sin(x) + cos(x))·(cos(x) - sin(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^(sin(x) - cos(x))·(cos(x) + sin(x)) dx', answer: 'e - 1/e' },
        { integral: '∫[0 to 1] x·arctan(x)·e^(x²) dx', answer: '(e·π/4 - e + 1)/2' },
        { integral: '∫[0 to 1] x²·arctan(x)·e^(x²) dx', answer: '(e·π/4 - 2e + 2)/4' },
        { integral: '∫[0 to π/2] e^(2sin²(x))·sin(x)cos(x) dx', answer: '(e² - 1)/4' },
        { integral: '∫[0 to π/2] e^(2cos²(x))·sin(x)cos(x) dx', answer: '(1 - 1/e²)/4' },
        { integral: '∫[0 to 1] x·ln(1 + x)·e^(x²) dx', answer: '(e·ln(2) - e + 1)/2' },
        { integral: '∫[0 to 1] x²·ln(1 + x)·e^(x²) dx', answer: '(e·ln(2) - 2e + 2)/4' },
        { integral: '∫[0 to π/2] e^(sin(x)cos(x))·(cos²(x) - sin²(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^(tan(x))·sec²(x)·cos(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/4] e^(tan²(x))·2tan(x)sec²(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] x·(1 + x²)^(1/5) dx', answer: '5((2)^(6/5) - 1)/12' },
        { integral: '∫[0 to 1] x·(1 + x²)^(2/5) dx', answer: '5((2)^(7/5) - 1)/14' },
        { integral: '∫[0 to 1] x·(1 + x²)^(3/5) dx', answer: '5((2)^(8/5) - 1)/16' },
        { integral: '∫[0 to 1] x·(1 + x²)^(4/5) dx', answer: '5((2)^(9/5) - 1)/18' },
        { integral: '∫[0 to 1] e^(x⁴)·x³ dx', answer: '(e - 1)/4' },
        { integral: '∫[0 to 1] e^(2x⁴)·x³ dx', answer: '(e² - 1)/8' },
        { integral: '∫[0 to 1] e^(-x⁴)·x³ dx', answer: '(1 - 1/e)/4' },
        { integral: '∫[0 to π/2] e^(sin³(x))·sin²(x)cos(x) dx', answer: '(e - 1)/3' },
        { integral: '∫[0 to π/2] e^(cos³(x))·cos²(x)sin(x) dx', answer: '(1 - 1/e)/3' },
        { integral: '∫[0 to 1] x·ln(1 + x³) dx', answer: 'ln(2)/3 - 1/3' },
        { integral: '∫[0 to 1] x²·ln(1 + x³) dx', answer: 'ln(2)/4 - 1/4' },
        { integral: '∫[0 to π/2] e^(sin(x) + 2cos(x))·(cos(x) - 2sin(x)) dx', answer: 'e² - 1' },
        { integral: '∫[0 to π/2] e^(2sin(x) + cos(x))·(2cos(x) - sin(x)) dx', answer: 'e² - 1' },
        { integral: '∫[0 to 1] x·arctan(x³) dx', answer: 'π/12 - 1/6' },
        { integral: '∫[0 to 1] x²·arctan(x³) dx', answer: 'π/18 - 1/9' },
        { integral: '∫[0 to π/2] e^(sin²(x) + cos²(x))·2sin(x)cos(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/4] e^(tan(x) + sec²(x))·(sec²(x) + 2tan(x)sec²(x)) dx', answer: 'e² - 1' },
        { integral: '∫[0 to 1] x·e^(x² + x) dx', answer: '(e² - e)/2' },
        { integral: '∫[0 to 1] x²·e^(x² + x) dx', answer: '(e² - 2e)/4' },
        { integral: '∫[0 to π/2] e^(sin(x)cos(x))·(cos²(x) - sin²(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^(2sin(x)cos(x))·2(cos²(x) - sin²(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] x·(1 + x²)^(1/6) dx', answer: '6((2)^(7/6) - 1)/14' },
        { integral: '∫[0 to 1] x·(1 + x²)^(5/6) dx', answer: '6((2)^(11/6) - 1)/22' },
        { integral: '∫[0 to 1] e^(x⁵)·x⁴ dx', answer: '(e - 1)/5' },
        { integral: '∫[0 to 1] e^(2x⁵)·x⁴ dx', answer: '(e² - 1)/10' },
        { integral: '∫[0 to π/2] e^(sin⁴(x))·sin³(x)cos(x) dx', answer: '(e - 1)/4' },
        { integral: '∫[0 to π/2] e^(cos⁴(x))·cos³(x)sin(x) dx', answer: '(1 - 1/e)/4' },
        { integral: '∫[0 to 1] x·ln(1 + x⁴) dx', answer: 'ln(2)/4 - 1/4' },
        { integral: '∫[0 to 1] x²·ln(1 + x⁴) dx', answer: 'ln(2)/5 - 1/5' },
        { integral: '∫[0 to π/2] e^(3sin(x))·3cos(x) dx', answer: 'e³ - 1' },
        { integral: '∫[0 to π/2] e^(3cos(x))·(-3sin(x)) dx', answer: '1 - 1/e³' },
        { integral: '∫[0 to 1] x·arctan(x⁴) dx', answer: 'π/16 - 1/8' },
        { integral: '∫[0 to 1] x²·arctan(x⁴) dx', answer: 'π/24 - 1/12' },
        { integral: '∫[0 to π/2] e^(sin²(x)cos²(x))·2sin(x)cos(x)(cos²(x) - sin²(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/4] e^(tan²(x))·2tan(x)sec²(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] x·e^(x² + 2x) dx', answer: '(e³ - e)/2' },
        { integral: '∫[0 to 1] x²·e^(x² + 2x) dx', answer: '(e³ - 2e)/4' },
        { integral: '∫[0 to π/2] e^(sin(x) + cos²(x))·(cos(x) - 2sin(x)cos(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^(cos(x) + sin²(x))·(-sin(x) + 2cos(x)sin(x)) dx', answer: '1 - 1/e' },
        { integral: '∫[0 to 1] x·(1 + x²)^(1/7) dx', answer: '7((2)^(8/7) - 1)/16' },
        { integral: '∫[0 to 1] x·(1 + x²)^(6/7) dx', answer: '7((2)^(13/7) - 1)/26' },
        { integral: '∫[0 to 1] e^(x⁶)·x⁵ dx', answer: '(e - 1)/6' },
        { integral: '∫[0 to 1] e^(2x⁶)·x⁵ dx', answer: '(e² - 1)/12' },
        { integral: '∫[0 to π/2] e^(sin⁵(x))·sin⁴(x)cos(x) dx', answer: '(e - 1)/5' },
        { integral: '∫[0 to π/2] e^(cos⁵(x))·cos⁴(x)sin(x) dx', answer: '(1 - 1/e)/5' },
        { integral: '∫[0 to 1] x·ln(1 + x⁵) dx', answer: 'ln(2)/5 - 1/5' },
        { integral: '∫[0 to 1] x²·ln(1 + x⁵) dx', answer: 'ln(2)/6 - 1/6' },
        { integral: '∫[0 to π/2] e^(4sin(x))·4cos(x) dx', answer: 'e⁴ - 1' },
        { integral: '∫[0 to π/2] e^(4cos(x))·(-4sin(x)) dx', answer: '1 - 1/e⁴' },
        { integral: '∫[0 to 1] x·arctan(x⁵) dx', answer: 'π/20 - 1/10' },
        { integral: '∫[0 to 1] x²·arctan(x⁵) dx', answer: 'π/30 - 1/15' },
        { integral: '∫[0 to π/2] e^(sin³(x)cos³(x))·3sin²(x)cos²(x)(cos³(x) - sin³(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/4] e^(tan³(x))·3tan²(x)sec²(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] x·e^(x² + 3x) dx', answer: '(e⁴ - e)/2' },
        { integral: '∫[0 to 1] x²·e^(x² + 3x) dx', answer: '(e⁴ - 2e)/4' },
        { integral: '∫[0 to π/2] e^(sin²(x) + cos³(x))·(2sin(x)cos(x) - 3cos²(x)sin(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^(cos²(x) + sin³(x))·(-2cos(x)sin(x) + 3sin²(x)cos(x)) dx', answer: '1 - 1/e' },
        { integral: '∫[0 to 1] x·(1 + x²)^(1/8) dx', answer: '8((2)^(9/8) - 1)/18' },
        { integral: '∫[0 to 1] x·(1 + x²)^(7/8) dx', answer: '8((2)^(15/8) - 1)/30' },
        { integral: '∫[0 to 1] e^(x⁷)·x⁶ dx', answer: '(e - 1)/7' },
        { integral: '∫[0 to 1] e^(2x⁷)·x⁶ dx', answer: '(e² - 1)/14' },
        { integral: '∫[0 to π/2] e^(sin⁶(x))·sin⁵(x)cos(x) dx', answer: '(e - 1)/6' },
        { integral: '∫[0 to π/2] e^(cos⁶(x))·cos⁵(x)sin(x) dx', answer: '(1 - 1/e)/6' },
        { integral: '∫[0 to 1] x·ln(1 + x⁶) dx', answer: 'ln(2)/6 - 1/6' },
        { integral: '∫[0 to 1] x²·ln(1 + x⁶) dx', answer: 'ln(2)/7 - 1/7' },
        { integral: '∫[0 to π/2] e^(5sin(x))·5cos(x) dx', answer: 'e⁵ - 1' },
        { integral: '∫[0 to π/2] e^(5cos(x))·(-5sin(x)) dx', answer: '1 - 1/e⁵' },
        { integral: '∫[0 to 1] x·arctan(x⁶) dx', answer: 'π/24 - 1/12' },
        { integral: '∫[0 to 1] x²·arctan(x⁶) dx', answer: 'π/36 - 1/18' },
        { integral: '∫[0 to π/2] e^(sin⁴(x)cos⁴(x))·4sin³(x)cos³(x)(cos⁴(x) - sin⁴(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/4] e^(tan⁴(x))·4tan³(x)sec²(x) dx', answer: 'e - 1' },
        { integral: '∫[0 to 1] x·e^(x² + 4x) dx', answer: '(e⁵ - e)/2' },
        { integral: '∫[0 to 1] x²·e^(x² + 4x) dx', answer: '(e⁵ - 2e)/4' },
        { integral: '∫[0 to π/2] e^(sin³(x) + cos⁴(x))·(3sin²(x)cos(x) - 4cos³(x)sin(x)) dx', answer: 'e - 1' },
        { integral: '∫[0 to π/2] e^(cos³(x) + sin⁴(x))·(-3cos²(x)sin(x) + 4sin³(x)cos(x)) dx', answer: '1 - 1/e' }
    ]
};

// Normalize answer strings for comparison
function normalizeAnswer(answer) {
    return answer
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/·/g, '*')
        .replace(/×/g, '*')
        .replace(/²/g, '^2')
        .replace(/³/g, '^3')
        .replace(/⁴/g, '^4')
        .replace(/⁵/g, '^5')
        .replace(/⁶/g, '^6')
        .replace(/⁷/g, '^7')
        .replace(/⁸/g, '^8')
        .replace(/ˣ/g, 'x')
        .replace(/⁻/g, '-')
        .replace(/∞/g, 'inf')
        .replace(/π/g, 'pi')
        .replace(/√/g, 'sqrt')
        .replace(/ln/g, 'log')
        .replace(/arctan/g, 'atan')
        .replace(/arcsin/g, 'asin')
        .replace(/arccos/g, 'acos')
        .replace(/\^\(/g, '^(')
        .replace(/\)\^/g, ')^');
}

// Check if answer is correct (allows for equivalent forms)
function checkAnswer(userAnswer, correctAnswer) {
    const normalizedUser = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctAnswer);
    
    // Direct match
    if (normalizedUser === normalizedCorrect) {
        return true;
    }
    
    // Check for equivalent forms (e.g., x^2/2 vs x²/2, x*x vs x^2)
    // Remove +C variations (for definite integrals, there should be no C)
    const userNoC = normalizedUser.replace(/\+c$/, '').replace(/c$/, '');
    const correctNoC = normalizedCorrect.replace(/\+c$/, '').replace(/c$/, '');
    
    if (userNoC === correctNoC) {
        return true;
    }
    
    // For definite integrals, also check simplified forms
    // e.g., "1/2" should match "0.5", "arctan(1)" should match "π/4"
    // This is a simplified check - in a real app, you'd use a CAS
    return false;
}

// Get random problem based on difficulty
function getRandomProblem() {
    const difficulties = ['easy', 'medium', 'hard', 'impossible'];
    const weights = [0.25, 0.35, 0.25, 0.15]; // More weight on medium and hard for competition level
    
    const rand = Math.random();
    let cumulative = 0;
    let selectedDifficulty = 'easy';
    
    for (let i = 0; i < difficulties.length; i++) {
        cumulative += weights[i];
        if (rand <= cumulative) {
            selectedDifficulty = difficulties[i];
            break;
        }
    }
    
    const problemSet = problems[selectedDifficulty];
    const randomProblem = problemSet[Math.floor(Math.random() * problemSet.length)];
    
    return {
        ...randomProblem,
        difficulty: selectedDifficulty
    };
}

// Show name input screen
function showNameInput(numPlayers) {
    gameState.numPlayers = numPlayers;
    
    // Hide player selection, show name input
    document.getElementById('player-selection').style.display = 'none';
    document.getElementById('name-input-screen').style.display = 'block';
    
    // Create name input fields
    const nameInputsContainer = document.getElementById('name-inputs');
    nameInputsContainer.innerHTML = '';
    
    for (let i = 0; i < numPlayers; i++) {
        const nameInputGroup = document.createElement('div');
        nameInputGroup.className = 'name-input-group';
        nameInputGroup.innerHTML = `
            <label for="player${i + 1}-name">Player ${i + 1} Name:</label>
            <input type="text" id="player${i + 1}-name" placeholder="Enter name" maxlength="20" />
        `;
        nameInputsContainer.appendChild(nameInputGroup);
    }
    
    // Focus on first input
    document.getElementById('player1-name').focus();
}

// Initialize game with player names
function initializeGame() {
    // Get player names
    gameState.playerNames = [];
    for (let i = 1; i <= gameState.numPlayers; i++) {
        const nameInput = document.getElementById(`player${i}-name`);
        const name = nameInput.value.trim() || `Player ${i}`;
        gameState.playerNames.push(name);
    }
    
    // Initialize scores
    gameState.playerScores = new Array(gameState.numPlayers).fill(0);
    gameState.round = 1;
    gameState.currentProblem = null;
    gameState.gameActive = false;
    gameState.problemSolved = false;
    gameState.winner = null;
    
    // Hide name input, show game screen
    document.getElementById('name-input-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    
    // Create scoreboard
    createScoreboard();
    
    // Create input fields
    createInputFields();
    
    // Update display
    updateDisplay();
    
    // Start first problem with countdown
    startProblemWithCountdown();
}

// Create scoreboard dynamically
function createScoreboard() {
    const scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    
    // Create player scores
    for (let i = 0; i < gameState.numPlayers; i++) {
        const playerScore = document.createElement('div');
        playerScore.className = 'player-score';
        playerScore.id = `player${i + 1}-score`;
        playerScore.innerHTML = `
            <h2>${gameState.playerNames[i]}</h2>
            <div class="score">0</div>
        `;
        scoreboard.appendChild(playerScore);
    }
    
    // Add round info in the middle
    const roundInfo = document.createElement('div');
    roundInfo.className = 'round-info';
    roundInfo.innerHTML = `
        <div class="round">Round: <span id="round-number">1</span></div>
        <div class="best-of">First to 4 Points</div>
    `;
    scoreboard.insertBefore(roundInfo, scoreboard.children[Math.floor(gameState.numPlayers / 2)]);
}

// Create input fields dynamically
function createInputFields() {
    const inputContainer = document.getElementById('player-inputs');
    inputContainer.innerHTML = '';
    
    // Determine grid layout based on number of players
    let gridCols = '1fr';
    if (gameState.numPlayers === 2) {
        gridCols = '1fr 1fr';
    } else if (gameState.numPlayers === 3) {
        gridCols = '1fr 1fr 1fr';
    } else {
        gridCols = '1fr 1fr';
    }
    inputContainer.style.gridTemplateColumns = gridCols;
    
    for (let i = 0; i < gameState.numPlayers; i++) {
        const inputGroup = document.createElement('div');
        inputGroup.className = 'player-input-group';
        inputGroup.innerHTML = `
            <label for="player${i + 1}-answer">${gameState.playerNames[i]} Answer:</label>
            <input type="text" id="player${i + 1}-answer" placeholder="Enter answer (e.g., 1/2, ln(2), π/4)" />
            <button class="submit-btn" id="player${i + 1}-submit">Submit</button>
        `;
        inputContainer.appendChild(inputGroup);
        
        // Add event listeners
        document.getElementById(`player${i + 1}-submit`).addEventListener('click', () => submitAnswer(i + 1));
        document.getElementById(`player${i + 1}-answer`).addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                submitAnswer(i + 1);
            }
        });
    }
}

// Update display
function updateDisplay() {
    for (let i = 0; i < gameState.numPlayers; i++) {
        const scoreElement = document.getElementById(`player${i + 1}-score`);
        if (scoreElement) {
            scoreElement.querySelector('.score').textContent = gameState.playerScores[i];
        }
    }
    document.getElementById('round-number').textContent = gameState.round;
    
    // Check for game over (first to 4 wins)
    const maxScore = Math.max(...gameState.playerScores);
    if (maxScore >= 4) {
        endGame();
    }
}

// Start problem with 5-second countdown
function startProblemWithCountdown() {
    gameState.problemSolved = false;
    gameState.currentProblem = getRandomProblem();
    
    // Hide integral, show countdown
    document.getElementById('integral-expression').style.display = 'none';
    document.getElementById('countdown-timer').style.display = 'block';
    document.getElementById('integral-label').textContent = 'Get ready...';
    
    // Disable all inputs during countdown
    for (let i = 1; i <= gameState.numPlayers; i++) {
        const input = document.getElementById(`player${i}-answer`);
        const submit = document.getElementById(`player${i}-submit`);
        if (input && submit) {
            input.value = '';
            input.disabled = true;
            submit.disabled = true;
        }
    }
    
    gameState.gameActive = false;
    
    // Start countdown from 5
    let countdown = 5;
    const countdownElement = document.getElementById('countdown-number');
    countdownElement.textContent = countdown;
    
    // Clear any existing timer
    if (gameState.countdownTimer) {
        clearInterval(gameState.countdownTimer);
    }
    
    gameState.countdownTimer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            countdownElement.textContent = countdown;
        } else {
            clearInterval(gameState.countdownTimer);
            // Show the problem
            displayNewProblem();
        }
    }, 1000);
}

// Display new problem
function displayNewProblem() {
    // Hide countdown, show integral
    document.getElementById('countdown-timer').style.display = 'none';
    document.getElementById('integral-expression').style.display = 'block';
    document.getElementById('integral-label').textContent = 'Solve the integral:';
    
    document.getElementById('integral-expression').textContent = gameState.currentProblem.integral;
    
    const difficultyBadge = document.getElementById('difficulty-badge');
    difficultyBadge.textContent = gameState.currentProblem.difficulty.charAt(0).toUpperCase() + 
                                  gameState.currentProblem.difficulty.slice(1);
    difficultyBadge.className = 'difficulty-badge ' + gameState.currentProblem.difficulty;
    
    // Clear and enable all inputs
    for (let i = 1; i <= gameState.numPlayers; i++) {
        const input = document.getElementById(`player${i}-answer`);
        const submit = document.getElementById(`player${i}-submit`);
        if (input && submit) {
            input.value = '';
            input.disabled = false;
            submit.disabled = false;
        }
    }
    
    document.getElementById('status-message').textContent = 'Solve the integral!';
    gameState.gameActive = true;
}

// Handle answer submission
function submitAnswer(playerNumber) {
    if (!gameState.gameActive || gameState.problemSolved) {
        return;
    }
    
    const answerInput = document.getElementById(`player${playerNumber}-answer`);
    if (!answerInput) return;
    
    const userAnswer = answerInput.value.trim();
    
    if (!userAnswer) {
        return;
    }
    
    const isCorrect = checkAnswer(userAnswer, gameState.currentProblem.answer);
    
    if (isCorrect) {
        gameState.problemSolved = true;
        gameState.gameActive = false;
        
        // Disable all inputs
        for (let i = 1; i <= gameState.numPlayers; i++) {
            const input = document.getElementById(`player${i}-answer`);
            const submit = document.getElementById(`player${i}-submit`);
            if (input && submit) {
                input.disabled = true;
                submit.disabled = true;
            }
        }
        
        // Update score
        gameState.playerScores[playerNumber - 1]++;
        
        const playerName = gameState.playerNames[playerNumber - 1];
        document.getElementById('status-message').innerHTML = 
            `<span class="correct-answer">${playerName} wins this round!</span><br>` +
            `Correct answer: ${gameState.currentProblem.answer}`;
        
        updateDisplay();
        
        // Auto-advance to next round after 2 seconds
        setTimeout(() => {
            const maxScore = Math.max(...gameState.playerScores);
            if (maxScore < 4) {
                gameState.round++;
                startProblemWithCountdown();
            }
        }, 2000);
    } else {
        const playerName = gameState.playerNames[playerNumber - 1];
        document.getElementById('status-message').innerHTML = 
            `<span class="wrong-answer">${playerName}: Incorrect. Try again!</span>`;
    }
}

// End game
function endGame() {
    gameState.gameActive = false;
    const maxScore = Math.max(...gameState.playerScores);
    const winners = [];
    
    for (let i = 0; i < gameState.playerScores.length; i++) {
        if (gameState.playerScores[i] === maxScore) {
            winners.push(i + 1);
        }
    }
    
    if (winners.length === 1) {
        gameState.winner = winners[0];
        const winnerName = gameState.playerNames[gameState.winner - 1];
        document.getElementById('winner-message').textContent = `${winnerName} Wins!`;
    } else {
        const winnerNames = winners.map(w => gameState.playerNames[w - 1]).join(', ');
        document.getElementById('winner-message').textContent = 
            `Tie! ${winnerNames} with ${maxScore} points each!`;
    }
    
    document.getElementById('game-over').style.display = 'block';
    
    // Disable all inputs
    for (let i = 1; i <= gameState.numPlayers; i++) {
        const input = document.getElementById(`player${i}-answer`);
        const submit = document.getElementById(`player${i}-submit`);
        if (input && submit) {
            input.disabled = true;
            submit.disabled = true;
        }
    }
}

// Reset game
function resetGame() {
    // Clear countdown timer if active
    if (gameState.countdownTimer) {
        clearInterval(gameState.countdownTimer);
        gameState.countdownTimer = null;
    }
    
    gameState.playerScores = new Array(gameState.numPlayers).fill(0);
    gameState.round = 1;
    gameState.currentProblem = null;
    gameState.gameActive = false;
    gameState.problemSolved = false;
    gameState.winner = null;
    
    document.getElementById('game-over').style.display = 'none';
    updateDisplay();
    startProblemWithCountdown();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Player selection buttons
    document.querySelectorAll('.player-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const numPlayers = parseInt(e.target.getAttribute('data-players'));
            showNameInput(numPlayers);
        });
    });
    
    // Start game button
    document.getElementById('start-game-btn').addEventListener('click', () => {
        initializeGame();
    });
    
    // Allow Enter key in name inputs to start game
    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && document.getElementById('name-input-screen').style.display !== 'none') {
            const nameInputs = document.querySelectorAll('#name-inputs input');
            const allFilled = Array.from(nameInputs).every(input => input.value.trim() !== '');
            if (allFilled || e.target.id.includes('name')) {
                initializeGame();
            }
        }
    });
    
    // New problem button
    document.getElementById('new-problem-btn').addEventListener('click', () => {
        if (!gameState.problemSolved && gameState.gameActive) {
            if (confirm('Skip this problem? (No points awarded)')) {
                // Clear countdown timer if active
                if (gameState.countdownTimer) {
                    clearInterval(gameState.countdownTimer);
                    gameState.countdownTimer = null;
                }
                gameState.round++;
                startProblemWithCountdown();
            }
        } else {
            // Clear countdown timer if active
            if (gameState.countdownTimer) {
                clearInterval(gameState.countdownTimer);
                gameState.countdownTimer = null;
            }
            gameState.round++;
            startProblemWithCountdown();
        }
    });
    
    // Reset game button
    document.getElementById('reset-game-btn').addEventListener('click', () => {
        if (confirm('Reset the entire game?')) {
            resetGame();
        }
    });
    
    // Play again button
    document.getElementById('play-again-btn').addEventListener('click', () => {
        // Clear countdown timer if active
        if (gameState.countdownTimer) {
            clearInterval(gameState.countdownTimer);
            gameState.countdownTimer = null;
        }
        
        document.getElementById('game-over').style.display = 'none';
        document.getElementById('player-selection').style.display = 'block';
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('name-input-screen').style.display = 'none';
    });
    
    // Back button from name input to player selection
    document.getElementById('back-to-selection-btn').addEventListener('click', () => {
        document.getElementById('name-input-screen').style.display = 'none';
        document.getElementById('player-selection').style.display = 'block';
    });
    
    // Back button from game to name input
    document.getElementById('back-to-names-btn').addEventListener('click', () => {
        if (confirm('Go back to name input? Current game progress will be lost.')) {
            // Clear countdown timer if active
            if (gameState.countdownTimer) {
                clearInterval(gameState.countdownTimer);
                gameState.countdownTimer = null;
            }
            
            document.getElementById('game-screen').style.display = 'none';
            document.getElementById('name-input-screen').style.display = 'block';
        }
    });
    
    // Back button from game over to player selection
    document.getElementById('back-to-selection-from-game-btn').addEventListener('click', () => {
        // Clear countdown timer if active
        if (gameState.countdownTimer) {
            clearInterval(gameState.countdownTimer);
            gameState.countdownTimer = null;
        }
        
        document.getElementById('game-over').style.display = 'none';
        document.getElementById('player-selection').style.display = 'block';
        document.getElementById('game-screen').style.display = 'none';
        document.getElementById('name-input-screen').style.display = 'none';
    });
});
