<script lang="ts">
    import Cta from '../../components/cta.svelte';
    import CtaBigSection from '../../components/cta-big-section.svelte';
    import { onMount } from 'svelte';
    import Swiper from 'swiper';
    import { Pagination, Keyboard } from 'swiper/modules';

    import 'swiper/css';
    import 'swiper/css/pagination';

    export let data;

    let swiperElement;
    let swiperInstance;

    onMount(() => {
        swiperInstance = new Swiper(swiperElement, {
            modules: [Pagination, Keyboard],
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: -88,
            grabCursor: true,
            pagination: { clickable: true },
            keyboard: { enabled: true },
            effect: "slide"
        });
    });
</script>



<div class="intro">
    <h1>Mes projets</h1>
    <p>Ceci est une introduction qui intoduit mes projets</p>
</div>

<div class="projects-slider-container">
    <div class="swiper" bind:this={swiperElement}>
        <div class="swiper-wrapper">
        {#each data.projects as project}
            <div class="swiper-slide">
                <a href="/projets/{project.slug}" class="project-slide" style="background-image: url({project.thumbnail})">
                    <div class="project-slide__content">
                        <div>
                            <h3>{project.title}</h3>
                            <div class="project-slide__tags">
                                <span class="tag">{project.year}</span>
                                <span class="tag">{project.sector}</span>
                            </div>
                        </div>
                        <p>{project.description}</p>
                        <Cta text="Découvrir" inheritHover />
                    </div>
                </a>
            </div>
        {/each}
        </div>
    </div>
    <div class="swiper-pagination"></div>
</div>

<CtaBigSection />



<style lang="scss">
  @use '../../styles/variables' as *;

    .intro {
        text-align: center;
        padding: 12vh;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
  
    .projects-slider-container {
        width: 100vw;
        margin-left: -4vw;
        margin-bottom: 120px;
        padding: 20px 0;

        :global(.swiper) {
            overflow: visible;
        }
        :global(.swiper-slide) {
            height: 64vh;
            transition: all 0.3s ease;
        }
        :global(.swiper-slide:first-of-type) {
            margin-left: 4vw;
        }
    }
  
    .project-slide {
        display: flex;
        flex-direction: column;
        justify-content: end;
        width: calc(100% - 12vw);
        height: calc(100% - 64px);
        padding: 32px;
        text-decoration: none;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        border-radius: 24px;
        position: relative;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;

        .project-slide__content {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: start;
            z-index: 10;
            
            * {
                color: #FFF;
            }
            
            p {
                font-size: 1rem;
                line-height: 1.5;
                opacity: 0.8;
                margin-bottom: 12px;
            }

            & > div {
                display: flex;
                flex-direction: row;
                gap: 24px;
                align-items: center;
            }
        }

        .project-slide__tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: -4px;
            
            .tag {
                padding: 6px 12px;
                border-radius: 20px;
                border: solid 1px rgba(255, 255, 255, 0.24);
                background-color: rgba(255, 255, 255, 0.12);
                backdrop-filter: blur(4px);
                font-size: 0.96rem;
                font-weight: 300;
                font-family: 'Space Grotesk', 'Inter', serif;
            }
        }
    }

    .project-slide:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
    }

    .project-slide:hover {
        transform: scale(1.012);
    }
    .project-slide:hover :global(.button--inherit-hover) {
        transform: scale(1.04);
    }

    .cta-button {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 24px;
        background-color: white;
        color: black;
        border-radius: 999px;
        font-weight: 500;
        transition: transform 0.3s ease;
        cursor: pointer;
        
        svg {
            transition: transform 0.2s ease;
        }
        
        &:hover {
            svg {
                transform: translateX(4px);
            }
        }
    }

</style>