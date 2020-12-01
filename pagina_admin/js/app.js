const menuizquierdo=document.querySelector('.menu-izquierdo');

menuizquierdo.addEventListener('click',(e)=>
{
     const clasemenu=e.target.classList;
     
     const contenedor=document.querySelector('.pagina');
     const flechaizq=document.querySelector('.fa-arrow-left');
     const flechader=document.querySelector('.fa-arrow-right');

     if(clasemenu.contains('fa-arrow-left'))
     {
          // cerrar el menu lateral
          flechaizq.style.display='none';
          flechader.style.display='block';
          // agregar clases con js
          contenedor.classList.add('no-menu')



     }
     else if(clasemenu.contains('fa-arrow-right'))
     {
          flechaizq.style.display='block';
          flechader.style.display='none';
          contenedor.classList.remove('no-menu')

     }
}



)
