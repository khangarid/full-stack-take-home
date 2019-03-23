const addEntry = async (entry) => {
  const response = await fetch(`/api/entries`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entry)
  })

  return await response.json();
}

const fetchEntries = async ({ page, limit, order, sort }) => {
  let query = '/api/entries?';

  if (page) query += `page=${page}&`;
  if (limit) query += `limit=${limit}&`;
  if (order) query += `order=${order}&`;
  if (sort) query += `sort=${sort}&`;

  const response = await fetch(query.substr(0, query.length - 1));

  return await response.json();
}

export default { fetchEntries, addEntry };
