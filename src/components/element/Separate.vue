<template>
  <div :style="`margin-top: ${separate}px;`" aria-hidden="true">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 0,
    },
  },

  setup(props) {
    const separate = props.size * 16

    return {
      separate,
    }
  },
}
</script>
