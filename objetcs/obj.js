let student = {
    name:"waris",
    class:"Software Engineering",
    position : "AI Engineer at Google",
    salary : 40000,
};

// how to access element of the objects way1
console.log(student.class);
console.log(student.name);
console.log(student.position);
console.log(student.salary);


// how to access element of the objects way2

console.log(student["name"]);
console.log(student["class"]);
console.log(student["salary"]);
console.log(student["position"]);



delete(student.name);
console.log(student);


student.package = "COST to company";
console.log(student);

// to check the type of thw objects
console.log(typeof(student));