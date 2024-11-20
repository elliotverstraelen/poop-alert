<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";

    let fullName = "";
    let email = "";
    let password = "";
    let confirmPassword = "";
    let errorMessage = "";

    const handleSignup = async () => {
        if (password !== confirmPassword) {
            errorMessage = "Passwords do not match";
            return;
        }

        try {
            // Normalize email to lowercase
            const normalizedEmail = email.toLowerCase();

            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName,
                    email: normalizedEmail,
                    password,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                errorMessage =
                    "Signup successful! Please check your email to confirm your account.";
            } else {
                errorMessage =
                    result.error || "An error occurred during signup.";
            }
        } catch (error) {
            errorMessage = "An error occurred during signup.";
        }
    };
</script>

<Card.Root class="mx-auto max-w-sm">
    <Card.Header>
        <Card.Title class="text-2xl">Sign Up</Card.Title>
        <Card.Description
            >Create an account by filling in the information below</Card.Description
        >
    </Card.Header>
    <Card.Content>
        <div class="grid gap-4">
            <div class="grid gap-2">
                <Label for="name">Full Name</Label>
                <Input
                    id="name"
                    type="text"
                    bind:value={fullName}
                    placeholder="John Doe"
                    required
                />
            </div>
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    bind:value={email}
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    bind:value={password}
                    required
                />
            </div>
            <div class="grid gap-2">
                <Label for="confirm-password">Confirm Password</Label>
                <Input
                    id="confirm-password"
                    type="password"
                    bind:value={confirmPassword}
                    required
                />
            </div>
            {#if errorMessage}
                <div class="text-red-500">{errorMessage}</div>
            {/if}
            <Button type="button" class="w-full" onclick={handleSignup}
                >Sign Up</Button
            >
            <Button variant="outline" class="w-full">Sign Up with Google</Button
            >
        </div>
        <div class="mt-4 text-center text-sm">
            Already have an account?
            <a href="/login" class="underline"> Log in </a>
        </div>
    </Card.Content>
</Card.Root>
