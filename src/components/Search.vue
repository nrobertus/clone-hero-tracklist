<script setup lang="ts">
import json from "../data/songs.json";
import Table from './Table.vue';
import { defineComponent, reactive, ref, watch } from "vue";
import { NInput } from "naive-ui";

function sortMultiple(data, colA, colB){
  return data.sort((a, b)=> {
  if (a[colA] === b[colA]){
    return a[colB].localeCompare(b[colB])
  } else {
    return a[colA].localeCompare(b[colA])
  }
})
}

const inputValue = ref("");
let tableData = reactive(sortMultiple(json, 'Artist', 'Name'));
watch(inputValue, (e) => {
  tableData = [];
  json.forEach(song => {
    if(song.Artist.toLowerCase().includes(e.toLowerCase()) || song.Name.toLowerCase().includes(e.toLowerCase())){
      tableData.push(song);
    }
  })
  console.log(e);
  console.log(tableData);
});
</script>

<template>
  <n-input v-model:value="inputValue"></n-input>
  <Table :data=tableData />
</template>

<style scoped></style>
