import React, { Component } from 'react';

class CharInfo extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                expanded: false,

            }
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    //functions to perform expansion on description
    open() {
        this.setState({ expanded: true })
    }
    close() {
        this.setState({ expanded: false })
    }

    render() {
        const info = this.props.charInfo;
        if (!this.state.expanded) { //opens and closes the description field
            return <p className="btn btn-info" onClick={this.open}>Show Description</p>
        }
        return (
            <div>
                <p className="btn btn-warning" onClick={this.close}>Close Description</p>
                <table class="table table-striped">
                    <tbody>
                        <tr>

                            <td>Name: {info.name}</td>
                            <td>Mass: {info.mass}</td>
                            <td>Height: {info.height}</td>
                            <td>Birth year: {info.birth_year}</td>
                        </tr>
                        <tr align="ceter">
                            <td >This is my favorite Character</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


export default CharInfo;