module.exports = class Timer{

    //Interval=1000
    //callBack=null
    //myThread=null
    //enabled=false

    constructor(Interval=1000,callBack=null){
        this.Interval=Interval
        this.callBack=callBack
        this.myThread=null
        this.enabled=false
    }

    start(){
        this.myThread=setTimeout(this.Tick,this.Interval,this)
        this.enabled=true
    }

    stop(){
        clearTimeout(this.myThread)
        this.enabled=false
    }

    setCallback(callBack=null){ this.callBack=callBack }

    setInterval(Interval=1000){ this.Interval=Interval }

    isrunning(){ return this.enabled }

    async Tick(_this){
        
        if(_this.callBack){
            await _this.callBack(_this.Interval) 
        }  

        //se reinicia el hilo
        _this.start() 

    }
}