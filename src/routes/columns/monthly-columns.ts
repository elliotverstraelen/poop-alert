import type { ColumnDef } from '@tanstack/table-core';
import type { Shitcoin } from '../data/monthly-coins';

// Formatter for full display with currency symbol
const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

// Compact formatter for large numbers (T, B, M, K)
const compactFormatter = (value: number): string => {
    if (value >= 1_000_000_000_000) return `$${(value / 1_000_000_000_000).toFixed(2)}T`;
    if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(2)}B`;
    if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(2)}M`;
    if (value >= 1_000) return `$${(value / 1_000).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
};

// Column definitions with compact formatting for large numbers
export const monthlyColumns: ColumnDef<Shitcoin>[] = [
    {
        accessorKey: 'name',
        header: 'Name',
        enableSorting: true,
    },
    {
        accessorKey: 'symbol',
        header: 'Symbol',
        enableSorting: true,
        cell: ({ getValue }) => `$${getValue()}`, // Add $ prefix to symbol
    },
    {
        accessorKey: 'marketCap',
        header: 'Market Cap',
        enableSorting: true,
        cell: ({ getValue }) => compactFormatter(getValue()), // Apply compact formatting to market cap
    },
    {
        accessorKey: 'price',
        header: 'Price (USD)',
        enableSorting: true,
        cell: ({ getValue }) => compactFormatter(getValue()), // Apply compact formatting to price
    },
    {
        accessorKey: 'volume24h',
        header: '24h Volume',
        enableSorting: true,
        cell: ({ getValue }) => compactFormatter(getValue()), // Apply compact formatting to 24h volume
    },
    {
        accessorKey: 'change7d',
        header: '7d Change (%)',
        enableSorting: true,
        cell: ({ getValue }) => getValue() ? `${getValue()}%` : 'N/A', // Display 'N/A' if null
    },
    {
        accessorKey: 'sentiment',
        header: 'Sentiment (%)',
        enableSorting: true,
        cell: ({ getValue }) => `${(getValue() * 100).toFixed(2)}%`, // Convert to percentage and format to 2 decimals
    },
];
