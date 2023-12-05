// input
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");

// output
const output = document.getElementById("output");
output.publish = function (arg) {
    this.innerHTML = JSON.stringify(arg);
};

// button push
const button_push = document.getElementById("button_push");
button_push.addEventListener("click", push);

// button indexof
const button_indexof = document.getElementById("button_indexof");
button_indexof.addEventListener("click", indexof);

// button includes
const button_includes = document.getElementById("button_includes");

// button slice
const button_slice = document.getElementById("button_slice");

function push() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    i1.push(i2);
    output.publish(i1);
}

function indexof() {
    const i1 = eval(input1.value);
    const i2 = eval(input2.value);
    output.publish(i1.indexOf(i2));
}
