<script lang="ts">
	import { toast } from '$src/stores';
	import BottomNavigation from '$widgets/shared/BottomNavigation.svelte';
	import Header from '$widgets/shared/Header.svelte';
	import ToastComponent from '$widgets/shared/ToastComponent.svelte';
	import '../app.css';
</script>

<header />

<main class="w-96 bg-secondary-200 overflow-hidden custom-scroll">
	<ToastComponent toast={$toast}/>
	<Header />
	<div class="h-80">
		<slot />
	</div>
	<BottomNavigation />
</main>
