document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const ballsContainer = document.getElementById('balls-container');

    generateBtn.addEventListener('click', generateLottoNumbers);

    function generateLottoNumbers() {
        // Disable button during animation
        generateBtn.disabled = true;
        
        // Clear previous balls
        ballsContainer.innerHTML = '';
        
        // Generate 6 unique random numbers between 1 and 45
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNum);
        }
        
        // Convert to array and sort
        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        
        // Display numbers with animation delay
        sortedNumbers.forEach((num, index) => {
            setTimeout(() => {
                const ball = createBall(num);
                ballsContainer.appendChild(ball);
                
                // Re-enable button after last ball appears
                if (index === 5) {
                    setTimeout(() => {
                        generateBtn.disabled = false;
                    }, 600); // Wait for the popIn animation to finish
                }
            }, index * 400); // 400ms delay between each ball
        });
    }

    function createBall(number) {
        const ballDiv = document.createElement('div');
        ballDiv.className = 'ball show';
        ballDiv.textContent = number;
        
        // Assign color based on number range (Korean Lotto standard)
        if (number <= 10) {
            ballDiv.classList.add('color-yellow');
        } else if (number <= 20) {
            ballDiv.classList.add('color-blue');
        } else if (number <= 30) {
            ballDiv.classList.add('color-red');
        } else if (number <= 40) {
            ballDiv.classList.add('color-gray');
        } else {
            ballDiv.classList.add('color-green');
        }
        
        return ballDiv;
    }
});
