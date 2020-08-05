<template>
  <a
    :href="url"
    class="link"
    target="_blank"
    rel="noopener noreferrer"
    :class="{ 'link--outlined': outlined }"
  >
    <slot />
  </a>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '#',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.link {
  display: inline-block;
  background-color: $color-primary;
  color: white;
  border-radius: 25px;
  padding: 1.152rem 2.678rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &,
  &:active,
  &:focus,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    transform: translateY(-0.3rem);
  }

  &--outlined {
    border: 1px solid $color-primary;
    background: transparent;
    color: $color-primary;
  }
}
</style>
