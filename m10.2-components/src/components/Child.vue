<!-- TEMPLATE -->
<template>
  <div class="item-wrapper">
    <ul class="items-container">
      <li v-for="item in items" :key="item.id" class="item">
        <h2>{{ name }} {{ item.id }}</h2>
        <button @click="item.number++" class="item-btn">
            <span>{{ item.number }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/child.js"></script>

<!-- STYLES -->
<style src="./../styles/css/child.css"></style>
