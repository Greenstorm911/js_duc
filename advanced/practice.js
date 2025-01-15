console.log('aaaaaaaaaaaaaaaaaaaa');

function StopWatch(){
    let started = false;
    let startTime = 0;
    let stopTime = 0;
    let duration =0;
    this.start = function(){
        if(started)
            throw new Error('the watch allready started')
        started = true
        startTime = new Date().getTime();
        
        console.log('started');
    }
    this.stop = function(){
        if(!started)
            throw new Error('the watch is allready stoped')
        started = false
        stopTime = new Date().getTime();
        let secends = (stopTime - startTime) / 1000
        duration += secends
        console.log('stoped');
        
    }
    this.reset = function(){
        started = false
        startTime = 0
        stopTime = 0
        duration = 0
    }
    Object.defineProperty(this, 'duration',{
        get: function(){
            return duration
        }
    })
}

let sw = new StopWatch()

