function customRender(reactElement, container) {
    /*

    This is more complex version of the code

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */


    // This is a more generic version of the code
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childern
    for (const prop in reactElement.props) {
        if(prop === "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)   
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://www.google.com',
        target : '_blank',
    },
    childern : "Click me to visit Google"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)