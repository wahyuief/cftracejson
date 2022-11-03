export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req) {
  let jsonData = {};
  
  await fetch('https://1.1.1.1/cdn-cgi/trace')
  .then(res => res.text())
  .then(data => {
    for (let entry of data.split("\n")) {
      let pair = entry.split("=");
      if (entry.length > 0) jsonData[pair[0]] = pair[1];
    }
  })

  return new Response(JSON.stringify(jsonData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  })
}
