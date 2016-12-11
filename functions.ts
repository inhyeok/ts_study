function hello(name:string) {
  return "Hello, "+ name
}

var user = {
  name: "inhyeok",
  gender: "M"
}

// error
// Argument of type '{ name: string; gender: string; }' is not assignable to parameter of type 'string'.
// document.body.innerHTML = hello(user);
document.body.innerHTML = hello(user.name);

interface Person {
  firstName: string,
  lastName: string,
  gender: string,
  age: number
}

function intro(person: Person) {
  var text = "Name : " + person.firstName + " " + person.lastName;
  text += "<br>"
  if (person.gender === "M") {
    text += "gender : MAN"
  }
  else if (person.gender === "W") {
    text += "gender : WOMAN"
  }
  else {
    text += "gender : not person"
  }
  text += "<br>"+"age : " + person.age

  return text
}


var me = {
  firstName: "Jeong",
  lastName: "inhyeok",
  gender: "M",
  age: 20
}

document.body.innerHTML = intro(me);