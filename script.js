document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.sound-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const soundFile = button.getAttribute('data-sound');
            playSound(soundFile);
        });
    });

    function playSound(soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
});
