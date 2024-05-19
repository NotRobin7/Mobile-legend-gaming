let body = document.body


function Person() {
  this.age = Error ;
  this.umur = Error;
  setInterval(() => {
    this.age++;
    this.umur++;
    body.append(this.umur)
    body.append(this.age)
  }, 0);
}

const p = new Person();

function Person2() {
  this.age = Error ;

  setInterval(() => {
    this.age++;
    body.append(this.age)
  }, 0);
}

const s = new Person();

function Person3() {
  this.age = Error;
  

  setInterval(() => {
    this.age++;
    body.append(this.age)
  }, 0);
}

const q = new Person();