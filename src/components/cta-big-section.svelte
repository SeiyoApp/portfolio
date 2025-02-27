<script lang="ts">

    import Cta from './cta.svelte';

    export let title: string = 'Prêt à travailler avec moi ?';
    export let text: string = 'Moi, je le suis.';

</script>



<div class="cta-big-section__container">
    <h2 class="h3">{title}</h2>
    <p>{text}</p>
    <Cta text="Me contacter" href="/contact" />
    <div class="cta-big-section__shine"></div>
</div>



<style lang="scss">

    @use '../styles/variables' as *;
    
    @keyframes shine {
        0% {
            transform: translateX(-90%) rotate(-45deg);
        }
        100% {
            transform: translateX(90%) rotate(-45deg);
        }
    }

    .cta-big-section__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 120px;
        text-align: center;
        border-radius: 24px;
        position: relative;
        overflow: hidden;

        h2 {
            color: #FFF;
        }

        p {
            color: #FFF;
            margin-bottom: 32px;
        }

        .cta-big-section__shine {
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 120%;
            background: linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.0));
            transform: rotate(-45deg);
            animation: shine 6s infinite cubic-bezier(0.95, 0, 0.05, 1);
        }
    }

</style>
