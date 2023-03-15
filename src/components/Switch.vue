<script>
export default {
  name: "Switch",
  props: ["id", "checked"],
};
</script>

<template>
  <div class="relative h-[2em] w-[3.625em]">
    <input
      type="checkbox"
      class="peer h-0 w-0 opacity-0"
      :id="id"
      aria-label="Toggle Between Annually and Monthly Pricing"
      @change="$emit('toggle')"
      :checked="checked"
    />
    <label
      :for="id"
      class="absolute inset-0 inline-block cursor-pointer rounded-full bg-gradient-to-br from-gradientStart to-gradientEnd transition-all duration-500 before:absolute before:top-1/2 before:left-[0.25em] before:aspect-square before:w-[1.5em] before:-translate-y-1/2 before:rounded-full before:bg-white before:transition-all before:duration-500 before:ease-in-out hover:shadow-[0_0.5em_0.5em] hover:shadow-darkGrayishBlue/20 hover:brightness-125 peer-checked:before:translate-x-[1.625em] peer-focus-visible:shadow-xl peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-gray-500"
      aria-hidden="true"
    >
    </label>
  </div>
</template>
