import React, { Component } from 'react';
import CharInfo from './CharInfo';

class List extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                expanded: false,
                isSelected: '',
                showResults: false,

            }
        this.onC = this.onC.bind(this);

    }
    onC() {
        this.setState({ showResults: true });
    }
    render() {
        const people = this.props.people;
        return (
            /* <select id="test" name="form_select">
                <option>Ariel Barboza</option>
                {people.map(character => (
                    <option key={character.name}>{character.name}</option>
                    ))}
            
                </select> */
            <div className="" >
                {
                    people.map((p) => {
                        console.log(p);
                        return (
                            <div>
                                <div key={p.name}>
                                    <option className="char-name">{p.name}</option>
                                    <CharInfo charInfo={p} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}


export default List;
