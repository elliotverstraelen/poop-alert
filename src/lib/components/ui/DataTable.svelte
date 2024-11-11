<script lang="ts">
    import { getCoreRowModel, type ColumnDef } from "@tanstack/table-core";
    import { createSvelteTable } from "$lib/components/ui/data-table/data-table.svelte"; // Import your custom table setup
    import * as Table from "$lib/components/ui/table"; // Adjust this to the correct path
    import { FlexRender } from "$lib/components/ui/data-table"; // Adjust path if necessary
    import { writable } from "svelte/store";

    // Define props for data and columns
    export let data: any[] = [];
    export let columns: ColumnDef<any>[] = [];

    // Initialize the table instance using createSvelteTable
    const table = createSvelteTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });
</script>

<div class="rounded-md border">
    <!-- Root table structure -->
    <Table.Root>
        <Table.Header>
            <!-- Render headers -->
            {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
                <Table.Row>
                    {#each headerGroup.headers as header (header.id)}
                        <Table.Head>
                            {#if !header.isPlaceholder}
                                <FlexRender
                                    content={header.column.columnDef.header}
                                    context={header.getContext()}
                                />
                            {/if}
                        </Table.Head>
                    {/each}
                </Table.Row>
            {/each}
        </Table.Header>
        <Table.Body>
            <!-- Render rows -->
            {#each table.getRowModel().rows as row (row.id)}
                <Table.Row data-state={row.getIsSelected() && "selected"}>
                    {#each row.getVisibleCells() as cell (cell.id)}
                        <Table.Cell>
                            <FlexRender
                                content={cell.column.columnDef.cell}
                                context={cell.getContext()}
                            />
                        </Table.Cell>
                    {/each}
                </Table.Row>
            {:else}
                <!-- No results message -->
                <Table.Row>
                    <Table.Cell
                        colspan={columns.length}
                        class="h-24 text-center"
                    >
                        No results.
                    </Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
</div>
