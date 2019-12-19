import * as React from 'react'
import '../../../stylesheets/AddColorForm.scss'

interface AddColorFormProps {
    onNewColor: Function
}

class AddColorForm extends React.Component<AddColorFormProps> {
    static defaultProps = {
        onNewColor: f=>f
    }

    private _title = React.createRef<HTMLInputElement>()
    private _color = React.createRef<HTMLInputElement>()

    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
       
    }

    submit(e) {
        const { onNewColor } = this.props

        const title = this._title.current!
        const color = this._color.current!

        e.preventDefault()
        onNewColor(title.value, color.value)
        title.value = ''
        color.value = '#000000'
        title.focus()
    }

    render() {
        return (
            <form className="add-color" onSubmit={this.submit}>
                <input ref={this._title}
                       type="text"
                       placeholder="color title..." required/>
                <input ref={this._color}
                       type="color" required/>
                <button>ADD</button>
            </form>
        )
    }

}


export default AddColorForm
