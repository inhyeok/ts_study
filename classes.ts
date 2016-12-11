class FullText {
  fullText: string;
  constructor(public firstName, public lastName) {
    this.fullText = "Name : " + firstName + " " + lastName
  }
}

interface Person {
  firstName: string,
  lastName: string,
  fullText: string
}

function intro (person: Person) {
  return "Name : " + person.fullText;
}

var user = {
  firstName: "Jeong",
  lastName: "inhyeok"
}

var user_info = new FullText(user.firstName, user.lastName)
// user_info = {firstName : "Jeong", fullText : "Name : Jeong inhyeok", lastName : "inhyeok"}

document.body.innerHTML = intro(user_info);