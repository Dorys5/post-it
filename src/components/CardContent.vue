<template>
  <!-- <div v-for="note in notes" :key="note.id"> -->

  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div class="card text-dark card-has-bg click-col">
          <div >
            <div class="card-body">
              <h4 class="card-title mt-0">
                <a class="text-dark" herf="https://creativemanner.com"> {{ note.title }} </a>
              </h4>
            </div>
              <div class="media">
                <div class="media-body">
                  <h6 class="my-0 text-dark d-block">{{ note.content[0] }}</h6>
                  <div class="mt-3">
                    <RouterLink to="MoreDetailView">
                      <button type="submit" class="btn btn-primary">show more</button>
                    </RouterLink>
                    <div class>
                      <button classb="btn btn-danger">Delete</button>
                    </div>
                  </div>

                  <EditButton noteEditable="{{ note }}" />

               
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- {{ note.title }}
      {{ note.content[0] }} -->
  <!-- </div> -->
</template>

<script setup>
import EditButton from "@/components/EditButton.vue"

//   import { ref } from 'vue';
//   const notes = ref([]);
//   const created = async () => {

//     const response = await fetch("http://62.72.5.95:1999/notes");
//     const data = await response.json();
//     notes.value = data.notes
//     console.log(notes.value)

//   }
//   created();
</script>

<style scoped>
body {
  /* Created with https://www.css-gradient.com */
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
  overflow: hidden;
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
      -webkit-filter: grayscale(1);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
    }

    &:hover {
      transform: scale(0.98);
      box-shadow: 0 0 5px -2px rgba(0, 0, 0, 0.3);
      background-size: 130%;
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

    .media {
      img {
        border: solid 3px rgba(255, 255, 255, 0.3);
      }
    }
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

  &:hover {
    .card-body {
      margin-top: 30px;
      transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    }

    cursor: pointer;
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
  }

  .card-img-overlay {
    transition: all 800ms cubic-bezier(0.19, 1, 0.22, 1);
    background: rgb(255, 186, 33);
    background: linear-gradient(0deg,
        rgba(255, 186, 33, 0.3785889355742297) 0%,
        rgba(255, 186, 33, 1) 100%);
  }
}

@media (max-width: 767px) {}

/* .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 1rem;
    color: #555;
  }
  
   */
</style>
