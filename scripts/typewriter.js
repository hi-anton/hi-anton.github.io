const halfWords = ['visioned', 'imagined', 'defined', 'thought', 'invented', 'fined', 'discovered'];

const TYPE_DELAY = 150;
const DELETE_DELAY = 130;
const HOLD_DELAY = 3000;
const PAUSE_DELAY = 1000;

const typewriter = document.querySelector('.typewriter');
const wordElement = document.querySelector('.typewriter-word');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function deleteWord() {
  while (wordElement.textContent.length > 0) {
    wordElement.textContent = wordElement.textContent.slice(0, -1);
    await wait(DELETE_DELAY);
  }
}

async function typeWord(word) {
  for (const char of word) {
    wordElement.textContent += char;
    await wait(TYPE_DELAY + Math.random() * 60 - 30);
  }
}

async function run() {
  let index = 0;

  while (true) {
    await wait(HOLD_DELAY);

    typewriter.classList.add('is-typing');
    await deleteWord();
    typewriter.classList.remove('is-typing');
    await wait(PAUSE_DELAY);

    index = (index + 1) % halfWords.length;
    typewriter.classList.add('is-typing');
    await typeWord(halfWords[index]);
    typewriter.classList.remove('is-typing');
  }
}

if (typewriter && wordElement && !reducedMotion) {
  run();
}
