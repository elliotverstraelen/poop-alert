import type { ColumnDef } from '@tanstack/table-core';
import type { Shitcoin } from '../data/monthly-coins';

export const monthlyColumns: ColumnDef<Shitcoin>[] = [
    { accessorKey: 'name', header: 'Name' },
    { accessorKey: 'symbol', header: 'Symbol' },
    { accessorKey: 'marketCap', header: 'Market Cap' },
    { accessorKey: 'price', header: 'Price' },
    { accessorKey: 'volume24h', header: '24h Volume' },
    { accessorKey: 'change7d', header: '7d Change (%)' },
    { accessorKey: 'sentiment', header: '💩 Sentiment' },
];
