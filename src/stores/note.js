import { defineStore } from 'pinia'
import router from '@/router'
import { getAllNote, getNote } from '../api/index'
import { createdNewNote } from '../api/index'
import { deleteNote } from '../api/index'
import { EditNote } from '../api/index'

//display notes
export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: [],
    note: {},
    loading:true,
  }),

  actions: {
    async getAllNote() {
      this.notes = await getAllNote();
      this.loading = false;
    },
    //create note
    async createdNewNote(title, content) {
      this.notes = await createdNewNote(title, content)
    },
    // delete note
    async deletedNewNote(id) {
      this.notes = await deleteNote(id)
    },

    // edite note
    async EditedNewNote(id, title, content) {
      const resp = await EditNote(id, title, content)
      if (resp) {
        router.push('/')
      }
    },

    async getNewNote(id) {
      this.note = await getNote(id)
    }
  }
})
