<script setup lang="ts">
import json from "../data/songs.json";
import Table from "./Table.vue";
import { defineComponent, reactive, ref, watch } from "vue";
import { NInput } from "naive-ui";
import { artistSortFunction } from "../helpers";

const inputValue = ref("");
let tableData = reactive(json.sort(artistSortFunction));
watch(inputValue, (e) => {
  const terms = e.split(" ").filter((n) => n);
  tableData = [];
  json.forEach((song) => {
    let matches = 0;
    terms.forEach((term) => {
      if (
        song.Artist.toLowerCase().includes(term.toLowerCase()) ||
        song.Name.toLowerCase().includes(term.toLowerCase()) ||
        song.Genre.toLowerCase().includes(term.toLowerCase())
      ) {
        matches += 1;
      }
    });

    if (matches === terms.length) {
      tableData.push(song);
    }
  });
});
</script>

<template>
  <n-input
    v-model:value="inputValue"
    placeholder="Search by artist, song name, or genre"
    class="searchInput"
    round
    clearable
    size="large"
    type="text"
  ></n-input>
  <Table :data="tableData" class="table-view" />
</template>

<style scoped>
.searchInput {
  padding: 10px 0px;
  margin: 15px 0px;
}
.table-view {
  border-radius: 10px;
}
</style>
