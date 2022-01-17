function drawMenu() {

    var menu = document.createElement('nav');
    var ulHome = document.createElement('ul');

    var liHome = document.createElement('li');
    var aHome = document.createElement('a');
    aHome.setAttribute('href', 'index.html');
    aHome.innerHTML = 'Home';
    liHome.appendChild(aHome);
    //gregar el li al a


    var liGames = document.createElement('li');
    var aGames = document.createElement('a');
    aGames.setAttribute('href', 'games.html');
    aGames.innerHTML = 'Games';

    var liMovies = document.createElement('li');
    var aMovies = document.createElement('a');
    aMovies.setAttribute('href', 'movies.html');
    aMovies.innerHTML = 'Movies';
    var liMusic = document.createElement('li');
    var aMusic = document.createElement('a');
    aMusic.setAttribute('href', 'music.html');
    aMusic.innerHTML = 'Music';
    var liLogin = document.createElement('li');
    var aLogin = document.createElement('a');
    aLogin.innerHTML = 'Log in';
    aLogin.setAttribute('href', 'login.html');
    liLogin.setAttribute('class', 'float-right');






    var ulGames = document.createElement('ul');
    var li2d = document.createElement('li');
    var a2d = document.createElement('a');
    a2d.setAttribute('href', '2d.html');
    a2d.innerHTML = 'Games 2D';



    var ulMovies = document.createElement('ul');
    var ulMusic = document.createElement('ul');
    var ulLogin = document.createElement('ul');
    var liAction = document.createElement('li');
    var liHorror = document.createElement('li');
    var liAnime = document.createElement('li');
    var aAction = document.createElement('a');
    var aHorror = document.createElement('a');
    var aAnime = document.createElement('a');
    aAction.setAttribute('href', 'action.html');
    aAction.innerHTML = 'Action';
    aHorror.setAttribute('href', 'horror.html');
    aHorror.innerHTML = 'Horror';
    aAnime.setAttribute('href', 'anime.html');
    aAnime.innerHTML = 'Anime';






    var li3d = document.createElement('li');
    var a3d = document.createElement('a');
    a3d.setAttribute('href', '3d.html');
    a3d.innerHTML = 'Games 3D';



    ulGames.appendChild(li2d);
    li2d.appendChild(a2d);

    ulGames.appendChild(li3d);
    li3d.appendChild(a3d);

    ulMovies.appendChild(liAction);
    liAction.appendChild(aAction);
    ulMovies.appendChild(liHorror);
    liHorror.appendChild(aHorror);
    ulMovies.appendChild(liAnime);
    liAnime.appendChild(aAnime);

    liMusic.appendChild(aMusic);
    liMusic.appendChild(ulMusic);

    liLogin.appendChild(aLogin);
    liLogin.appendChild(ulLogin);

    liGames.appendChild(aGames);
    liGames.appendChild(ulGames);

    liMovies.appendChild(aMovies);
    liMovies.appendChild(ulMovies);





    //agregar li al ul
    ulHome.appendChild(liHome);
    ulHome.appendChild(liGames);
    ulHome.appendChild(liMovies);
    ulHome.appendChild(liMusic);
    ulHome.appendChild(liLogin);




    //agregar el ul al nav 
    menu.appendChild(ulHome);

    //agregar el nav a div con id menu
    var divMenu = document.querySelector('#menu');
    divMenu.appendChild(menu);

}