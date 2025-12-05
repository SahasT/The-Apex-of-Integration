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

// Math competition level definite integrals
const problems = {
    easy: [
        { integral: '∫[0 to 1] (6x⁵ - 4x³ + 2x) dx', answer: '1' },
        { integral: '∫[0 to π/2] sin(2x) dx', answer: '1' },
        { integral: '∫[1 to e] (3/x) dx', answer: '3' },
        { integral: '∫[0 to 1] xe^(x²) dx', answer: '(e - 1) / 2' },
        { integral: '∫[0 to 4] √x dx', answer: '16 / 3' },
        { integral: '∫[-1 to 1] (x⁷ + 2x²) dx', answer: '4 / 3' },
        { integral: '∫[0 to π/3] sec²(x) dx', answer: '√3' },
        { integral: '∫[0 to 1] 2x(x² + 1)³ dx', answer: '15 / 4' },
        { integral: '∫[0 to π/4] cos(4x) dx', answer: '0' },
        { integral: '∫[0 to 1] (1 / (x + 1)) dx', answer: 'ln(2)' },
        { integral: '∫[-2 to 0] (x² + 2x) dx', answer: '-4 / 3' },
        { integral: '∫[0 to π] sin(x/2) dx', answer: '2' },
        { integral: '∫[0 to ln(3)] e⁻ˣ dx', answer: '2 / 3' },
        { integral: '∫[0 to 1] x³(1 + x⁴)² dx', answer: '7 / 12' },
        { integral: '∫[0 to √3] (1 / (x² + 1)) dx', answer: 'π / 3' },
        { integral: '∫[1 to 2] (x³ - x) dx', answer: '9 / 4' },
        { integral: '∫[0 to π/6] cos(3x) dx', answer: '1 / 3' },
        { integral: '∫[1 to e] (ln(x) / x) dx', answer: '1 / 2' },
        { integral: '∫[0 to 1] 4 · 2ˣ dx', answer: '4 / ln(2)' },
        { integral: '∫[0 to 1] (1 / √(4 - x²)) dx', answer: 'π / 6' },
        { integral: '∫[0 to 2] x√(4 - x²) dx', answer: '8 / 3' },
        { integral: '∫[π/4 to π/2] csc²(x) dx', answer: '1' },
        { integral: '∫[1 to e] (1 / (x ln x)) dx', answer: 'Diverges' },
        { integral: '∫[0 to 1] x · 3^(x²) dx', answer: '4 / ln(3)' },
        { integral: '∫[0 to 1] (eˣ / (eˣ + 1)) dx', answer: 'ln((e + 1) / 2)' }
    ],
    medium: [
        { integral: '∫[1 to 3] (x+1)/(x²+2x) dx', answer: '(1/2) ln(15)' },
        { integral: '∫[0 to π/4] tan²(x) dx', answer: '1 - (π/4)' },
        { integral: '∫[0 to 1] x²/(x+1) dx', answer: '(1/2) - ln(2)' },
        { integral: '∫[0 to π/4] sec(x) dx', answer: 'ln(1 + √2)' },
        { integral: '∫[0 to 1] 1/(x²+4x+3) dx', answer: '(1/2) ln(3/2)' },
        { integral: '∫[0 to ln(2)] e^(2x)/(e^(2x)+1) dx', answer: '(1/2) ln(5/2)' },
        { integral: '∫[0 to 1] (x+2)/(x²+1) dx', answer: '(1/2) ln(2) + (π/2)' },
        { integral: '∫[0 to π/2] sin³(x) dx', answer: '2/3' },
        { integral: '∫[0 to 3] 1/(x²+9) dx', answer: 'π/12' },
        { integral: '∫[0 to π/2] sin(x)/(1+cos(x)) dx', answer: 'ln(2)' },
        { integral: '∫[1 to 2] 1/(x²-4x+5) dx', answer: 'π/4' },
        { integral: '∫[0 to 1] x²/(x³+2) dx', answer: '(1/3) ln(3/2)' },
        { integral: '∫[0 to π/3] tan³(x) dx', answer: '1 - ln(2)' },
        { integral: '∫[0 to 1] (x+1)/(x²+4x+4) dx', answer: 'ln(3/2) - (1/3)' },
        { integral: '∫[0 to ln(2)] tanh(x) dx', answer: 'ln(4/3)' },
        { integral: '∫[0 to 1] eˣ/(e^(2x)+2eˣ+1) dx', answer: 'e - e/(e+1)' },
        { integral: '∫[1 to 2] 1/(x²-x) dx', answer: 'ln(2)' },
        { integral: '∫[0 to π/4] tan(x) sec²(x) dx', answer: '1/2' },
        { integral: '∫[0 to 1] (eˣ-e⁻ˣ)/(eˣ+e⁻ˣ) dx', answer: 'ln((e+e⁻¹)/2)' },
        { integral: '∫[0 to 1] (x²+3x+1)/(x+2) dx', answer: '(1/2) - ln(2)' },
        { integral: '∫[1 to e] ln²(x)/x dx', answer: '1/3' },
        { integral: '∫[0 to 1] 4x³/(x⁴+1) dx', answer: 'ln(2)' },
        { integral: '∫[0 to π/2] sin(x) cos⁴(x) dx', answer: '1/5' },
        { integral: '∫[0 to 1] x/√(3x²+1) dx', answer: '1/3' },
        { integral: '∫[0 to 2] 1/(4x²+4x+1) dx', answer: '2/5' }
    ],
    hard: [
        { integral: '∫[0 to 1] xe⁻ˣ dx', answer: '1 - 2e⁻¹' },
        { integral: '∫[1 to e] ln(x) dx', answer: '1' },
        { integral: '∫[0 to π] x sin(x) dx', answer: 'π' },
        { integral: '∫[0 to π/2] sin²(x) dx', answer: 'π/4' },
        { integral: '∫[0 to 1] x arctan(x) dx', answer: 'π/4 - 1/2' },
        { integral: '∫[0 to π/2] eˣ cos(x) dx', answer: '(e^(π/2) - 1) / 2' },
        { integral: '∫[0 to 1] arcsin(x) dx', answer: 'π/2 - 1' },
        { integral: '∫[0 to π/4] tan⁴(x) dx', answer: '1/3 - π/4' },
        { integral: '∫[0 to 1] x² ln(x + 1) dx', answer: '(2/3) ln(2) - 1/9' },
        { integral: '∫[0 to 1] (1 / (eˣ + e⁻ˣ)) dx', answer: 'arctan(e) - π/4' },
        { integral: '∫[0 to π/2] ((cos x - sin x) / (1 + sin x cos x)) dx', answer: '0' },
        { integral: '∫[0 to 1] ln(x² + 1) dx', answer: 'ln(2) - 2 + π/2' },
        { integral: '∫[0 to 1] x²eˣ dx', answer: 'e - 2' },
        { integral: '∫[0 to π/2] cos³(x) sin²(x) dx', answer: '2/15' },
        { integral: '∫[0 to 1] (x / (1 + √x)) dx', answer: '5/3 - 2 ln(2)' },
        { integral: '∫[0 to π] (x sin(x) / (1 + sin²(x))) dx', answer: 'π² / (2√2)' },
        { integral: '∫[0 to π/4] ((sin x + cos x) / cos x) dx', answer: 'ln(√2) + π/4' },
        { integral: '∫[0 to 1] (ln(x+1) / (x+1)) dx', answer: '(1/2) ln²(2)' },
        { integral: '∫[0 to 1] (x / (x² + 2x + 2)) dx', answer: '(1/2) ln(5) - arctan(2) + π/4' },
        { integral: '∫[0 to π/2] (1 / (1 + tan x)) dx', answer: 'π/4' },
        { integral: '∫[0 to 1] (eˣ / (2 + eˣ)) dx', answer: 'ln((2 + e) / 3)' },
        { integral: '∫[0 to ln(2)] x sinh(x) dx', answer: 'ln(2) * (3/4) - 1/2' },
        { integral: '∫[0 to π/2] sin⁴(x) dx', answer: '3π/16' },
        { integral: '∫[0 to 1] (x³ / √(x² + 1)) dx', answer: '(2 - √2) / 3' },
        { integral: '∫[0 to 1] ln(x) dx', answer: '-1' }
    ],
    impossible: [
        { integral: '∫[0 to ∞] e^(-x²) dx', answer: '√π / 2' },
        { integral: '∫[0 to ∞] (sin(x) / x) dx', answer: 'π / 2' },
        { integral: '∫[0 to 1] (x²-1) / ln(x) dx', answer: '-ln(3)' },
        { integral: '∫[0 to ∞] e^(-x) x^(3/2) dx', answer: '3√π / 4' },
        { integral: '∫[0 to π] 1 / (5+4cos x) dx', answer: 'π / 3' },
        { integral: '∫[0 to ∞] x / (e^x - 1) dx', answer: 'π² / 6' },
        { integral: '∫[0 to 1] ln³(x) dx', answer: '-6' },
        { integral: '∫[0 to ∞] ln(x) / (x²+1) dx', answer: '0' },
        { integral: '∫[0 to ∞] sin²(x) / x² dx', answer: 'π / 2' },
        { integral: '∫[0 to 1] 1 / √(ln(1/x)) dx', answer: '√π' },
        { integral: '∫[0 to 1] x²(1-x²)^(-1/2) dx', answer: 'π / 4' },
        { integral: '∫[0 to ∞] (e^(-2x) - e^(-3x)) / x dx', answer: 'ln(3/2)' },
        { integral: '∫[0 to 1] x⁴(1-x²)^(1/2) dx', answer: 'π / 32' },
        { integral: '∫[0 to π/2] ln(sin x) dx', answer: '-(π/2) ln(2)' },
        { integral: '∫[0 to ∞] x³ / (x⁸+1) dx', answer: 'π / 8' },
        { integral: '∫[0 to ∞] 1 / ((x+1)√x) dx', answer: 'π' },
        { integral: '∫[0 to π] 1 / (1+sin² x) dx', answer: 'π / √2' },
        { integral: '∫[0 to ∞] ln(1+x) / (x√x) dx', answer: '2π' },
        { integral: '∫[0 to 1] ln(x) / √(1-x) dx', answer: '4ln(2) - 4' },
        { integral: '∫[0 to ∞] xe^(-x²) dx', answer: '1 / 2' },
        { integral: '∫[0 to π] sin(x) / x dx', answer: 'π / 2' },
        { integral: '∫[0 to 1] 1 / x^(1/2) dx', answer: '2' },
        { integral: '∫[0 to ∞] 1 / (x⁴+1) dx', answer: 'π / (2√2)' },
        { integral: '∫[0 to π/2] sin x ln(sin x) dx', answer: 'ln(2) - 1' },
        { integral: '∫[0 to ∞] sin(ax) / x dx', answer: 'π / 2' }
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
