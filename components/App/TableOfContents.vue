<template>
  <div class="sticky top-16">
    <h2 class="uppercase dark:text-slate-200 text-black font-h5 text-sm lg:mt-16 tracking-wider font-bold">
      Table of contents
    </h2>
    <!-- <pre><code>
      {{ toc }}
    </code></pre> -->
    <nav class="mt-4">
      <ul>
        <li @click="tableOfContentsHeadingClick(link)" :class="{
          'pl-4': link.depth === 3
        }" class="toc-list" v-for="link of toc.links" :key="link.id">
          <a :class="{
            'text-green-500 hover:text-green-600':
              link.id === currentlyActiveToc,
            'text-black dark:text-slate-300 hover:gray-900 dark:hover:text-green-600': link.id !== currentlyActiveToc
          }" role="button" class="transition-colors duration-75 text-base mb-2 block" :href="`#${link.id}`">{{
  link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: {
    toc: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currentlyActiveToc: "",
      observer: null,
      observerOptions: {
        root: this.$parent.$refs.articleBody,
        threshold: 0
      }
    };
  },
  mounted() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting) {
          this.currentlyActiveToc = id;
        }
      });
    }, this.observerOptions);

    // Track all sections that have an `id` applied
    document
      .querySelectorAll(".article-body h2[id], .article-body h3[id]")
      .forEach(section => {
        this.observer.observe(section);
      });
  },
  methods: {
    tableOfContentsHeadingClick(link) {
      this.currentlyActiveToc = link.id;
    },
  },
  beforeDestroy() {
    this.observer.disconnect();
  }
};
</script>

<style></style>