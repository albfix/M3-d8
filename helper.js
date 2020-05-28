const url ="https://striveschool.herokuapp.com/api/product/"
const simpleHeader = new Headers({ /*sintassi per creare istanza di nuovo header*/
  'Authorization': 'Basic dXNlcjE6eldBM0QzdlVNUnNicHJyZA=='
})
const contentHeader = new Headers({ /*sintassi per creare istanza di nuovo header*/
  'Authorization': 'Basic dXNlcjE6eldBM0QzdlVNUnNicHJyZA==',
  "Content-Type": "application/json",
})

      const getEvents = async () => {
        let response = await fetch (url, {
          headers: simpleHeader
        })
        return await response.json() 
      }

      const getEvent = async (id) => {
        let response = await fetch(url + id, {
          headers: simpleHeader
        });
        return await response.json();
      };

      const saveEvent = async (agendaEvent) => {
      let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(agendaEvent),
      headers: contentHeader
  });
  return response;
};

const editEvent = async (id, agendaEvent) => {
  let response = await fetch(url + id, {
    method: "PUT",
    body: JSON.stringify(agendaEvent),
    headers: new Headers({
      "Content-Type": "application/json",
    }),
  });
  return response;
};

const deleteEvent = async (id) => {
  let response = await fetch(url + id, {
    method: "DELETE",
  });
  return response;
};