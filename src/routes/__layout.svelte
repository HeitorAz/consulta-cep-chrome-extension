<script lang="ts">
	import type { Toast } from '$models/toast';
	import { addresses,toast } from '$src/stores';
	import BottomNavigation from '$widgets/shared/BottomNavigation.svelte';
	import Header from '$widgets/shared/Header.svelte';
	import ToastComponent from '$widgets/shared/ToastComponent.svelte';
	import '../app.css';

	let toastConfig: Toast | undefined;
	toast.subscribe((toast) => {
		if(toast) {
			toastConfig = toast;
		} else {
			toastConfig = undefined;
		}
	})

	addresses.subscribe((val) => {
		console.log('addresses changed', val);
	});
</script>

<header />

<main class="w-96 bg-secondary-200 overflow-hidden custom-scroll">
	{#if toastConfig}
		<ToastComponent toast={toastConfig}/>
	{/if}
	<Header />
	<div class="h-80">
		<slot />
	</div>
	<BottomNavigation />
</main>
