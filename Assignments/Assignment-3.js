// json of students 
let student = [
    {
        name:'yogesh',
        age:19,
        address:{
            city:'lalitpur',
            state:'Bagmati',
            country:'Nepal'
        },
        dob: new Date('2002-5-5'),
        addAge: function(age){
            return new Date() - this.dob;
        },  
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
        dob: new Date('2001-2-12'),
        addAge: function(){
            return new Date() - this.dob;
        }
    },
    {
        name:'Ajaya',
        age:21,
        "rollnumber": 2,
        address:{
            city:'lalitpur',
            state:'Bagmati',
            country:'Nepal'
        },
        dob: new Date('2002-4-12'),
        addAge: function(){
            return new Date() - this.dob;
        }
    }
]


student.forEach(student => {
    console.log(Math.floor(student.addAge()/(3600*24*365*1000)))
})
    