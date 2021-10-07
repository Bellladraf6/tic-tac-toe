class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
    }

    init = () => {
        this.model.init()
        const elements = this.model.getElements()
        this.view.drowItems(elements)
    }

}

export default Controller