export default {
  headers: [
    {
      name: 'Datum',
      type: 'date',
      id: 1,
      order_id: 1,
      active: true
    },
    {
       id: 2,
       name: "Besonderes",
       order_id: 2,
       type: "icons",
       group_id: null,
       description: null,
       active: true,
       additional: "[{\"name\":\"Familiengottesdienst\",\"icon\":\"child\"},{\"name\":\"Abendmahl\",\"icon\":\"trophy\"},{\"name\":\"Gemeindecafé\",\"icon\":\"coffee\"},{\"name\":\"Fällt aus\",\"icon\":\"ban\"}]"
    },
    {
      name: 'Moderator',
      description: '...führt durch den Gottesdienst',
      type: 'text',
      id: 3,
      order_id: 3,
      active: true
    },
    {
      name: 'Musik-Verantwortlicher',
      type: 'text',
      id: 4,
      order_id: 4,
      active: true
    },
    {
      name: 'Musiker',
      type: 'longtext',
      id: 5,
      order_id: 5,
      group_id: 1,
      active: true
    },
    {
      name: 'Predigtlied',
      type: 'text',
      id: 6,
      order_id: 6,
      group_id: 1,
      active: true
    },
    {
      name: 'Besonderheiten',
      type: 'longtext',
      id: 7,
      order_id: 7,
      active: true
    }
  ],
  header_groups: [
    {
      id: 1,
      name: 'Musik'
    }
  ],
  header_footnotes: [
    {
      header_id: 4,
      text: 'Verantwortliche für den Bereich Musik ist Johanna.'
    },
    {
      header_id: 4,
      text: 'Die Lieder sollten spätestens am Samstagabend der Technik mitgeteilt werden.'
    },
    {
      header_id: 3,
      text: 'Verantwortlicher für den Bereich Moderation ist Manuel.'
    }
  ],
  groups: {
    1: 'Musik - Details'
  },
  events: [
    {
      fields: [
        1,
        '2019-10-29',
        '["trophy"]',
        'Manuel',
        'Jonas',
        'Jonas\nSusi',
        'Ich verdanke dir soviel, mein Gott',
        'Taufe'
      ]
    },
    {
      fields: [
        2,
        '2019-10-25',
        '[]',
        'Beni',
        'Antje',
        'Antje\nJonas\nSusi',
        'Ich verdanke dir soviel, mein Gott',
        ''
      ]
    }
  ],
  config: [
    {
      data: '[1,2,6]',
      name: 'static_fields'
    }
  ]
}
