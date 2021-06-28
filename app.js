// const token = 'NTM4MTgwMTUwODE1OTg5OC42NzUyMjg1OTUxMDUyNDYxLlZYUUFPeThOaUxwdWdlV1lWemJSODVpT2FHbm5LcE1YVTRlSnhsMHlVaWhzY2JwdENPRDVDdkVYajVxNmdPU295L2prckJYQzlMQ1ZZcWw1eVllYjV3PT0='

// const getData = () => {
//   const result = fetch('https://redesign-build-api.thebdxlive.com/Bdx', {
//     method: 'GET',
//     mode: 'no-cors',
//     headers: {
//       'Authorization': 'Bearer' + token
//     }
//   })

// }

// const users = getData()
// console.log(users)

// fetch('/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//   },
//   body: JSON.stringify({query: "{ hello }"})
// })
//   .then(r => r.json())
//   .then(data => console.log('data returned:', data))

// async function getData(){
//   const data = JSON.stringify({
//     query: `
//       {
//         users{
//           userName
//         }
//       }
//     `
//     })
// }

// fetch('https://redesign-build-api.thebdxlive.com/Bdx', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Accept': 'application/json',
//     Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyTmFtZSI6Imd2YWx2ZXJkZSIsIlVzZXJJZCI6MzQwMTMsIlJvbGVzIjpudWxsLCJleHAiOjE2MjM2OTM5NTd9.9PBno7U7NFW51QBENLwHm7NzYb1mbApFekC57NhK8ZQ"
//   },
//   body: data
//   })

// const getToken = async () => {

//   const result = await fetch('https://redesign-build-api.thebdxlive.com/Bdx', {
//       method: 'POST',
//       headers: {
//           'Content-Type' : 'application/x-www-form-urlencoded', 
//           'Authorization' : 'Basic ' + btoa("wendyzuniga:password")
//       },
//       body: 'grant_type=client_credentials'
//   });

//   const data = await result.json();
//   return data.access_token;
// }

// getToken()

// let arr = []
// fetch('https://redesign-build-api.thebdxlive.com/Bdx', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json, text/palin',
//     'Accept': 'application/json',
//     "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VyTmFtZSI6Imd2YWx2ZXJkZSIsIlVzZXJJZCI6MzQwMTMsIlJvbGVzIjpudWxsLCJleHAiOjE2MjM2OTQyMTR9._Z-R0mzi0R14QnafjleIrbzCeHIXUHzru_RvaiTaAjI"
//     //"Authorization": "Basic "+ btoa('wendyzuniga:password') 
//     //"Authorization": token ? `Bearer ${token}` : "",
//   },
//   body: JSON.stringify({
//     query: `
//       {
//         users{
//           userName
//         }
//       }
//     `
//     }),
// })
//   .then(r => r.json())
//   .then(data => {
//       //this.NewArr = data
//       console.log('data returned:', data)
//       arr= data.Result
//     });

// console.log('arr', arr)

fetch('http://redesign-dev-api.thebdxlive.com/Bdx',{
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Accept-encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    "Authorization": 'Basic ' + btoa('aquiros:password')
  }, 
  body: "OTc2NDkwMDE1MTYzNjcyNC45ODA4NTMwOTY2OTg1NjYwLjNzZURqaFFGbDF0ckVoZ2EwYm1WRFJQVk5kcG1sMEVJTlpGUy9lU0pzZEs4Y2MxTU81ejhvMFdNdTdOV0dkNzk="
}).then(res => res.json())
.then(res => console.log(res))