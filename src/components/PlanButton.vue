<template>
  <a
    href="#0"
    :class="[
      highlighted
        ? 'bg-buttonHighlighted bg-s200 text-gradientEnd hover:border-white hover:text-white hover:shadow-white/20'
        : 'bg-button bg-s200 bg-btnNormal  text-white hover:border-gradientEnd hover:text-gradientEnd hover:shadow-gradientEnd/40',
      'flex h-[2.75rem] items-center justify-center rounded-lg text-sm uppercase tracking-wide transition-all duration-500 hover:border-[1px] hover:bg-btnHover hover:shadow-[0_0em_1em]',
    ]"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "PlanButton",
  props: ["text", "highlighted"],
};
</script>
