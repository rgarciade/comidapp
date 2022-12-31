const headers = {
  'Content-Type': 'application/json',
}

export const get = async (url: string) => {
  const response = await fetch(url, {
    method: 'GET',
    headers,
  })
  return response.json()
}

export const post = async (url: string, body: JSON) => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(body),
  })
  return response.json()
}

export const put = async (url: string, body: JSON) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  })
  return response.json()
}

export const path = async (url: string) => {
  const response = await fetch(url, {
    method: 'PATH',
    headers,
  })
  return response.json()
}

export const del = async (url: string) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers,
  })
  return response.json()
}
