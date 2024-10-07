document.addEventListener('DOMContentLoaded', function(){
    const nome = document.getElementById('nome');
    const username = document.getElementById('username');
    const avatar = document.getElementById('avatar');
    const repositorios = document.getElementById('repositorios');
    const seguidores = document.getElementById('seguidores');
    const seguindo = document.getElementById('seguindo');
    const gitHubLink = document.getElementById('gitHubLink');
    
    fetch('https://api.github.com/users/rafaeldamacena9304')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        nome.innerText = json.name;
        username.innerText = json.login;
        avatar.src = json.avatar_url;
        repositorios.innerText = json.public_repos;
        seguidores.innerText = json.followers;
        seguindo.innerText = json.following;
        gitHubLink.href = json.html_url;
    })
})