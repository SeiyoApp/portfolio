<script>
    export let data;
    const { projects } = data;
</script>



<div class="intro">
    <h1>Mes projets</h1>
    <p>Ceci est une introduction qui intoduit mes projets</p>
</div>


{#if !projects || projects.length === 0}
    <p>Aucun projet n'est disponible pour le moment.</p>
{:else}
<div class="projects-grid">
    {#each projects as project}
    <a href="/projets/{project.slug}" class="project-card">
        <div class="project-card__image">
        <img src={project.thumbnail} alt={project.title} />
        </div>
        <div class="project-card__content">
        <h2 class="project-card__title">{project.title}</h2>
        <p class="project-card__description">{project.description}</p>
        <div class="project-card__tags">
            {#each project.tags as tag}
            <h6 class="tag">{tag}</h6>
            {/each}
        </div>
        </div>
    </a>
    {/each}
</div>
{/if}



<style lang="scss">
    @use '../../styles/variables' as *;

    .intro {
        text-align: center;
        padding: 12vh;
        display: flex;
        flex-direction: column;
        gap: 32px
    }
  
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
  
    .project-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
      transition: all 0.32s cubic-bezier(.6, 0, .4, 1);
      text-decoration: none;
      color: inherit;
  
      &:hover {
        transform: scale(1.024);
      }
      &:hover img {
        transform: scale(1.04);
      }
    }

    .project-card__image {
        width: 100%;
        height: 240px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.32s cubic-bezier(.6, 0, .4, 1);
        }
    }

    .project-card__content {
        padding: 20px;
    }
    .project-card__title {
        margin-bottom: 0.5rem;
        font-size: 1.25rem !important;
    }
    .project-card__description {
        margin-bottom: 1rem;
        color: rgba(0, 0, 0, 0.7);
    }
    .project-card__tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tag {
          background: #f3f4f6;
          padding: 5px 10px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-family: $primary-font;
        }
    }

  </style>