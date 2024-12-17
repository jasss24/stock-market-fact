const facts = [
    "The stock market allows investors to buy and sell shares of publicly traded companies. 📈",
    "The New York Stock Exchange (NYSE) is the largest stock exchange in the world by market capitalization. 🏛️",
    "The stock market is influenced by economic indicators, interest rates, and corporate earnings. 📊",
    "The Dow Jones Industrial Average (DJIA) is one of the oldest and most well-known stock market indices. 📉",
    "A bull market is characterized by rising stock prices, while a bear market is characterized by falling stock prices. 🐂🐻",
    "Stock prices are determined by supply and demand dynamics in the market. ⚖️",
    "The stock market can be volatile, with prices fluctuating due to various factors. 🌪️",
    "Investors can diversify their portfolios by investing in a variety of stocks across different sectors. 📚",
    "Initial Public Offerings (IPOs) are when a company first sells its shares to the public. 🚀",
    "The stock market plays a crucial role in the economy by providing companies with access to capital. 💼"
];

document.getElementById('generateFactBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});
