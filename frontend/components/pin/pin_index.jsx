
import React from 'react'
import PinIndexItem from './pin_index_item'
import MagicGrid from 'react-magic-grid'

class PinIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPins()
    }

    render() {
        const { pins } = this.props;


//         const Cards = ({ cards }) => (
//             <MagicGrid items={cards.length}>
//                 {cards.map(item => (
//       <Card key={item} item={item} />
//     ))}
//   </MagicGrid>
// )

        // let magicGrid = new MagicGrid({
        //     container: '.pin-index-container',
        //     items: pins.length,
        //     animate: true,
        //     gutter: 5,

        // })

        // magicGrid.listen();

        return (
            <div className="index-container">
                <h1 id='header'>Latest Pins</h1>
                <div className="pin-index-container">
                    {/* <MagicGrid items={pins.length}> */}
                        {pins.reverse().map((pin) => (
                            <PinIndexItem
                                pin={pin}
                                key={pin.id}
                                photo={pin.photoUrl}
                            />
                        ))}
                    {/* </MagicGrid>  */}
                </div>
            </div>
        );
    }
}

export default PinIndex