function fetchPerson() {
  fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => makePerson(json["results"][0]));
}

function makePerson(data) {
  let person = new Person(data);
  person.render();
}

const Person = (() => {
  return class Person {
    constructor(data) {
      console.log(data);
      this.name = `${data.name.first} ${data.name.last}`;
      this.email = data.email;
      this.street = data.location.street;
      this.city = data.location.city;
      this.state = data.location.state;
      this.postcode = data.location.postcode;
      this.phone = data.phone;
      this.dob = data.dob;
      this.picture = data.picture.medium;
    }

    render() {
      console.log(this);
      document.getElementById("fullname").innerHTML = `${this.name}`;
      document.getElementById("email").innerHTML = `${this.email}`;
      document.getElementById("street").innerHTML = `${this.street}`;
      document.getElementById("city").innerHTML = `${this.city}`;
      document.getElementById("state").innerHTML = `${this.state}`;
      document.getElementById("postcode").innerHTML = `${this.postcode}`;
      document.getElementById("phone").innerHTML = `${this.phone}`;
      document.getElementById("date_of_birth").innerHTML = `${this.dob}`;
      document.getElementById("photo").src = `${this.picture}`;
    }
  };
})();

document.getElementById("click_here").addEventListener("click", e => {
  // debugger;
  fetchPerson();
});
