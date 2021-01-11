# node_timer
### Clase para crear timers que se ejecuten indefinidamente
### **Apoyar el proyecto**
[![alt text](https://www.paypalobjects.com/es_XC/MX/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=HJT3RJKJ44EWQ&source=url
)
# Para Instalar
```javascript 
npm i @gamalielmh921230/node_timer 
//o
yarn add @gamalielmh921230/node_timer
````

# Como se Usa
```javascript 
    const Timer = require('@gamalielmh921230/node_timer')

    const Reloj= new Timer(1000,()=>{ 
        
        const horas = (new Date()).getHours();
        const minutos = (new Date()).getMinutes();
        const segundos = (new Date()).getSeconds();

        console.log(`${horas}:${minutos}:${segundos}`)
    })

    //se arranca el timer
    Reloj.start()

```` 
# Definicion de la clase
### **Metodos**
- **start():** *Arranca la ejecucion del timer*
- **stop():** *Detiene la ejecucion del timer*
- **setCallback():** *Establece la funcion que  se ejecutara en cada ciclo*
- **setInterval():** *Establece el intervalo de tiempo que tardara en ejecutar un ciclo*
- **isrunning():** *true si el timer esta activo*
