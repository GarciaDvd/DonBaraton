function changeApart(num) {
    var img = document.getElementById('imgAside');
    var text = document.getElementById('hApart');
    var href = document.getElementById('btnPrinSM');
    var lbls = document.getElementsByName('lbls');
    var inf = document.getElementById('infApart');
    for (let index = 0; index < lbls.length; index++) {
        if(num===index){
            lbls[index].style.backgroundColor = '#368f5b';
        }else{
            lbls[index].style.backgroundColor = '#e4dddd';
        }
    }
    switch(num){
        case 0:
            img.src = './mms/deportes.png';
            text.textContent = 'DEPORTES';
            href.href = 'deportes.html';
            inf.textContent = 'En esta seccion encontraras el equipo necesario para cualquier deporte, asi como su mercancia e incluso material exclusivo de marcas.'
        break;
        case 1:
            img.src = './mms/comida.png';
            text.textContent = 'COMIDA';
            href.href = 'comida.html';
            inf.textContent = 'Podras encontrar sin fin de diferentes tipos de alimentos. Limpio, seguro, rapido y optimizado para que tu comida llegue justo a tiempo.';
        break;
        case 2:
            img.src = './mms/gaming.png';
            text.textContent = 'GAMING';
            href.href = 'gaming.html';
            inf.textContent = 'Equipos recientes para el mundo de los videojuegos, sirviendo tambien para trabajos de oficina, renderizado y muchos mas. Con los mejores materiales y componentes.';
        break;
    }
}