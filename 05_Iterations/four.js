// for each loop:- It a method in JavaScript that allows you to iterate over an 
//                array and perform an operation on each element of the array.


const coading = ['c','c++','python','java','javascript']
coading.forEach(function(val){
    console.log(val);
});


// process iteration in object
// normally we wil do iteration using for each loop in object

const mycoding =[
    {
        languagename: "javascript",
        languagefilename: "js"
    },
    {
        languagename: "python",
        languagefilename: "py"
    },
    {
        languagename: "c++",
        languagefilename: "cpp"
    }
]
mycoding.forEach((item)=> {
    console.log(item.languagename);
})