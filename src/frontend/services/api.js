import axios from "axios";
// import data from '../__mocks__/data'

const restRoot = window.eventPlannerApp ? window.eventPlannerApp.rest_url : "http://127.0.0.1:8000/wp-json/";
const baseUrl = restRoot + "event-planner/v1/";
axios.defaults.headers.common["X-WP-Nonce"] = window.eventPlannerApp ? window.eventPlannerApp.nonce : null;

export async function getData() {
    return await safeRequest({
        method: "get",
        url: `${baseUrl}all`
    });
    // return data
}

export function getHeaders(data) {
    if (!data.headers) {
        return [];
    }
    let footnoteCounter = 1;
    return data.headers
        .sort(function(head1, head2) {
            const head1OrderId = parseInt(head1.order_id);
            const head2OrderId = parseInt(head2.order_id);
            if (head1OrderId < head2OrderId) {
                return -1;
            }
            return (head1OrderId > head2OrderId) ? 1 : 0;
        })
        .map(head => {
            head.active = true; // TODO: sync with localStorage
            head.footnotes = [];
            if (data.header_footnotes) {
                data.header_footnotes.forEach((footnote) => {
                    if (footnote.header_id === head.id) {
                        head.footnotes.push({number: footnoteCounter, text: footnote.text});
                        footnoteCounter++;
                    }
                });
            }
            return head;
        });
}

export function getGroups(data) {
    const groups = {};
    if (!data.header_groups) {
        return groups;
    }
    data.header_groups.forEach(group => {
        groups[group.id] = group.name;
    });
    return groups;
}

export function getRowsForEdit(data) {
    if (!data.events) {
        return [];
    }
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 2);
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 130);
    return data.events.filter(event => { // show only events starting from yesterday until 4 months in the future ...
        return event.fields && event.fields[1] &&
      (new Date(event.fields[1]) >= yesterday) && (new Date(event.fields[1]) <= endDate);
    }).sort(function(event1, event2) { // ... and sort by date
        if (new Date(event1.fields[1]) < new Date(event2.fields[1])) {
            return -1;
        }
        return (new Date(event1.fields[1]) > new Date(event2.fields[1])) ? 1 : 0;
    });
}

export function getRowsForYear(data, year) {
    if (!data.events) {
        return [];
    }
    const events = data.events.filter(event => { // show only events for the given year ...
        return event.fields && event.fields[1] && (new Date(event.fields[1]).getFullYear() === year);
    }).sort(function(event1, event2) { // ... and sort by date
        if (new Date(event1.fields[1]) < new Date(event2.fields[1])) {
            return -1;
        }
        return (new Date(event1.fields[1]) > new Date(event2.fields[1])) ? 1 : 0;
    });
    const eventsByQuarter = [[], [], [], []];
    events.forEach(event => {
        const month = (new Date(event.fields[1])).getMonth();
        eventsByQuarter[Math.floor(month / 3)].push(event);
    });
    return eventsByQuarter;
}

export async function addEvent(newDate) {
    if (newDate) {
        const formattedDate = formatDate(newDate);
        return await safeRequest({
            method: "post",
            url: `${baseUrl}add-event`,
            data: {date: formattedDate}
        });
    }
}

export async function updateEvent(eventId, headerId, content, type) {
    if (eventId && headerId && typeof(content) !== "undefined") {
        if (type === "date") {
            content = formatDate(content);
        }
        return await safeRequest({
            method: "post",
            url: `${baseUrl}update-event`,
            data: {"event_id": eventId, "header_id": headerId, content: content}
        });
    }
}

export async function deleteEvent(rowId) {
    if (rowId) {
        return await safeRequest({
            method: "delete",
            url: `${baseUrl}delete-event`,
            data: {event_id: rowId}
        });
    }
}

function formatDate(date) {
    if (typeof date.getTime !== "function") {
        date = new Date(date);
    }
    const month = ("0" + (date.getUTCMonth() + 1)).slice(-2);
    const day = ("0" + date.getUTCDate()).slice(-2);
    return `${date.getUTCFullYear()}-${month}-${day}`;
}

export function getConfig(data) {
    const config = {};
    if (!data.config) {
        return config;
    }
    data.config.forEach(configEntry => {
        if (configEntry.data) {
            try {
                config[configEntry.name] = JSON.parse(configEntry.data);
            } catch (e) {
                config[configEntry.name] = configEntry.data;
            }
        }
    });
    return config;
}

async function safeRequest(axiosConfig) {
    try {
        axiosConfig.params = axiosConfig.params || {};
        // add timestamp for cache invalidation:
        axiosConfig.params.timestamp = Date.now();
        const response = await axios(axiosConfig);
        return response.data;
    } catch(e) {
        console.error(e);
        alert("Bei der Verbindung zum Server ist ein Fehler aufgetreten! " +
      "Stelle sicher, dass du eingeloggt bist und versuche es noch einmal.");
        return false;
    }
}

