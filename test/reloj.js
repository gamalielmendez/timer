const Timer = require('../index')

const Reloj= new Timer(1000,()=>{ 
    
    const horas = (new Date()).getHours();
    const minutos = (new Date()).getMinutes();
    const segundos = (new Date()).getSeconds();

    console.log(`${horas}:${minutos}:${segundos}`)
})

//se arranca el timer
Reloj.start()