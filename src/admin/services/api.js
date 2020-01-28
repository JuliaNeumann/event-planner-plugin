import axios from "axios";

const restRoot = window.eventPlannerApp ? window.eventPlannerApp.rest_url : "http://127.0.0.1:8000/wp-json/";
const baseUrl = restRoot + "event-planner/v1/";
axios.defaults.headers.common["X-WP-Nonce"] = window.eventPlannerApp ? window.eventPlannerApp.nonce : null;

export async function getHeaders() {
    return await safeRequest({
        method: "get",
        url: `${baseUrl}headers`
    });
}

export async function addHeader(name, orderId) {
    return await safeRequest({
        method: "post",
        url: `${baseUrl}add-header`,
        data: {
            name: name,
            order_id: orderId,
            type: "text",
            additional: "",
            description: ""
        }
    });
}

export async function updateHeader(header) {
    if (header.id) {
        return await safeRequest({
            method: "post",
            url: `${baseUrl}update-header`,
            data: header
        });
    } else {
        console.error("updateHeader failed because no header id was given!");
        return {error: "Es fehlen Daten, um die Änderungen zu speichern!"};
    }
}

export async function deleteHeader(id) {
    if (id) {
        return await safeRequest({
            method: "delete",
            url: `${baseUrl}delete-header`,
            data: {id: id}
        });
    } else {
        console.error("deleteHeader failed because no header id was given!");
        return {error: "Es fehlen Daten, um den Tabellenkopf zu löschen!"};
    }
}

export async function getHeaderGroups() {
    return await safeRequest({
        method: "get",
        url: `${baseUrl}header-groups`
    });
}

export async function addHeaderGroup(name) {
    return await safeRequest({
        method: "post",
        url: `${baseUrl}add-header-group`,
        data: {
            name: name
        }
    });
}

export async function updateHeaderGroup(id, name, addedHeaders, deletedHeaders) {
    if (id && name) {
        return await safeRequest({
            method: "post",
            url: `${baseUrl}update-header-group`,
            data: {
                id: id,
                name: name,
                added: addedHeaders,
                deleted: deletedHeaders
            }
        });
    } else {
        console.error("updateHeaderGroup failed because not enough data was given!");
        return {error: "Es fehlen Daten, um die Änderungen zu speichern!"};
    }
}

export async function deleteHeaderGroup(id) {
    if (id) {
        return await safeRequest({
            method: "delete",
            url: `${baseUrl}delete-header-group`,
            data: {id: id}
        });
    } else {
        console.error("deleteHeaderGroup failed because no header group id was given!");
        return {error: "Es fehlen Daten, um die Tabellengruppe zu löschen!"};
    }
}

export async function getFootnotes() {
    return await safeRequest({
        method: "get",
        url: `${baseUrl}header-footnotes`
    });
}

export async function addFootnote(footnote) {
    return await safeRequest({
        method: "post",
        url: `${baseUrl}add-header-footnote`,
        data: footnote
    });
}

export async function updateFootnote(footnote) {
    if (footnote.id && footnote.text && footnote.header_id) {
        return await safeRequest({
            method: "post",
            url: `${baseUrl}update-header-footnote`,
            data: footnote
        });
    } else {
        console.error("updateFootnote failed because not enough data was given!");
        return {error: "Es fehlen Daten, um die Änderungen zu speichern!"};
    }
}

export async function deleteFootnote(id) {
    if (id) {
        return await safeRequest({
            method: "delete",
            url: `${baseUrl}delete-header-footnote`,
            data: {id: id}
        });
    } else {
        console.error("deleteFootnote failed because no footnote id was given!");
        return {error: "Es fehlen Daten, um die Fußnote zu löschen!"};
    }
}

export async function getConfig() {
    return await safeRequest({
        method: "get",
        url: `${baseUrl}config`
    });
}

export async function updateConfig(config) {
    if (config) {
        return await safeRequest({
            method: "post",
            url: `${baseUrl}update-config`,
            data: config
        });
    } else {
        console.error("updateConfig failed because no config was not given!");
        return {error: "Es fehlen Daten, um die Änderungen zu speichern!"};
    }
}

async function safeRequest(axiosConfig) {
    try {
        const response = await axios(axiosConfig);
        return response.data;
    } catch(e) {
        console.error(e);
        return {error: "Bei der Verbindung zum Server ist ein Fehler aufgetreten! " +
      "Stelle sicher, dass du als Admin eingeloggt bist und versuche es noch einmal."};
    }
}