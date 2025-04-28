
function fetchUser(){
   fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())    // make sure to give () to json.
    .then((users)=>{
     let emails = users.map((user)=>user.email);
     console.log(emails);
  })
  .catch((error)=>console.log(error));
}
fetchUser();

/*
[
  'Sincere@april.biz',
  'Shanna@melissa.tv',
  'Nathan@yesenia.net',
  'Julianne.OConner@kory.org',
  'Lucio_Hettinger@annie.ca',
  'Karley_Dach@jasper.info',
  'Telly.Hoeger@billy.biz',
  'Sherwood@rosamond.me',
  'Chaim_McDermott@dana.io',
  'Rey.Padberg@karina.biz'
]
*/