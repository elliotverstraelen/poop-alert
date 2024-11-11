// src/routes/api/coins/+server.ts
import type { RequestHandler } from '@sveltejs/kit';

console.log("Coins API route is loaded");

export const GET: RequestHandler = async () => {
    try {
        const response = await fetch("https://api.coincap.io/v2/assets");
        const data = await response.json();

        // Add sentiment and filter fields if needed
        const coins = data.data.map((coin: {
            id: any;
            name: any;
            symbol: any;
            marketCapUsd: string;
            priceUsd: string;
            volumeUsd24Hr: string;
            changePercent7d: string;
        }) => ({
            id: coin.id,
            name: coin.name,
            symbol: coin.symbol,
            marketCap: parseFloat(coin.marketCapUsd),
            price: parseFloat(coin.priceUsd),
            volume24h: parseFloat(coin.volumeUsd24Hr),
            change7d: parseFloat(coin.changePercent7d),
            sentiment: Math.random() * 0.15, // Placeholder for sentiment
        }));

        return new Response(JSON.stringify(coins), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch data' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
