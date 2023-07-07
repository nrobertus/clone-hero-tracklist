<template>
  <n-data-table
    :columns="columns"
    :data="props.data"
    :pagination="pagination"
    :bordered="false"
  />
</template>

<script setup lang="ts">
import { h, defineComponent } from "vue";
import { NButton, DataTableColumns, NDataTable } from "naive-ui";

type Song = {
  no: number;
  title: string;
  length: string;
};


const data: Song[] = [
  { no: 3, title: "Wonderwall", length: "4:18" },
  { no: 4, title: "Don't Look Back in Anger", length: "4:48" },
  { no: 12, title: "Champagne Supernova", length: "7:27" },
];

const columns = [{
      title: "Artist",
      key: "Artist",
    },
    {
      title: "Name",
      key: "Name",
    }]
const pagination = false as const;
const props = defineProps(['data'])
console.log(props.data);

</script>
