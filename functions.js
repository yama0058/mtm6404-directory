//  list function
function list(clients) {
  return clients.map(client => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
      ${client.name}
      <strong>$ ${client.balance.toFixed(2)}</strong>
    </li>
  `).join('');
}

// Order
function order(clients, property) {
  return clients.slice().sort((a, b) => {
    if (typeof a[property] === 'string') {
      return a[property].localeCompare(b[property]);
    } else {
      return a[property] - b[property];
    }
  });
}

// Total
function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

// Info
function info(index) {
  return clients.find(client => client.index === index);
}

// search
function search(query) {
  return clients.filter(client =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );
}
