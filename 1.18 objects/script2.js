
const a = {                                                                                                    //object name is a they are used just like array to group certain elements or data togethet
    firtName: 'jonas',                                                                                         //these are properties i.e firstName and age and lastName
    lastName: 'Schmedtmann',                                                                                   //order not imp
    birthyear: 1991,
    age: 2023 - 1991,
    friends: ['micheal', ' bob', 'alica'],
    hasDriversLicence: true,
    dk: 44,

    // calcAge: function (birthyear) {                                                                            //its the same as function age = calcAge(birthyear){return 2023-birthyear}         
    //     return 2023 - birthyear;                                                                               //function attached to an object is called method       
    // },                                                                                                         //funtion mus be entered in ax expression manner not declaartion as objects only accept expression as expression produces value held by pro[erty of object

    calcAge2: function () {
        console.log(this)//you ll see that this is a keyword that creates a copy of the object it is called into
        return 2023 - this.birthyear;//just like we access obj properties this is object's copy so access in same way
    }
}

a.calcAge2();
console.log('line change')
console.log(a.calcAge2())
