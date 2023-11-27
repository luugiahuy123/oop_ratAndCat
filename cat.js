class Cat{
    constructor(name , weight , speed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = speed;
    }
    sound(text){
        console.log(text);
    }
    catch(rat){
        if (this.maxSpeed >= rat.speed)
            console.log(`meo ${this.name} da bat dc chuot ${rat.name}`);
        else
            console.log(`${rat.name}: meo ngu`)
    }
    eat(rat){
        console.log(`meo ${this.name} da an chuot ${rat.name}`);
        rat.status = false;
        this.weight += rat.weight;
    }


}