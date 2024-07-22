import { useRouter } from 'vue-router'
const url = 'http://62.72.5.95:1999/notes'
export const getAllNote = async () => {
  const response = await fetch(url)
  const data = await response.json()
  console.log(data)
  // notes.value = data.notes;
  console.log(data.notes)
  return data.notes
}

export async function createdNewNote(title, content) {
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title,
      content: [content]
    })
  })

  if (response.ok) {
    alert('Note created successfully.')
    useRouter().push('/')
    console.log(response)
  }
  // } catch (error) {
  //   console.error('An error occurred while creating the note:', error)
  //   alert('An error occurred. Please try again.')
  // }
}

export const getNote = async (id) => {
  const response = await fetch(url + '/' + id)
  const data = await response.json()
  return data
}

export const deleteNote = async (id) => {
  const router = useRouter()
  const confirmation = confirm('Are you sure you want to delete this note?')
  if (confirmation) {
    const response = await fetch(url + '/' + id, { method: 'DELETE' })
    if (response.ok) {
      alert('Note deleted successfully.')
      router.push('/')
    } else {
      alert('Failed to delete the note.')
    }
  }
}

//edit
export const EditNote = async (id, title, content) => {
  // console.log(id);

  // try {
  const response = await fetch(url + '/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: title.value,
      content: [content.value]
    })
  })
  if (response.ok) {
    console.log('okkk')
    console.log(title)
    console.log(content)

    alert('Note created successfully.')
    useRouter.push('/')
  } else {
    alert('Failed to create the note.')
  }
  // }
  // catch (error) {
  //     console.error("An error occurred while creating the note:", error);
  //     alert("An error occurred. Please try again.");
  // }
}
