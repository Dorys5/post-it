<template>
    <NavComponent />

    <div class="bg-primary p-3">
        <section class="wrapper h-[800px]" >
            <div class="container">
                <div class="row">
                    <!-- Empty row for spacing -->
                </div>
                <div class="row justify-content-center">
                    <div class="col-sm-12 col-md-8 col-lg-6 mb-4">
                        <div class="card text-dark card-has-bg overflow-auto">
                            <div class="card-img-overlay d-flex flex-column">
                                <div class="card-body">
                                    <p class="text-dark card-title">
                                        {{ store.note.title }}
                                    </p>
                                </div>
                                <div class="card-footer">
                                    <div class="media">
                                        <div class="media-body">
                                            <p class="my-0 text-dark d-block card-text">{{ store.note.content[0] }}</p>
                                            <!-- <h8 class="my-0 text-dark d-block">created at: {{ store.note.createdAt }}</h8>
                                            <h8 class="my-0 text-dark d-block">Updated at: {{ store.note.updatedAt }}</h8> -->
                                            <div class="mt-3 d-flex justify-content-between">
                                                <RouterLink to="/">
                                                    <button type="submit" class="btn btn-primary stylee">Back</button>
                                                </RouterLink> 
                                                <!-- <DeleteButton :id=store.note._id /> -->
                                                 <DeleteButton :id=store.note._id />
                                                <!-- <button class="btn btn-danger" @click="deleteNote">Delete</button> -->
                                                <router-link :to="'/EditeNoteView/' + store.note._id">
                                                    <button class="btn btn-secondary">Edit</button>
                                                </router-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import NavComponent from '../components/NavComponent.vue';
import DeleteButton from "@/components/DeleteButton.vue";

import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useNoteStore } from '@/stores/note';

const route = useRoute();
const id = route.params.id;

const store = useNoteStore();
onBeforeMount(async () => {
    await store.getNewNote(id)
})

async function deleteNote() {
    await store.deletedNewNote(id);
}

</script>

<style scoped>
.custom-bg {
    background: linear-gradient(to right, #a1c4fd, #c2e9fb);
}

body {
    background: #161616;
}

h1 {
    color: #fff;
}

.lead {
    color: #aaa;
}

.wrapper {
    margin: 10vh;
}

.card {
    border: none;
    transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    border-radius: 20px;
    min-height: 450px;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        min-height: 350px;
    }

    @media (max-width: 420px) {
        min-height: 300px;
    }

    &.card-has-bg {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
        background-size: 120%;
        background-repeat: no-repeat;
        background-position: center center;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: inherit;
            filter: grayscale(100%);
        }

        &:hover {
            transform: scale(0.98);
            box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
            transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);

            .card-img-overlay {
                transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
                background: rgb(255, 186, 33);
                background: linear-gradient(0deg, rgba(255, 186, 33, 0.5) 0%, rgba(255, 186, 33, 1) 100%);
            }
        }
    }

    .card-footer {
        background: none;
        border-top: none;
    }

    .card-title {
        font-weight: 800;
    }

    .card-meta {
        color: rgba(0, 0, 0, 0.3);
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 2px;
    }

    .card-body {
        transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:hover .card-body {
        margin-top: 30px;
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:hover {
        transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }

}
</style>
