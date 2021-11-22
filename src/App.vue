<template>
  <div id="app">
    <nav class="c-nav">
      <ul class="c-nav-list">
        <li class="c-nav-list-item">Home</li>
        <li class="c-nav-list-item">Contact</li>
      </ul>
    </nav>
    <h1>Eurosong Festival</h1>
    <div class="c-feedback-warning"></div>
    <div class="warning">Er is een fout gebeurd</div>

    <div class="error">Het is kapot</div>
    <div class="succes">Het werkt</div>
  </div>
</template>

<script>
//Importing style
import style from "./scss/style.scss";

export default {
  name: "App",
};
</script>

