<script>
import PlanButton from "./PlanButton.vue";

export default {
  name: "Plan",
  props: ["data", "period"],
  components: { PlanButton },
};
</script>

<template>
  <div
    :class="[
      data.highlighted
        ? 'bg-gradient-to-br from-gradientStart to-gradientEnd text-veryLightGrayishBlue lg:h-[31.25rem] lg:py-[3.45rem]'
        : 'bg-white text-grayishBlue',
      'mx-auto mt-8 h-[28.375rem] w-[87%] rounded-lg py-8 px-8 text-center text-[0.95rem] shadow-xl sm:w-[22rem] lg:mx-0 lg:mt-0 lg:first:rounded-r-none lg:last:rounded-l-none',
    ]"
  >
    <h2 class="text-lg">{{ data.title }}</h2>
    <ul
      :class="[
        data.highlighted
          ? '[&>*]:border-veryLightGrayishBlue/20'
          : '[&>*]:border-darkGrayishBlue/10',
        'w-full [&>*]:border-b-[0.15rem] [&>*]:py-[0.875rem]',
      ]"
    >
      <li :class="data.highlighted ? ' text-white' : 'text-darkGrayishBlue'">
        <div
          class="price flex items-center justify-center pb-5 pt-2 transition-all duration-500"
        >
          <p class="mr-2 text-4xl">$</p>
          <p class="text-7xl">
            {{
              period === "annually" ? data.price.annually : data.price.monthly
            }}
          </p>
        </div>
      </li>
      <li>{{ data.storage }} Storage</li>
      <li>{{ data.users }} Users Allowed</li>
      <li>Send up to {{ data.size }}</li>
    </ul>
    <div class="mt-8">
      <PlanButton text="Learn More" :highlighted="data.highlighted" />
    </div>
  </div>
</template>
