<script lang="ts">

    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import Cta from '../../../components/cta.svelte';
	import CtaBigSection from '../../../components/cta-big-section.svelte';

    export let data;
    const { project } = data;

    gsap.registerPlugin(ScrollTrigger);

    onMount(() => {
        gsap.utils.toArray('.parallax-container').forEach((container) => {
            const image = container.querySelector('img');
            gsap.to(image, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        });
    });

</script>



<div class="project">
    <header class="project__header">
        <div class="left">
            <h1 class="h2">{project.title}</h1>
            <p>{project.description}</p>
            <Cta text="Voir le résultat" href={project.url} />
        </div>
        <div class="right">
            <div class="project__thumbnail parallax-container">
                <img src={project.thumbnail} alt={project.title} />
            </div>
            <div class="project__metas">
                <div class="project__meta">
                    <p>Année</p>
                    <p>{project.year}</p>
                </div>
                <div class="project__meta">
                    <p>Rôle</p>
                    <p>{project.role}</p>
                </div>
                <div class="project__meta">
                    <p>Durée</p>
                    <p>{project.duration}</p>
                </div>
                <div class="project__meta">
                    <p>Secteur</p>
                    <p>{project.sector}</p>
                </div>
            </div>
        </div>
    </header>

    <section class="project__content">
        <p class="project__context">{project.content.context}</p>

        <div class="project__gallery">
            <div class="parallax-container parallax-container--large">
                <img src={project.content.images[0]} alt={project.title} />
            </div>
            <div class="project__gallery-row">
                <div class="parallax-container parallax-container--square">
                    <img src={project.content.images[1]} alt={project.title} />
                </div>
                <div class="parallax-container parallax-container--square">
                    <img src={project.content.images[2]} alt={project.title} />
                </div>
            </div>
            <div class="parallax-container parallax-container--large">
                <img src={project.content.images[3]} alt={project.title} />
            </div>
        </div>

        <div class="project__texts">
            <p>{project.content.challenge}</p>
            <p>{project.content.solution}</p>
        </div>
    </section>

    <CtaBigSection />
</div>



<style lang="scss">
    @use '../../../styles/variables' as *;

    header {
        padding-top: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 120px;
        width: 100%;

        .left {
            flex: 3;
            display: flex;
            flex-direction: column;
            align-items: start;
            gap: 32px;
            padding-bottom: 120px;

            p {
                margin-top: 8px;
            }
        }

        .right {
            flex: 4;
            display: flex;
            flex-direction: column;
            gap: 16px;

            .project__thumbnail {
                height: 64vh;
                width: 100%;

                img {
                    width: 100%;
                    height: 110%;
                    object-fit: cover;
                    transform: translateY(-12%);
                }
            }

            .project__metas {
                display: flex;
                flex-direction: row;
                gap: 16px;

                .project__meta {
                    display: flex;
                    flex-direction: column;
                    justify-content: end;
                    gap: 12px;
                    background-color: #E5F4FF;
                    border-radius: 24px;
                    padding: 40px 24px 20px 24px;
                    flex: 1;

                    p:first-of-type {
                        font-size: 13px;
                        text-transform: uppercase;
                        opacity: 0.6;
                    }
                }
            }
        }
    }

    .project__content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .project__context {
            width: 60%;
            text-align: center;
            margin-top: 200px;
            margin-bottom: 200px;
            font-size: 20px;
            font-weight: 250;
            line-height: 2rem;
        }
    }

    .project__gallery {
        display: flex;
        flex-direction: column;
        gap: 120px;
        width: 100%;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 110%;
            object-fit: cover;
            transform: translateY(-12%);
        }

        .project__gallery-row {
            display: flex;
            flex-direction: row;
            gap: 16px;
            width: 100%;

            .parallax-container--square {
                flex: 1;
            }
        }
    }

    .project__texts {
        margin-top: 200px;
        margin-bottom: 200px;
        display: flex;
        flex-direction: row;
        gap: 160px;
        width: 100%;

        p {
            flex: 1;
        }
    }

    .parallax-container {
        position: relative;
        overflow: hidden;
        border-radius: 24px;
    }
    .parallax-container--square {
        aspect-ratio: 1/1;
    }
    .parallax-container--large {
        aspect-ratio: 2/1;
    }

</style>
