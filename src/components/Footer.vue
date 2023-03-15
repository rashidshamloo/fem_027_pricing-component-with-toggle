<script>
export default {
  name: "Footer",
};
</script>

<template>
  <footer class="mt-4 text-center text-sm text-lightGrayishBlue">
    <p>Developed by Rashid Shamloo</p>
    <ul
      class="flex justify-center gap-2 text-base [&_a]:transition-all [&_a]:duration-500 hover:[&_a]:text-grayishBlue"
    >
      <li>
        <a
          href="https://github.com/rashidshamloo"
          title="GitHub"
          target="_blank"
        >
          <i class="bi-github" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/rashid-shamloo/"
          title="LinkedIn"
          target="_blank"
        >
          <i class="bi-linkedin" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/rashidshamloo"
          title="Twitter"
          target="_blank"
        >
          <i class="bi-twitter" aria-hidden="true"></i>
        </a>
      </li>
    </ul>
  </footer>
</template>
