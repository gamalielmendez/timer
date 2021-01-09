export default class Timer{

    private Interval:number=1000
    private callBack:any=null
    private myThread:any=null
    private enabled:boolean=false

    constructor(Interval:number=1000,callBack:any=null){
        this.Interval=Interval
        this.callBack=callBack
    }

    start(){
        this.myThread=setTimeout(this.Tick,this.Interval,this)
        this.enabled=false
    }

    stop(){
        clearTimeout(this.myThread)
        this.enabled=false
    }

    setCallback(callBack:any=null){
        this.callBack=callBack
    }

    setInterval(Interval:number=1000){
        this.Interval=Interval
    }

    isrunning(){
        return this.enabled 
    }

    private async Tick(_this:any){
        
        if(_this.callBack){
            await _this.callBack(_this.Interval) 
        }  

        //se reinicia el hilo
        _this.start() 

    }

}