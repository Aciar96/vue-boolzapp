const app = new Vue({
    el: "#root",
    data: {
      currentContact: 0,
      searchInput: "",
      visible: false,
  
      newMsg: "",
      user: {
        name: "Alfredo",
        avatar: "_io",
      },
      contacts: [
        {
          name: "Fabio",
          avatar: "_1",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Hai portato a da mangiare a nonna?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "non dimenticare di fare la spesa",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              text: "fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Nicola",
          avatar: "_2",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              text: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              text: "Bene grazie! tu?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              text: "tutto bene,grazie ",
              status: "sent",
            },
          ],
        },
        {
          name: "Maria",
          avatar: "_3",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              text: "dopo ci vediamo?",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              text: "Hai sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              text: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Samuela",
          avatar: "_6",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              text: "Andiamo in piscina?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              text: "Si!",
              status: "received",
            },
          ],
        },
      ],
    },
  });