
const User = function(name , age ){
    this.name = name
    this.age = age
    this.showName = ()=> {
        console.log(this.name + '이름나올거야')
    }
    // this.showName2 = function(){
    //     console.log(this.name + '얘도이름')
    // }
}

const x = new User('a',1)
User.prototype.showName = function(){
    console.log('프로토타입 주입 show Name')
}

console.dir(x.prototype)