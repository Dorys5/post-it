<template>
    <NavComponent />

        <form @submit.prevent="created">
            <div class="container mt-5">
                <RouterLink to="/">
                    <button type="submit" class="btn btn-primary stylee">Back</button>
                </RouterLink>
                <div class="card postit-bg">
                    <div class="card-header">
                        <h4>Add Note</h4>
                    </div>
                    <div class="card-body">
                        <div class="mt-3">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" name="title" v-model="title" required />
                        </div>
                        <div class="mt-3">
                            <label for="content">Content</label>
                            <!-- <textarea type="text" class="form-control" name="content" v-model="content"  rows="" cols=""> -->
                            <textarea class="form-control" id="textAreaExample3" v-model="content" required
                                rows="4"></textarea>
                            <!-- </> /> -->
                        </div>
                        <div class="row  justify-content-center mt-3 w-100">
                            <input type="submit" class="btn btn-primary" value="Save" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue';
import { ref } from 'vue';
import { useNoteStore } from '@/stores/note';



const title = ref("");
const content = ref("");

// const removeSpaces = (field) => {
//     if (field === 'title') {
//         title.value = title.value.replace(/\s/g, '');
//     } else if (field === 'content') {
//         content.value = content.value.replace(/\s/g, '');
//     }
// };

// const created = async () => {



const store = useNoteStore();
const created = async () => {
    if (title.value.trim() != '' & content.value.trim() != '') {
        await store.createdNewNote(title.value, content.value)

    }
}


</script>

<style scoped>
.postit-bg {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #b3e5fc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 0 auto;
}

.card-header {
    background: #90caf9;
    color: #000;
    text-align: center;
    padding: 10px;
    border-radius: 8px 8px 0 0;
    font-weight: bold;
}

.card-body {
    padding: 20px;
}


.stylee {
    justify-content: center;
}

.form-control {
    border-radius: 4px;
    border: 1px solid #ddd;
}

.btn-primary {
    background-color: #90caf9;
    border: none;
    color: #000;
}

.btn-primary:hover {
    background-color: #64b5f6;
}
</style>
