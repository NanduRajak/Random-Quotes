// Quotes array
const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "Arise, awake, and stop not until the goal is reached",
    author: "Swamy Vivekananda",
  },
  {
    text: "If you don't take risks, you can't create a future.",
    author: "Monkey.D.Luffy",
  },
  {
    text: "Searching for someone to blame is such a pain",
    author: "Satoru Gojo",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
];

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteBtn = document.getElementById("new-quote");

function getQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

function displayQuote() {
  const randomQuote = getQuote();
  quoteText.textContent = `${randomQuote.text}`;
  quoteAuthor.textContent = randomQuote.author
    ? `- ${randomQuote.author}`
    : "-Unknown";
}

quoteBtn.addEventListener("click", displayQuote);
