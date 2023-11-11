<script>
    import { setContext } from "svelte"
    import { StreamJamClient, RenderComponent } from "streamjam"
    import component_map from './components/index'
    import Root from "./components/Root.svelte"

    const client = new StreamJamClient('ws://localhost:7755/client-1')
    let has_client_connected = client.connect()
    setContext('streamjam', client)
    setContext('__parentId', 'root')
</script>

{#await has_client_connected}
    Connecting
{:then value}
    {#await client.getState() then appState}
        {#if appState.length}
            <p>Rendering from prior state</p>
            {#each appState as child}
                <RenderComponent component_map="{component_map}" component="{child}"/>
            {/each}
        {:else}
            <Root />
        {/if}
    {/await}
{/await}
