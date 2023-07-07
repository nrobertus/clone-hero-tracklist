<script setup lang="ts">
import json from "../data/songs.json";
import Table from "./Table.vue";
import { defineComponent, reactive, ref, watch } from "vue";
import { NInput } from "naive-ui";

function sortMultiple(data: { Name: string; Artist: string }[]) {
  return data.sort((a, b) => {
    if (a.Artist === b.Artist) {
      return a.Name.localeCompare(b.Name);
    } else {
      return a.Artist.localeCompare(b.Artist);
    }
  });
}

const inputValue = ref("");
let tableData = reactive(sortMultiple(json));
watch(inputValue, (e) => {
  const terms = e.split(" ").filter((n) => n);
  console.log(terms);

  tableData = [];
  json.forEach((song) => {
    let matches = 0;;
    terms.forEach((term) => {
      if (
        song.Artist.toLowerCase().includes(term.toLowerCase()) ||
        song.Name.toLowerCase().includes(term.toLowerCase())
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
  <n-input v-model:value="inputValue"></n-input>
  <Table :data="tableData" />
</template>

<style scoped></style>
