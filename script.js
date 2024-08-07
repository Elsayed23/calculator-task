const screen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.button');
let resetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            screen.value = '';
            resetScreen = false;
        } else if (value === 'del') {
            screen.value = screen.value.slice(0, -1);
        } else if (value === '=') {
            try {
                if (screen.value.includes('/0')) {
                    screen.value = 'cannot be devided by 0';
                } else {
                    screen.value = eval(screen.value);
                }
                resetScreen = true;
            } catch {
                screen.value = 'خطأ';
                resetScreen = true;
            }
        } else {
            if (resetScreen) {
                screen.value = '';
                resetScreen = false;
            }

            const lastChar = screen.value.slice(-1);
            if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
                return;
            }

            screen.value += value;
        }
    });
});