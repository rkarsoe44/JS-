const output = document.getElementById("Output");
const W = document.getElementById("width");
const B = document.getElementById("breadth");
const recordList = document.getElementById("recordList")

const area = (w, b) => {
    return w * b;

}

const one = () => {

    const w = width.valueAsNumber;
    const b = breadth.valueAsNumber;
    const a = area(w, b);

    output.innerText =`${a}`

}

const clearAll = () => {
    width.value = null
    breadth.value = null
    output.innerText = null

}

const storeResult = () => {
    recordList.innerHTML += `<li>${width.value} ft * ${breadth.value} ft = ${output.innerText} sqft</li>`;
    clearAll();
}