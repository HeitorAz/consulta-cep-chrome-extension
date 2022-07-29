<script lang="ts">
    import { afterNavigate,goto } from '$app/navigation';
    import type Address from '$models/address';
    import { ToastType } from '$src/lib/models/toast';
    import { showNotification } from '$src/providers/notifications';
    import FavoriteButton from '$widgets/shared/FavoriteButton.svelte';

    export let address: Address;

    let previousPage : string = '/';
    afterNavigate((navigation) => {
        previousPage = navigation.from?.pathname || '/';
    })

    function copyAddressJSON() {
        navigator.clipboard.writeText(JSON.stringify(address.information, null, 4));
        showNotification('JSON copiado!', {type: ToastType.Success});
    }

    function goBack() {
        goto(previousPage);
    }

</script>

<div class="mb-2 flex flex-row justify-between">
    <button on:click={goBack} class="flex items-center">
        <span class="material-icons-round text-base text-secondary-600 mr-1">
            arrow_back_ios
        </span>
      <span class="text-secondary-600 text-sm">Voltar</span>
    </button>
    <div class="flex flex-row justify-end items-center">
        <button class="mr-2" on:click={copyAddressJSON}>
            <span class="material-icons-round text-2xl text-secondary-700">
                ios_share
            </span>
        </button>
        <FavoriteButton {address}/>
    </div>
</div>