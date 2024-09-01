import type { FC } from 'react'
import { useCallback, useState } from 'react'

import Container from "./container";

type ExampleProps = {
    widthBoard: number,
    heightBoard: number,
}

const Example: FC<ExampleProps> = ({widthBoard, heightBoard}) => {
    const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
    const toggle = useCallback(
        () => setHideSourceOnDrag(!hideSourceOnDrag),
        [hideSourceOnDrag],
    )

    return (
        <div>
            <Container hideSourceOnDrag={hideSourceOnDrag} widthBoard={widthBoard} heightBoard={heightBoard}/>
            {/*<p>*/}
            {/*    <label htmlFor="hideSourceOnDrag">*/}
            {/*        <input*/}
            {/*            id="hideSourceOnDrag"*/}
            {/*            type="checkbox"*/}
            {/*            role="checkbox"*/}
            {/*            checked={hideSourceOnDrag}*/}
            {/*            onChange={toggle}*/}
            {/*        />*/}
            {/*        <small>Hide the source item while dragging</small>*/}
            {/*    </label>*/}
            {/*</p>*/}
        </div>
    )
}

export default Example
