let allItems = [];
let filteredItems = [];
let currentIndex = 0;
let currentCategory = 'all';

// DOM Elements
const finnishPhraseEl = document.getElementById('finnish-phrase');
const englishTranslationEl = document.getElementById('english-translation');
const categoryLabelEl = document.getElementById('category-label');
const counterEl = document.getElementById('counter');
const progressFillEl = document.getElementById('progress-fill');
const card = document.querySelector('.flashcard');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

// Initialize vocabulary data
function initVocabulary() {
    try {
        // Flatten all items with category info
        allItems = [];
        vocabularyData.words.forEach(category => {
            category.items.forEach(item => {
                allItems.push({
                    ...item,
                    category: category.category
                });
            });
        });
        
        filteredItems = [...allItems];
        updateDisplay();
    } catch (error) {
        console.error('Error loading vocabulary:', error);
        finnishPhraseEl.textContent = 'Error loading data';
        englishTranslationEl.textContent = 'Please refresh the page';
    }
}

function updateDisplay() {
    if (filteredItems.length === 0) {
        finnishPhraseEl.textContent = 'No items in this category';
        englishTranslationEl.textContent = 'Try selecting a different category';
        categoryLabelEl.textContent = '';
        counterEl.textContent = '0 / 0';
        progressFillEl.style.width = '0%';
        return;
    }

    const currentItem = filteredItems[currentIndex];
    finnishPhraseEl.textContent = currentItem.finnish;
    englishTranslationEl.textContent = currentItem.english;
    categoryLabelEl.textContent = formatCategoryName(currentItem.category);
    
    // Update counter
    counterEl.textContent = `${currentIndex + 1} / ${filteredItems.length}`;
    
    // Update progress bar
    const progress = ((currentIndex + 1) / filteredItems.length) * 100;
    progressFillEl.style.width = `${progress}%`;
}

function formatCategoryName(category) {
    const names = {
        'greetings': 'Greetings',
        'basics': 'Basics',
        'directions': 'Directions',
        'cycling': 'Cycling',
        'camping': 'Camping',
        'food': 'Food & Drink',
        'accommodation': 'Accommodation',
        'shopping': 'Shopping',
        'emergencies': 'Emergency',
        'social': 'Social',
        'nature': 'Nature'
    };
    return names[category] || category;
}

function flipCard() {
    card.classList.toggle('flipped');
}

function nextItem() {
    if (filteredItems.length === 0) return;
    
    card.classList.remove('flipped');
    
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % filteredItems.length;
        updateDisplay();
    }, 150);
}

function prevItem() {
    if (filteredItems.length === 0) return;
    
    card.classList.remove('flipped');
    
    setTimeout(() => {
        currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        updateDisplay();
    }, 150);
}

function filterByCategory(category) {
    currentCategory = category;
    
    // Update active button
    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Filter items
    if (category === 'all') {
        filteredItems = [...allItems];
    } else {
        filteredItems = allItems.filter(item => item.category === category);
    }
    
    currentIndex = 0;
    updateDisplay();
}

// Event Listeners
card.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextItem);
prevBtn.addEventListener('click', prevItem);

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterByCategory(btn.dataset.category);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowRight':
            nextItem();
            break;
        case 'ArrowLeft':
            prevItem();
            break;
        case ' ':
            e.preventDefault();
            flipCard();
            break;
        case '1':
            filterByCategory('greetings');
            break;
        case '2':
            filterByCategory('basics');
            break;
        case '3':
            filterByCategory('directions');
            break;
        case '4':
            filterByCategory('cycling');
            break;
        case '5':
            filterByCategory('food');
            break;
        case '6':
            filterByCategory('accommodation');
            break;
        case '7':
            filterByCategory('shopping');
            break;
        case '8':
            filterByCategory('emergencies');
            break;
        case '9':
            filterByCategory('social');
            break;
        case '0':
            filterByCategory('nature');
            break;
    }
});

// Initialize
initVocabulary();
