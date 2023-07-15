class IdolPerson {
    constructor(name, age, concept,company) {
      this.name = name;
      this.age = age;
      this.concept = concept;
      this.company = company
    }
    sing(){
      console.log('sing a song~')
    }

    dance(){
      console.log('dance~')
    }
}

class SmIdol extends IdolPerson{
    company = 'SM'
    constructor(name,age,concept,company,salery) {
      super(name,age,concept,company)
      this.salery = salery
  }
    sing(){
      console.log('SM스럽게 sing')
    } //오버라이딩

}


const seorim = new IdolPerson('seorim', 18, 'sexy')
const  winter = new SmIdol('winter',25,'cute','1000')

const data = [
  { name : 'seorim', company:'none', age : 18, salery : 10000000, concept:'sexy'  },
    { name : 'winter', company:'SM', age : 15, salery : 100, concept:'cute'  },
]


const x = data.map(({name, age, concept,company})=>{ return new IdolPerson(name, age, concept,company)})
x[0].sing()
//name, age, concept,company