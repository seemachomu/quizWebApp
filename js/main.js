document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentlyActive = document.querySelector('.faq-question.active');

            // If there's an active question and it's not the one we just clicked, deactivate it
            if (currentlyActive && currentlyActive !== question) {
                currentlyActive.classList.remove('active');
                const otherIcon = currentlyActive.querySelector('.faq-icon');
                if (otherIcon) {
                    otherIcon.textContent = '+';
                }
            }

            // Toggle the active state of the clicked question
            question.classList.toggle('active');
            const icon = question.querySelector('.faq-icon');
            if (question.classList.contains('active')) {
                if (icon) icon.textContent = '−'; // Use minus sign for open state
            } else {
                if (icon) icon.textContent = '+';
            }
        });
    });
});
