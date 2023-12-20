document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const cardCounter = document.getElementById('card-counter');
    const words = [
        { en: 'Apple', ru: 'Яблоко' },
        { en: 'Tree', ru: 'Дерево' },
        // Добавьте здесь больше слов
    ];

    let currentCardIndex = 0;

    function updateCardCounter() {
        cardCounter.textContent = `${currentCardIndex + 1}/${words.length}`;
    }

    function createCard(word) {
        const card = document.createElement('div');
        card.className = 'card';

        const cardFront = document.createElement('div');
        cardFront.className = 'card-front';
        cardFront.textContent = word.en;

        const cardBack = document.createElement('div');
        cardBack.className = 'card-back';
        cardBack.textContent = word.ru;

        card.appendChild(cardFront);
        card.appendChild(cardBack);

        return card;
    }

    function showNextCard() {
        const nextCard = createCard(words[currentCardIndex]);
        if (cardContainer.firstChild) {
            cardContainer.replaceChild(nextCard, cardContainer.firstChild);
        } else {
            cardContainer.appendChild(nextCard);
        }

        updateCardCounter();
        currentCardIndex = (currentCardIndex + 1) % words.length;
    }

    cardContainer.addEventListener('click', () => {
        const currentCard = cardContainer.firstChild;
        if (currentCard.classList.contains('flipped')) {
            showNextCard();
        } else {
            currentCard.classList.add('flipped');
        }
    });

    // Показываем первую карточку и обновляем счётчик при загрузке
    showNextCard();
});
