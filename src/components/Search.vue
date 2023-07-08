<script setup lang="ts">
import json from "../data/songs.json";
import Table from "./Table.vue";
import { defineComponent, reactive, ref, watch } from "vue";
import { NInput } from "naive-ui";

function sortMultiple(data: { Name: string; Artist: string }[]) {
   var articles = ['a', 'an', 'the'],
        re = new RegExp('^(?:(' + articles.join('|') + ') )(.*)$'), // e.g. /^(?:(foo|bar) )(.*)$/
        replacor = function ($0, $1, $2) {
            return $2 + ', ' + $1;
        };
  return data.sort((a, b) => {
    if (a.Artist === b.Artist) {
      return a.Name.replace(re, replacor).localeCompare(b.Name.replace(re, replacor));
    } else {
      return a.Artist.replace(re, replacor).localeCompare(b.Artist.replace(re, replacor));
    }
  });
}

const inputValue = ref("");
let tableData = reactive(sortMultiple(json));
watch(inputValue, (e) => {
  const terms = e.split(" ").filter((n) => n);

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
  <n-input v-model:value="inputValue" placeholder="Search by artist or song name" class="searchInput" round clearable size="large" type="text"></n-input>
  <Table :data="tableData" class="table-view" />
</template>

<style scoped>
.searchInput{
  padding:10px 0px;
  margin: 15px 0px;
}
.table-view{
  border-radius: 10px;
}
</style>
