class Model {
    constructor() {
        this.elements = []
    }

    init = () => {
        this.elements = [
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
            {
                text: '',
                element: 'div',
                className: 'block',
            },
        ]
    }

    getElements = () => this.elements

    setElements = (array) => {
        this.elements = array
    }
}

export default Model