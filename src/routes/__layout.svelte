<script lang="ts">
import BottomNavigation from '$lib/BottomNavigation.svelte';
import Header from '$lib/Header.svelte';
import type { Toast } from '$lib/models/toast';
import ToastComponent from '$lib/ToastComponent.svelte';
import { addresses,toast } from '../stores';


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
