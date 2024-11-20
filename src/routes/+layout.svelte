<script lang="ts">
	import "../app.css";
	import { Button } from "$lib/components/ui/button";
	import { goto } from "$app/navigation";
	import {
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
	} from "flowbite-svelte";

	let loggedIn = false;
	let currentPath = "";

	// Function to navigate to the login page
	function redirectToLogin() {
		goto("/login");
	}

	// Function to navigate to the signup page
	function redirectToSignup() {
		goto("/signup");
	}

	// Toggle state for preview testing
	function toggleLoggedIn() {
		loggedIn = !loggedIn;
	}
</script>

{#if currentPath !== "/login"}
	<Navbar>
		<NavBrand href="/">
			<span class="emoji me-3">💩</span>
			<span
				class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>
				Poop Alert
			</span>
		</NavBrand>
		<div class="flex items-center md:order-2 space-x-4">
			{#if loggedIn}
				<!-- Avatar and Dropdown for Logged-in Users -->
				<Avatar id="avatar-menu" src="/images/profile-picture-3.webp" />
				<Dropdown placement="bottom" triggeredBy="#avatar-menu">
					<DropdownHeader>
						<span class="block text-sm">Bonnie Green</span>
						<span class="block truncate text-sm font-medium"
							>name@flowbite.com</span
						>
					</DropdownHeader>
					<DropdownItem>Dashboard</DropdownItem>
					<DropdownItem>Settings</DropdownItem>
					<DropdownItem>Earnings</DropdownItem>
					<DropdownDivider />
					<DropdownItem on:click={toggleLoggedIn}
						>Sign out</DropdownItem
					>
				</Dropdown>
			{:else}
				<!-- Login and Sign-Up Buttons for Logged-out Users -->
				<Button variant="default" onclick={redirectToLogin}>
					Login
				</Button>
				<Button variant="secondary" onclick={redirectToSignup}>
					Sign up
				</Button>
			{/if}
			<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />
		</div>
		<NavUl>
			<NavLi href="/" active={currentPath === "/"}>Home</NavLi>
			<NavLi href="/about" active={currentPath === "/about"}>About</NavLi>
			<NavLi
				href="/docs/components/navbar"
				active={currentPath === "/docs/components/navbar"}>Navbar</NavLi
			>
			<NavLi href="/pricing" active={currentPath === "/pricing"}
				>Pricing</NavLi
			>
			<NavLi href="/contact" active={currentPath === "/contact"}
				>Contact</NavLi
			>
		</NavUl>
	</Navbar>
{/if}

<!-- Render the child content -->
<slot></slot>

<style>
	.emoji {
		font-size: 1.75rem;
		vertical-align: middle;
	}
	.flex {
		display: flex;
		align-items: center;
	}
	.space-x-4 > :not([hidden]) ~ :not([hidden]) {
		margin-left: 1rem;
	}
</style>
