# 💩 Poop Alert (or "Crypto Crap Tracker" - Find the Worst Coins)

[🔗Check it out](https://poop-alert.vercel.app/)

**Poop Alert** is a simple web application that tracks the worst-performing cryptocurrencies. This project allows users to view coins that are losing value, with metrics like 7-day percentage drop, market cap, price, and market sentiment. Built as a beginner-friendly project, it serves as a fun and educational way to learn about cryptocurrency trends, while practicing web development skills with SvelteKit and ShadCN.

## Project Overview
The main purpose of Poop Alert is to highlight underperforming or "trash" coins in the cryptocurrency market. The app pulls real-time data from the CoinCap API and displays it in a clean, easy-to-navigate table. Users can explore coins with the worst performance metrics, such as low market cap or poor sentiment scores.

### Key Features
- **"Worst Coins" Dashboard**: Displays the most underperforming cryptocurrencies with sortable columns and compact numerical formatting.
- **Sentiment Analysis**: Shows a calculated sentiment score for each coin to indicate market perception.
- **Custom Metric (Poo Score)**: A custom score combining metrics like volatility and low liquidity.
- **Dynamic Sorting and Filtering**: Sort coins by various metrics (market cap, price, sentiment, etc.).
- **Watchlist & Alerts (Planned)**: Allows users to track specific coins and receive alerts on major price drops.
- **"Shady Coin" Warning Tags**: Highlights coins that may be risky or suspicious due to low volume or erratic behavior.

## Technology Stack
This project uses a modern frontend technology stack focused on simplicity and performance:

- [**SvelteKit**](https://svelte.dev/): A modern frontend framework that makes it easy to build fast, interactive web applications.
- [**ShadCN-Svelte**](next.shadcn-svelte.com): A component library that provides a clean and consistent design for UI elements, making the UI development process simpler and more intuitive.
- [**TypeScript**](typescriptlang.org): Adds static typing, which helps catch errors early and improves overall code quality.
- [**CoinCap API**](docs.coincap.io): Provides up-to-date cryptocurrency data, including market cap, price, volume, and more.
- [**CSS (Tailwind CSS)**](tailwindcss.com): For quick and flexible styling, especially for responsive design.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/poop-alert.git
   cd poop-alert
   npm run dev
   ````
