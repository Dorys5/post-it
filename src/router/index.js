import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
import NoteView from '../views/NoteView.vue'
import NoteCreateView from '../views/NoteCreateView.vue'
import MoreDetailView from '../views/MoreDetailView.vue'
import EditeNoteView from '../views/EditeNoteView.vue'
import ErrorComponentView from '@/components/ErrorComponentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },

    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },

    {
      path: '/Post-it',
      name: 'Post-it',
      component: NoteView
    },

    {
      path: '/Post-it',
      name: 'Post-it',
      component: NoteCreateView
    },
    {
      path: '/Add-Note',
      name: 'Add-Note',
      component: NoteCreateView
    },
    {
      path: '/Add-Note',
      name: 'Add-Note',
      component: NoteCreateView
    },
    {
      path: '/note/:id',
      name: 'note',
      component: MoreDetailView
    },

    {
      path: '/EditeNoteView/:id',
      name: 'EditeNoteView',
      component: EditeNoteView
    },
    {
      path: '/:pathMatch(.*)*',
      component: ErrorComponentView,
    }
  ]
})

export default router
