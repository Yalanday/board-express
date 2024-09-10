import type { FC } from 'react'
import { useCallback, useState } from 'react'

import Container from "./container";


type ExampleProps = {
    widthBoard: number,
    heightBoard: number,
}

const Example: FC<ExampleProps> = ({widthBoard, heightBoard}) => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)



    return (
        <div>
            <Container hideSourceOnDrag={hideSourceOnDrag} widthBoard={widthBoard} heightBoard={heightBoard}/>
        </div>
    )
}

export default Example
