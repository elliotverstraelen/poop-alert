<script lang="ts">
    import { onMount } from "svelte";
    import { supabase } from "../../supabaseClient";
    import { goto } from "$app/navigation";

    let message = "Confirming your email...";

    onMount(async () => {
        const url = new URL(window.location.href);
        const accessToken = url.hash.match(/access_token=([^&]*)/)?.[1];
        const type = url.hash.match(/type=([^&]*)/)?.[1];
        const email = url.searchParams.get("email");

        // email param. extracted from URL -> necessary for verifyOtp to work.
        if (accessToken && type === "signup" && email) {
            const { error } = await supabase.auth.verifyOtp({
                email,
                token: accessToken,
                type: "signup",
            });

            if (error) {
                message = `Error confirming email: ${error.message}`;
            } else {
                message = "Email confirmed successfully!";
                // Redirect to login or home page after confirmation
                setTimeout(() => {
                    goto("/login");
                }, 3000);
            }
        } else {
            message = "Invalid confirmation link.";
        }
    });
</script>

<main class="flex h-screen w-full items-center justify-center px-4">
    <div class="text-center">
        <h1 class="text-2xl">{message}</h1>
    </div>
</main>
