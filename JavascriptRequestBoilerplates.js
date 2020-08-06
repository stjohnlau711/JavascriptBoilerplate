fetch('https://api-to-call.com/endpoint') //GET AJAX Boilerplate
.then((response) => {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message)
})
.then((jsonResponse) => {
  return jsonResponse;
});


fetch('https://api-to-call.com/endpoint',{ //POST AJAX Boilerplate
  method: 'POST',
  body: JSON.stringify({id: '200'})
}).then((response) => {
  if(response.ok){
    return response.json();
  }
  throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message);
}).then((jsonResponse) => {
  return jsonResponse;
});

const getData = async () => { //GET Async and Await Boilerplate
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}

const getData = async () => { //POST Async and Await Boilerplate
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}
