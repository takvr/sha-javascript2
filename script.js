let url = 'https://api.github.com/orgs/SocialHackersCodeSchool/repos';

const div = document.getElementById('content');
const div1 = document.getElementById('contributor');
const div2 = document.getElementById('searchResult');
let btn = document.getElementById('btn');
let searchBtn = document.getElementById('searchBtn');
let input = document.getElementById('myInput');

searchBtn.addEventListener('click', function(){
  while (div2.firstChild) {
    div2.removeChild(div2.firstChild)
  }
  fetch(url)
  .then(function(resp){
    return resp.json();
  })
  .then(function(myData){
    for (let i = 0; i < myData.length; i++){    
      if (input.value.toLowerCase() === myData[i].name.toLowerCase()){
        div2.innerHTML = JSON.stringify(myData[i]);
      } else if (input.value.length == 0) {
        div2.innerHTML ="Type a repository name!";
      } else {
        let error = document.createElement('div');
        error.innerHTML = "This is not a repository name!" + "<br>" + "Try again!";
        div2.appendChild(error);
      }
    }
  })
})


btn.addEventListener('click', function() {
  while (div.firstChild) {
    div.removeChild(div.firstChild)
  }
  fetch(url)
  .then(function(response){return response.json()})
  .then(function(data) {
    let stringData = JSON.stringify(data);

    data.forEach(function(foo){
      addRepos(foo);
    })
  })
})

function addRepos(repository) {

  let divTag = document.createElement('div');
  divTag.className = 'myRepos';
  let a = document.createElement('a');
  a.className = 'myLink';
  a.innerHTML = repository.name;
  a.href = repository.html_url;
  a.target = ('_blank');
  let button = document.createElement('button');
  button.innerHTML = 'contributors';
  divTag.appendChild(a);
  divTag.appendChild(button);
  div.appendChild(divTag);

  button.addEventListener('click', function(){
    while (div1.firstChild) {
      div1.removeChild(div1.firstChild)
    }
   fetch(repository.contributors_url)
   .then(function(res){return res.json()})
   .then(function(showData){
     let makeString = JSON.stringify(showData);
     for(let i=0; i<showData.length; i++){
       let p = document.createElement('p');
       p.innerHTML = showData[i].login;
       let img = document.createElement('img');
       img.src = showData[i].avatar_url;
       img.alt = 'contributor\'s photo'
       div1.appendChild(p);
       div1.appendChild(img);
     }
   })
 });
}
