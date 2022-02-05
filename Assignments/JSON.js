let JSON = {
    fname:'yogesh', 
    lname:'khanal',
    age:19,
    address:{
        city:'lalitpur',
        state:'Bagmati',
        country:'Nepal'
    },
    hobbies:['coding','reading','listening to music'],
    isMarried:false,
}

// json object in array format  
let array = [JSON, JSON]
console.log(array)


console.log('+++++++> after manipulating the data in JSON Object <+++++++')
// to manipulate the data of JSON object
JSON.fname = 'Mahesh'
JSON.lname = 'Khanal'
console.log(JSON)


// array inside JSON 
let newJSON = {
    fname: 'yogesh', 
    lname: 'khanal',
    friends:['kusal', 'mahesh', 'Ajaya', 'Bikash', 'umesh'],
    lastname:['basnet', 'khanal', 'Rai', 'Tamang', 'karki']
}
// accessing the array value from JSON Object 
console.log(newJSON["friends"])

// accessing the first value of array from JSON Object
console.log(newJSON["friends"][0])

// adding function inside a JSON Object
let newJSON1 = {
    fname: 'yogesh', 
    lname: 'khanal',
    friends:['kusal', 'mahesh', 'Ajaya', 'Bikash', 'umesh'],
    lastname:['basnet', 'khanal', 'Rai', 'Tamang', 'karki'], 
    // pushing a first and last name in JSON Object
    add: function(a,b){
        this['friends'].push(a)
        this['lastname'].push(b)
    }
}


newJSON1.add('Shiva', 'Giri') 
newJSON1.add('Krishna', 'Dhakal') 
newJSON1.add('Bishnu', 'waiba') 
console.log(newJSON1)



let student = [
    {
        name:'yogesh',
        age:19,
        address:{
            city:'lalitpur',
            state:'Bagmati',
            country:'Nepal'
        },
        hobbies:['coding','reading','listening to music'],
    },
    {
        name:'kusal',
        age:20,
        "rollnumber": 1,
        address:{
            city:'lalitpur',
            state:'Bagmati',    
            country:'Nepal'
        },
        hobbies:['coding','listening to music'],
    },
]
// accessing the array value from JSON Object
console.log(student[1].address.country)