
async function fetchUser() {
  try{
    let emails = [];
    let response = await fetch('https://jsonplaceholder.typicode.com/usersd');
    let users = await response.json();
    emails = users.map((user)=>user.email)
    console.log(emails);
  }catch(error){
    console.log("Error Message: "+ error);
  }
}

fetchUser();


/*
Output:
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
]*/