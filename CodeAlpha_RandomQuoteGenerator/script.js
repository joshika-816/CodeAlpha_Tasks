const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { quote: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { quote: "If you want to achieve greatness stop asking for permission.", author: "Anonymous" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Dream bigger. Do bigger.", author: "Unknown" },
  { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
  { quote: "Great things never come from comfort zones.", author: "Anonymous" },
  { quote: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown" },
  { quote: "Dream it. Wish it. Do it.", author: "Unknown" },
  { quote: "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.", author: "Unknown" },
  { quote: "The key to success is to focus on goals, not obstacles.", author: "Unknown" },
  { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "When you have a dream, you’ve got to grab it and never let go.", author: "Carol Burnett" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Don’t wait for opportunity. Create it.", author: "George Bernard Shaw" },
  { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
  { quote: "Your limitation—it’s only your imagination.", author: "Unknown" },
  { quote: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
  { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
  { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
  { quote: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
  { quote: "Small steps in the right direction can turn out to be the biggest step of your life.", author: "Unknown" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteText.textContent = `"${randomQuote.quote}"`;
  authorText.textContent = `— ${randomQuote.author}`;
}

newQuoteBtn.addEventListener("click", showRandomQuote);

showRandomQuote();
