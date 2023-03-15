<script>
import Switch from "./Switch.vue";

export default {
  name: "Header",
  props: ["period"],
  components: { Switch },
};
</script>

<template>
  <header class="flex flex-col items-center justify-center">
    <h1 class="text-[2rem]">Our Pricing</h1>
    <div class="mt-9 flex items-center gap-x-6">
      <p
        :class="[
          period === 'monthly' && 'text-lightGrayishBlue',
          'transition-all',
          'duration-500',
        ]"
      >
        Annually
      </p>
      <Switch id="check" @toggle="$emit('toggle')" />
      <p
        :class="[
          period === 'annually' && 'text-lightGrayishBlue',
          'transition-all',
          'duration-500',
        ]"
      >
        Monthly
      </p>
    </div>
  </header>
</template>
