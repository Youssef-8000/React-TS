import axios from "axios"
export function getPosts() {
  return (  
    axios.get("https://jsonplaceholder.typicode.com/todos").then(res => res.data)
  )
}

export function getPost(id: number) {
  return (  
    axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => res.data)
  )
}


export function createPost({userId, title}: any) {
  return (  
    axios
    .post(`https://jsonplaceholder.typicode.com/todos`, {
      id: Date.now,
      userId,
      title,
      completed: false,
    })
    .then(res => res.data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  )
}

