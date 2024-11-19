<script context="module" lang="ts">
    export function load({ error, status }: { error: Error; status: number }) {
        return {
            props: {
                error,
                status,
            },
        };
    }
</script>

<script lang="ts">
    export let error;
    export let status;
</script>

<svelte:head>
    <title>{status} - {error.message}</title>
</svelte:head>

<main class="error-page">
    <h1>{status}</h1>
    <p>{error.message}</p>
    <p>
        Sorry, the page you are looking for does not exist. OK, maybe i just
        forgot to push it to the repo 🙄
    </p>
    <a href="/">Go back to the homepage</a>
</main>

<style>
    .error-page {
        text-align: center;
        margin-top: 50px;
    }
    .error-page h1 {
        font-size: 5rem;
    }
    .error-page p {
        font-size: 1.5rem;
    }
    .error-page a {
        color: #0070f3;
        text-decoration: none;
    }
</style>
