<template>
    <NavComponent />

    <div class="form-container flex-column bg-primary">
        <div class="position justify-content-start">
            <RouterLink to="/">
                <button type="submit" class="btn btn-primary stylee  mb-2">Back</button>
            </RouterLink>
        </div>
        <div class="">
            <form @submit.prevent="Edit">
                <div class="card postit-bg">
                    <div class="card-header">
                        <h4>Edit Note</h4>
                    </div>
                    <div class="card-body">
                        <div class="mt-4">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" v-model="title" required />
                        </div>
                        <div class="mt-4">
                            <label for="content">Content</label>
                            <textarea type="text" class="form-control" v-model="content" rows="4"></textarea>
                        </div>
                        <div class="mt-4">
                            <input type="submit" class="btn btn-primary" value="Update" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>

import NavComponent from '../components/NavComponent.vue';

import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNoteStore } from '@/stores/note';

const route = useRoute();
const id = route.params.id;

const store = useNoteStore();
// onBeforeMount(async () => {
//     await store.getNewNote(id)
// })

const title = ref(store.note.title);

const content = ref(store.note.content);

const Edit = async () => {

    await store.EditedNewNote(id, title, content)
    // await store.EditedNewNote(id);
}



// import { ref } from 'vue';
// import router from '@/router';
// import { useRoute } from 'vue-router';

// const title = ref("");
// const content = ref("");
// const route = useRoute();
// const id = route.params.id;

// // const EditNote = async () => {
// //     const requestOptions = {
// //         method: "PUT",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({
// //             title: title.value,
// //             content: [content.value],
// //         })
// //     };

// //     try {
// //         const response = await fetch("http://62.72.5.95:1999/notes/" + id, requestOptions);
// //         if (response.ok) {
// //             alert("Note created successfully.");
// //             router.push('/');
// //         } else {
// //             alert("Failed to create the note.");
// //         }
// //     } catch (error) {
// //         console.error("An error occurred while creating the note:", error);
// //         alert("An error occurred. Please try again.");
// //     }
// // };

// // const removeSpaces = (field) => {
// //     if (field === 'title') {
// //         title.value = title.value.replace(/\s/g, '');
// //     } else if (field === 'content') {
// //         content.value = content.value.replace(/\s/g, '');
// //     }
// // };
</script>

<style scoped>
.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.card {
    background: #e3f2fd;
    padding: 40px;
    border-radius: 12px;
    border: 1px solid #b3e5fc;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    max-width: 100%;
    width: 600px;
}

.card-header {
    background: #90caf9;
    color: #000;
    text-align: center;
    padding: 20px;
    border-radius: 12px 12px 0 0;
    font-weight: bold;
}

.card-body {
    padding: 20px;
}


.form-control {
    border-radius: 8px;
    border: 1px solid #ddd;
    padding: 12px;
    font-size: 16px;
    width: 100%;
}

.btn-primary {
    background-color: #90caf9;
    border: none;
    color: #000;
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
}

.btn-primary:hover {
    background-color: #64b5f6;
}


@media (max-width: 768px) {
    .card {
        width: 90%;
    }
}
</style>
