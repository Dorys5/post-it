<template>
        <button class="btn btn-danger" @click="deleteNote(props.id)">Delete</button>
</template>

<script setup>

import { useNoteStore } from '@/stores/note';

const store = useNoteStore();

import { defineProps } from 'vue';

const props = defineProps({
    id: String
});

async function deleteNote(id) {
    // console.log(id);
    await store.deletedNewNote(id);
}

</script>

<style lang="scss" scoped></style>