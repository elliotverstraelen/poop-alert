<script lang="ts">
    import type { ColumnDef } from "@tanstack/table-core";
    import DataTable from "$lib/components/ui/DataTable.svelte";
    import { Skeleton } from "$lib/components/ui/skeleton";
    import { monthlyCoins } from "./data/monthly-coins"; // Adjust path if needed
    import { monthlyColumns } from "./columns/monthly-columns"; // Adjust path if needed

    // Define loading state for displaying skeletons (optional if you simulate delay)
    let loading = true;

    // Optional delay to simulate loading state (if no actual fetch is done)
    setTimeout(() => {
        loading = false;
    }, 1000); // 1-second delay for demonstration

    console.log("Monthly Coins:", monthlyCoins);
</script>

<!-- Hero Section -->
<section class="h-screen flex flex-col items-center justify-center bg-gray-100">
    <h1 class="text-4xl font-bold mb-4">Welcome to 💩 Tracker</h1>
    <p class="text-lg mb-6">
        Discover the most underperforming coins in the market.
    </p>
    <button
        class="bg-blue-500 text-white px-4 py-2 rounded"
        on:click={() =>
            document
                .getElementById("worst-coins")
                .scrollIntoView({ behavior: "smooth" })}
    >
        View Worst Coins
    </button>
</section>

<!-- This Month's Worst Coins Section -->
<section id="worst-coins" class="py-16 bg-white">
    <h2 class="text-3xl font-semibold text-center mb-8">
        This Month's Worst Coins
    </h2>
    {#if loading}
        <!-- Display skeletons while loading data -->
        <div class="grid gap-4">
            {#each Array(5) as _}
                <Skeleton class="h-8 w-full" />
            {/each}
        </div>
    {:else}
        <!-- DataTable Wrapper with Padding and Border Styling -->
        <div class="p-4 border rounded-md shadow-md bg-white">
            <DataTable
                columns={monthlyColumns}
                data={monthlyCoins}
            />
        </div>
    {/if}
</section>
