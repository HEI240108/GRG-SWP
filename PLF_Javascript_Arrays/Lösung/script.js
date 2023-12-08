const allUseButtons = document.querySelectorAll("section.samples button");
const allInputs = document.querySelectorAll("section.input input");
const output = document.getElementById("output");

const swap1 = document.getElementById("swap1");
const swap2 = document.getElementById("swap2");
const swap3 = document.getElementById("swap3");

/////////////////////////////////////////////////// GLOBAL STUFF ///////////////////////////////////////////////////

function getInput(number, mode) {
    element = allInputs[number - 1];
    if (mode === "eval") {
        return eval(element.value);
    }
    if (mode === "value") {
        return element.value;
    }
    if (mode) {
        throw Error(`mode ${mode} is not expected here`);
    }
    return element;
}
output.publish = (arg) => {
    output.innerHTML = JSON.stringify(arg);
    output.value = JSON.stringify(arg);
};

// swap
function swap(a, b) {
    const first = getInput(a);
    const second = getInput(b);
    const tmp = first.value;
    first.value = second.value;
    second.value = tmp;
}
swap1.addEventListener("click", () => {
    swap(1, 2);
});
swap2.addEventListener("click", () => {
    swap(2, 3);
});
swap3.addEventListener("click", () => {
    swap(3, 4);
});

allUseButtons.forEach((b) => {
    console.log(b);
    b.addEventListener("click", (e) => {
        input1.value = e.target.previousElementSibling.value;
    });
});

/////////////////////////////////////////////////// BUTTONS ///////////////////////////////////////////////////

// button push
const button_push = document.getElementById("button_push");
function push() {
    const i1 = getInput(1, "eval");
    const i2 = getInput(2, "eval");
    i1.push(i2);
    output.publish(i1);
}
button_push.addEventListener("click", push);

// button indexof
const button_indexof = document.getElementById("button_indexof");
function indexof() {
    const i1 = getInput(1, "eval");
    const i2 = getInput(2, "eval");
    output.publish(i1.indexOf(i2));
}
button_indexof.addEventListener("click", indexof);

// button includes
const buttonIncludes = document.getElementById("button_includes");
function includes() {
    console.log("includes");
    output.publish(getInput(1, "eval").includes(getInput(2, "eval")));
}
buttonIncludes.addEventListener("click", includes);

// button reverse
const button_reverse = document.getElementById("button_reverse");
function reverse() {
    output.publish(getInput(1, "eval").reverse());
}
button_reverse.addEventListener("click", reverse);

// button slice
const button_slice = document.getElementById("button_slice");
// button splice
const button_splice = document.getElementById("button_splice");
button_splice.addEventListener("click", splice);

// button of
const button_of = document.getElementById("button_of");
button_of.addEventListener("click", of);

// button map
const button_map = document.getElementById("button_map");
function map() {
    console.log("map");
    output.publish(getInput(1, "eval").map(getInput(2, "eval")));
}

button_map.addEventListener("click", map);

// button filter
const button_filter = document.getElementById("button_filter");
button_filter.addEventListener("click", filter);

// button split
const button_split = document.getElementById("button_split");
button_split.addEventListener("click", split);

// button join
const buttonJoin = document.getElementById("button_join");
buttonJoin.addEventListener("click", join);

// button some
const buttonSome = document.getElementById("button_some");
buttonSome.addEventListener("click", some);

// button spread
const buttonSpread = document.getElementById("button_spread");
buttonSpread.addEventListener("click", spread);

function slice() {
    output.publish(getInput(1).slice(getInput(2), getInput(3)));
}

function splice() {
    output.publish(getInput(1).splice(getInput(2), getInput(3), getInput(4)));
}

function of() {
    output.publish(
        Array.of(getInput(1), getInput(2), getInput(3), getInput(4))
    );
}

function filter() {
    output.publish(
        eval(getInput(1)).filter((element) => {
            return element == getInput(2);
        })
    );
}

function split() {
    output.publish(getInput(1).split(getInput(2)));
}

function join() {
    output.publish(getInput(1).join(getInput(2)));
}

function some() {
    output.publish(
        getInput(1).some((element) => {
            return element == getInput(2);
        })
    );
}

function spread() {
    const [one, two, ...rest] = getInput(1);
    output.publish(rest);
}
