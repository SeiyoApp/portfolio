<script>
    import Button from './cta.svelte';
</script>

<nav class="header">
    <a href="/" class="header__logo">Samuel Humeau</a>
    <div class="header__links">
        <a href="/about" class="text-link">Qui suis-je ?</a>
        <a href="/projets" class="text-link">Mes projets</a>
        <Button 
            text="Me contacter"
            href="/contact"
            iconName="chevron-right"
            iconPosition="right"
            variant="primary"
        />
    </div>
</nav>