<template>
  <n-data-table
    ref="tableRef"
    :columns="columns"
    :data="props.data"
    :pagination="pagination"
    striped
  />
</template>

<script setup lang="ts">
import {h} from 'vue';
import { NButton, NDataTable } from "naive-ui";
import {artistSortFunction, nameSortFunction, genreSortFunction, songDataType} from "../helpers";

function copy(row: songDataType){
  navigator.clipboard.writeText(row.Artist + " - " + row.Name);
}

const columns = [{
      title: "Artist",
      key: "Artist",
      sorter: artistSortFunction
    },
    {
      title: "Name",
      key: "Name",
      sorter: nameSortFunction
    },
    {
      title: "Genre",
      key: "Genre",
      sorter: genreSortFunction
    },
    {
      title: "Year",
      key: "Year",
    },
    {
      title: 'Action',
      key: 'actions',
      render (row) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: false,
            size: 'small',
            onClick: () => copy(row)
          },
          { default: () => 'Copy' }
        )
      }
    }]
const pagination = false as const;
const props = defineProps(['data'])

</script>
