<!-- TEMPLATE -->
<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">
        <h2>{{ item.name }}</h2>
        <button @click="addMore">
            <span>{{ item.number }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<!-- SCRIPT -->
<script type="text/javascript" src="./../scripts/child/child.js"></script>

<!-- STYLES -->
<style src="./../styles/css/child/child.css"></style>
