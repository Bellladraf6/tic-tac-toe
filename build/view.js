class View {
    constructor() {
        this.container = document.getElementById('container')
        this.wrapper = document.createElement('div')
        this.wrapper.id = 'wrapper'
        this.container.append(this.wrapper)
    }

    drowItems = (elements) => {
        elements.forEach(element => {
            this.wrapper.append(this.createElement(element))
        });
    }

    createElement = params => {
        const {
            id,
            text,
            element,
            className
        } = params

        const tag = document.createElement(element)
        id && (tag.id = id)
        text && (tag.innerText = text)
        className && tag.setAttribute('class', className)

        return tag
    }
}

export default View