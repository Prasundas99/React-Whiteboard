import {SketchField, Tools} from 'react-sketch-whiteboard';

function Body() {
    return (
        <div>
           <SketchField  width='100vw' 
                         height='90vh' 
                         margin-top='4rem'
                         tool={Tools.Pencil} 
                         lineColor='black'
                         lineWidth={3}/>
        </div>
    )
}

export default Body
