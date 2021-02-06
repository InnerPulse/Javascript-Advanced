function tickets(ticketsInfo, sortingCriteria) {
  class Ticket {
    constructor(destination, price, status, id) {
      (this.destination = destination),
        (this.price = price),
        (this.status = status),
        (this.id = id);
    }
  }

  const tickets = [];

  ticketsInfo.forEach((t, i) => {
    const [destination, price, status] = t.split('|');
    tickets.push(new Ticket(destination, Number(price), status, i));
  });

  const sorting = {
    status(tickets) {
      return tickets.sort(
        (a, b) => a.status.localeCompare(b.status) || a.id - b.id
      );
    },
    destination(tickets) {
      return tickets.sort(
        (a, b) => a.destination.localeCompare(b.destination) || a.id - b.id
      );
    },
    price(tickets) {
      return tickets.sort((a, b) => a.price - b.price || a.id - b.id);
    },
  };

  const sort = sorting[sortingCriteria];
  return sort(tickets);
}
