<template>
  <header class="bg-blue-darkest border border-blue-darkest pb-3 pt-5 px-10">
    <nav class="flex flex-wrap">
        <div>
          <h2 class="text-teal">{{ siteTitle }}</h2>
        </div>
        <div class="">
          <ul style="list-style: none;">
            <li v-for="(link, index) in navLinks" v-bind:key="index">
              <a class="text-teal-dark text-xl" style="text-decoration: none;line-height: 1.5;" href="/">{{ link }}</a>
            </li>
          </ul>
        </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: "IMDB Catelog",
      navLinks: ['Movies']
    }
  },
  name: "HeaderView"
}
</script>