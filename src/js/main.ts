const form: HTMLFormElement = document.getElementById("generate") as HTMLFormElement;
const backgroundColorInput: HTMLInputElement = form.querySelector("#bg-color");
const downloadBTN: HTMLAnchorElement = form.querySelector("#download");
const textColorInput: HTMLInputElement = form.querySelector("#txt-color");
const acronymInput: HTMLInputElement = form.querySelector("#acronymTextElement");
const titleInput: HTMLInputElement = form.querySelector("#titleTextElement");
const textInputs: HTMLInputElement[] = [acronymInput, titleInput];
const svgElement: SVGAElement = document.querySelector("#Logo");


type logoType = {
    acronymTextElement: SVGTextElement,
    titleTextElement: SVGTextElement,
    backgroundElements: SVGRectElement,
    lBrace: SVGPathElement,
    rBrace: SVGPathElement,
    textElements: SVGElement[]
}

/*
This function retrieves the necessary elements from the SVG document. We use a function to be able to use the same information several times
 */
function parseSVG(): logoType {
    const acronymTextElement: SVGTextElement = svgElement.querySelector('#acronym');
    const titleTextElement: SVGTextElement = svgElement.querySelector('#title');
    const backgroundElements: SVGRectElement = svgElement.querySelector('#background');
    const lBrace: SVGPathElement = svgElement.querySelector('#lBrace');
    const rBrace: SVGPathElement = svgElement.querySelector('#rBrace');
    return {
        acronymTextElement: acronymTextElement,
        titleTextElement: titleTextElement,
        backgroundElements: backgroundElements,
        lBrace: lBrace,
        rBrace: rBrace,
        textElements: [acronymTextElement, titleTextElement, lBrace, rBrace]
    };
}

const svgLogo: logoType = parseSVG();

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

function separateBraces() {
    let acronymLetterWidth: number = svgLogo.acronymTextElement.getComputedTextLength() * 0.75;
    console.log(svgLogo.acronymTextElement.getClientRects()[0].width);
    svgLogo.lBrace.setAttribute("transform", `translate(${Math.trunc(-acronymLetterWidth / 2)},0)`);
    svgLogo.rBrace.setAttribute("transform", `translate(${Math.trunc(acronymLetterWidth / 2)},0)`);
}

function drawLogo(info: { id: string; value: string }): void {
    // @ts-ignore
    svgLogo[info.id].textContent = info.value
    separateBraces();
}


loadDataInDForm();
separateBraces()