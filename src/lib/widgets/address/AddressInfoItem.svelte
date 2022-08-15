<script lang="ts">
import { showNotification } from "$providers/notifications";
import { ToastType } from "$src/lib/models/toast";

    export let label: string;
    export let value: string;

    export let flag: string

    const validFlags = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

    let isFlagValid = flag && validFlags.includes(flag);

    function copyValue() {
        navigator.clipboard.writeText(value);
        showNotification(`${label} copiado!`, {type: ToastType.Success});
    }

</script>

{#if label && value}
<div class="w-full flex justify-between items-center">
    <div class="py-2 w-11/12">
        <h1 class="text-xs text-primary-500 font-semibold tracking-wider mb-1">{label}</h1>
        <div class="flex">
            <div class="flex flex-row justify-start items-center w-4/5">
                {#if flag && isFlagValid}
                    <img src="/images/flags/{flag}.png" width="30" class="mr-1" alt="{label}">
                {:else if flag && !isFlagValid}
                    <img src="/images/flags/Unknown.png" width="30" class="mr-1" alt="{label}">
                {/if}
                <span class="font-semibold ml-1 text-primary-900">{value}</span>
            </div>
        </div>
    </div>
    <div class="w-1/12 flex justify-center">
        <button class="p-2 flex active:scale-90 text-2xl ml-1 transition-transform" on:click={copyValue}>
            <span class="material-icons-round text-secondary-600">
                content_copy
            </span>
        </button>
    </div>
</div>
{:else}
<span></span>
{/if}