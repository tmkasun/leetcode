console.clear()
const Person = function () {
    const getAgeFunc = () => {
        return this.age;
    }

    return {
        name: '',
        age: -1,
        getName: function () {
            return this.name
        }.bind({name: "fosadsad"}),
        getAge: getAgeFunc.bind({ age: 2222 })()
    }
}

const person1 = new Person();
person1.name = "Kasun"

const person2 = new Person();
person2.name = "Sukan"
console.log(person1.getName())
console.log(person2.getAge)