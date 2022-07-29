<script lang="ts">
    import type { Toast } from "$models/toast";
    import { fly } from 'svelte/transition';

    export let toast: Toast | undefined;
</script>

{#if toast}
<div class="absolute top-5 w-full flex justify-center z-50" transition:fly="{{y: -50, duration: 300}}">
    <div class="{toast.type} px-5 py-2 rounded w-56 text-center">
        <p>{toast.message}</p>
    </div>
</div>
{/if}

<style lang="postcss">

    .success {
        @apply bg-emerald-200 text-green-900;
    }

    .danger {
        @apply bg-red-200 text-red-900;
    }

    .warning {
        @apply bg-orange-200 text-orange-900;
    }

    .info {
        @apply bg-blue-200 text-blue-900;
    }
</style>