<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
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
                <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                />
            </div>
            <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" required />
            </div>
            <div class="grid gap-2">
                <Label for="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" class="w-full">Sign Up</Button>
            <Button variant="outline" class="w-full">Sign Up with Google</Button
            >
        </div>
        <div class="mt-4 text-center text-sm">
            Already have an account?
            <a href="/login" class="underline"> Log in </a>
        </div>
    </Card.Content>
</Card.Root>
