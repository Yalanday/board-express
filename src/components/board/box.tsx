import type {CSSProperties, FC, ReactNode} from 'react'
import {useDrag} from 'react-dnd'

export const ItemTypes = {
    BOX: 'box',
}


const style: CSSProperties = {
    position: 'absolute',
    padding: '0',
    cursor: 'pointer',
    backgroundImage: 'url("/img/sticker.png")', backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"
}

export interface BoxProps {
    id: any
    left: number
    top: number
    hideSourceOnDrag?: boolean
    onDoubleClick?: () => void
    children?: ReactNode
}

const Box: FC<BoxProps> = ({
                               id,
                               left,
                               top,
                               hideSourceOnDrag,
                               onDoubleClick,
                               children,
                           }) => {
    const [{isDragging}, drag] = useDrag(
        () => ({
            type: ItemTypes.BOX,
            item: {id, left, top},
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, left, top],
    )

    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>
    }
    return (
        <div
            className="box"
            ref={drag}
            style={{...style, left, top}}
            data-testid="box"
            onDoubleClick={onDoubleClick}
        >
            {children}
        </div>
    )
};

export default Box;
