<script>
    import Button from '../components/cta.svelte';
</script>

<div class="hero">
    <div class="hero__left">
        <h1>Hello world!</h1>
        <p>This is Samuel, blablabla...</p>
        <a href="https://samuel-humeau.notion.site/Mon-portfolio-419c3a4839054069828e61410d67fe0f" target="_blank" style="font-style: italic; opacity:0.6" class="text-link">Notion portfolio</a>
        <Button 
            text="Découvrir mes projets"
            href="/projets"
            iconName="chevron-left"
            iconPosition="left"
            variant="primary"
        />
    </div>
    <div class="hero__right">
        <img class="hero__right__image" src="profile-cover.jpg" alt="profil Samuel Humeau">
    </div>
</div>

<div class="scroll-incitation">
    <a href="#about-me">
        <img class="scroll-incitation__icon" src="icons/chevron-down.svg" alt="icon">
    </a>
</div>

<div id="about-me">
    <div>

    </div>
</div>



<style lang="scss">

    .hero {
        height: 80vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        gap: 4vw;
    }
    .hero__left , .hero__right {
        flex: 1;
    }
    .hero__left {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
    .hero__right__image {
        border-radius: 20px;
        width: 100%;
    }

    .scroll-incitation {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    .scroll-incitation__icon {
        width: 36px;
        animation: bounce 3s infinite;
    }
    @keyframes bounce {
        0%, 15%, 37%, 60%, 75% {
            transform: translateY(0);
        }
        25% {
            transform: translateY(-32%);
        }
        45% {
            transform: translateY(-16%);
        }
        75.1%, 100% {
            transform: translateY(0);
        }
    }



    #about-me {
        height: 60vh;
    }

</style>