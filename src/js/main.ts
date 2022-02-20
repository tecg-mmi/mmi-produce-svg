const form: HTMLFormElement = document.getElementById("generate") as HTMLFormElement;
const backgroundColorInput: HTMLInputElement = form.querySelector("#bg-color");
const downloadBTN: HTMLAnchorElement = form.querySelector("#download");
const textColorInput: HTMLInputElement = form.querySelector("#tx-color");
const acronymInput: HTMLInputElement = form.querySelector("#acronymTextElement");
const titleInput: HTMLInputElement = form.querySelector("#titleTextElement");
const textInputs: HTMLInputElement[] = [acronymInput, titleInput];
const svgElement: SVGAElement = document.querySelector("#Logo");


type logoType = {
    acronymTextElement: SVGTextElement,
    titleTextElement: SVGTextElement,
    backgroundElements: SVGRectElement,
    textElements: SVGTextElement[],
}


const svgLogo: logoType = {
    acronymTextElement: svgElement.querySelector('#acronym'),
    titleTextElement: svgElement.querySelector('#title'),
    backgroundElements: svgElement.querySelector('#background'),
    textElements: [svgElement.querySelector('#acronym'), svgElement.querySelector('#title'), svgElement.querySelector('#lBrace'), svgElement.querySelector('#rBrace')],
}

form?.addEventListener("submit", (event) => {
    event.preventDefault();
});

backgroundColorInput?.addEventListener('input', function (event) {
    // @ts-ignore
    svgLogo.backgroundElements.setAttribute('fill', event.currentTarget.value);
})

textColorInput?.addEventListener('input', function (event) {
    svgLogo.textElements.forEach(element => {
        // @ts-ignore
        element.setAttribute('fill', event.currentTarget.value)
    })
})

downloadBTN.addEventListener('click', (event) => {
    const base64doc = btoa(unescape(encodeURIComponent(svgElement.outerHTML)));
    const link = event.currentTarget as HTMLAnchorElement;
    link.download = acronymInput.value + ".svg";
    link.href = 'data:image/svg+xml;base64,' + base64doc;
})

textInputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        const t = e.currentTarget as HTMLInputElement;
        drawLogo({id: t.id, value: t.value});
    });
})

function loadDataInDForm(): void {
    acronymInput.value = svgLogo.acronymTextElement.textContent;
    acronymInput.placeholder = "Exemple : " + svgLogo.acronymTextElement.textContent;
    titleInput.value = svgLogo.titleTextElement.textContent;
    titleInput.placeholder = "Exemple : " + svgLogo.titleTextElement.textContent;
    backgroundColorInput.value = svgLogo.backgroundElements.getAttribute("fill");
    textColorInput.value = svgLogo.acronymTextElement.getAttribute("fill");
}


function drawLogo(info: { id: string; value: string }): void {
    console.log(info)
    // @ts-ignore
    svgLogo[info.id].textContent = info.value
}


loadDataInDForm();