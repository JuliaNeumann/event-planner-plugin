import axios from 'axios'

const restRoot = window.eventPlannerApp ? window.eventPlannerApp.rest_url : 'http://127.0.0.1:8000/wp-json/'
const baseUrl = restRoot + 'event-planner/v1/'
axios.defaults.headers.common['X-WP-Nonce'] = window.eventPlannerApp ? window.eventPlannerApp.nonce : null

export async function getHeaders () {
  return await safeRequest({
     method: 'get',
     url: `${baseUrl}headers`
  })
}

export async function updateHeader (header) {
  if (header.id) {
    return await safeRequest({
      method: 'post',
      url: `${baseUrl}update-header`,
      data: header
    })
  } else {
    console.error("updateHeader failed because no header id was given!")
    return {error: "Es fehlen Daten, um die Änderungen zu speichern!"}
  }
}

export async function deleteHeader (id) {
  if (id) {
    return await safeRequest({
      method: 'delete',
      url: `${baseUrl}delete-header`,
      data: {id: id}
    })
  } else {
    console.error("deleteHeader failed because no header id was given!")
    return {error: "Es fehlen Daten, um den Header zu löschen!"}
  }
}

async function safeRequest(axiosConfig) {
  try {
    const response = await axios(axiosConfig)
    return response.data
  } catch(e) {
    console.error(e)
    return {error: "Bei der Verbindung zum Server ist ein Fehler aufgetreten! " +
      "Stelle sicher, dass du als Admin eingeloggt bist und versuche es noch einmal."}
  }
}