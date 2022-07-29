<script lang="ts">
    export let value = '';
</script>

<div class="w-4/5 bg-secondary-100 flex flex-row rounded-full">
    <input type="text" placeholder="Pesquisar..." bind:value={value} class="w-4/5 bg-transparent text-secondary-900 placeholder:text-secondary-600 focus:outline-secondary-900 rounded-l-full px-3 py-1">
    <div class="w-1/5 flex justify-center items-center">
        <span class="material-icons-round mr-1 text-secondary-900">
            search
        </span>
    </div>
</div>