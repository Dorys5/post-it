<template>

  <div class="bg-primary p-3">

    <RouterLink to="Add-Note">
      <button class="btn btn-primary stylee">Add note</button>
    </RouterLink>
    <div class="container justify-content-between">
      <div class="row flex">
        <!-- Loeader -->
        <div class=" w-100 justify-content-center " v-if="store.loading">

          <div class="w-5 spinner-border justify-content-center align-content-center text-white" role="status">
            <span class="sr-only"></span>
          </div>

        </div>


        <!-- Data -->
        <div v-else v-for="note in store.notes" :key="note.id" class="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div class="card text-dark card-has-bg click-col">
            <div class="card-img-overlay d-flex flex-column">
              <div class="card-body">
                <h4 class="card-title mt-0">
                  <p class="text-dark">{{ note.title.slice(0, 20) }}</p>
                </h4>
              </div>
              <div class="card-footer">
                <div class="media">
                  <div class="media-body h-full">
                    <h6 class="my-0 text-dark d-block">{{ note.content[0].slice(0, 20) + "...." }}</h6>
                    <div class="mt-3">
                      <RouterLink :to="`/note/${note._id}`">
                        <button type="submit" class="btn btn-primary">Show more</button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item" :class="{ disabled: currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="prevPage">Previous</a>
          </li>
          <template v-for="page in visiblePages" :key="page">
            <li class="page-item" :class="{ active: currentPage === page }">
              <a class="page-link" href="#" @click.prevent="gotoPage(page)">{{ page }}</a>
            </li>
          </template>
          <li class="page-item" :class="{ disabled: currentPage === totalPages }">
            <a class="page-link" href="#" @click.prevent="nextPage">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useNoteStore } from '@/stores/note';

const notes = ref([]);

const store = useNoteStore();

onBeforeMount(async () => {
  await store.getAllNote();
  notes.value = store.notes;
});


</script>

<style scoped>
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
  width: 100%;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  overflow: hidden;
  border-radius: 20px;
  min-height: 250px;
  box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.2);
}

.stylee {
  background-color: white !important;
  color: black !important;
}

@media (max-width: 768px) {
  .card {
    min-height: 350px;
  }
}

@media (max-width: 420px) {
  .card {
    min-height: 300px;
  }
}

.card-has-bg {
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: center center;
}

.card-has-bg:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: inherit;
  filter: grayscale(100%);
}

.card-has-bg:hover {
  transform: scale(0.98);
  box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
  background-size: 130%;
  transition: all 500ms cubic-bezier(0.19, 1, 0.22, 1);
}

.card-has-bg:hover .card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  background: rgb(255, 186, 33);
  background: linear-gradient(0deg, rgba(255, 186, 33, 0.5) 0%, rgba(255, 186, 33, 1) 100%);
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

.card-body:hover {
  margin-top: 30px;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}

.card:hover {
  cursor: pointer;
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
}

.card-img-overlay {
  transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  background: rgb(255, 186, 33);
  background: linear-gradient(0deg, rgba(255, 186, 33, 0.3785889355742297) 0%, rgba(255, 186, 33, 1) 100%);
}

.pagination {
  margin-top: 20px;
}

.page-item.disabled .page-link {
  cursor: not-allowed;
}

.custom-bg {
  background: linear-gradient(to right, #a1c4fd, #c2e9fb);
}

@media (max-width: 768px) {
  .card {
    margin-bottom: 20px;
  }

  .pagination {
    flex-wrap: wrap;
  }

  .page-item {
    margin-bottom: 10px;
  }
}

@media (max-width: 576px) {
  .card {
    min-height: 300px;
  }
}
</style>
