
<script>
    import "../style.css";
    import Navigation from "$lib/navigation.svelte";
    import Footer from "$lib/footer.svelte";
    import { defineConfig, searchForWorkspaceRoot } from 'vite'
    
</script>
<Navigation/>
<slot/>
<br>
<Footer/>