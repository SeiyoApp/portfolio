<script lang="ts">

    import '../styles/_variables.scss';

    export let text: string = '';
    export let href: string | undefined = undefined;
    export let iconName: string = 'chevron-right';
    export let iconPosition: 'left' | 'right' = 'right';
    export let variant: 'primary' | 'secondary' = 'primary';
    export let external: boolean = false;

    $: buttonClasses = `button button--${variant} ${iconName ? 'button--with-icon' : ''} ${iconName && iconPosition === 'right' ? 'button--icon-right' : ''}`.trim();

</script>



{#if href}
  <a {href} class={buttonClasses} target={external ? "_blank" : "_self"} rel={external ? "noopener noreferrer" : undefined}>
    {#if iconName && iconPosition === 'left'}
    <span class="button__icon">
      <span>
        <img src={`/icons/${iconName}.svg`} alt="" />
        <img src={`/icons/${iconName}.svg`} alt="" />
      </span>
    </span>
    {/if}
    <span class="button__text">{text}</span>
    {#if iconName && iconPosition === 'right'}
    <span class="button__icon">
      <span>
        <img src={`/icons/${iconName}.svg`} alt="" />
        <img src={`/icons/${iconName}.svg`} alt="" />
      </span>
    </span>
    {/if}
  </a>
{:else}
  <button class={buttonClasses}>
    {#if iconName && iconPosition === 'left'}
    <span class="button__icon">
      <span>
        <img src={`/icons/${iconName}.svg`} alt="" />
        <img src={`/icons/${iconName}.svg`} alt="" />
      </span>
    </span>
    {/if}
    <span class="button__text">{text}</span>
    {#if iconName && iconPosition === 'right'}
    <span class="button__icon">
      <span>
        <img src={`/icons/${iconName}.svg`} alt="" />
        <img src={`/icons/${iconName}.svg`} alt="" />
      </span>
    </span>
    {/if}
  </button>
{/if}
