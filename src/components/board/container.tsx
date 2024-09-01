import update from "immutability-helper";
import React, { CSSProperties, FC } from "react";
import { useCallback, useState } from "react";
import type { XYCoord } from "react-dnd";
import { useDrop } from "react-dnd";

import Box from "./box";

export interface DragItem {
    type: string
    id: string
    top: number
    left: number
}

export const ItemTypes = {
    BOX: 'box',
}


export interface ContainerProps {
    hideSourceOnDrag: boolean;
    widthBoard: number,
    heightBoard: number,
}

export interface ContainerState {
    boxes: { [key: string]: { top: number; left: number; title: string } };
}

const Container: FC<ContainerProps> = ({ hideSourceOnDrag , widthBoard, heightBoard}) => {
    let widthValue = widthBoard - 50;
    let heightValue = heightBoard - 50;
    console.log(typeof widthValue)

    const styles: CSSProperties = {
        width: widthValue,
        height: heightValue,
        position: "relative",
        backgroundImage: "url('https://impult.ru/preview/r/-x-/upload/iblock/713/zqc1afp43mhxvp4gzowqvh65c6fi6xnp.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: '100% 100%',
    };

    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number;
            left: number;
            title: string;
        };
    }>({
        a: { top: 20, left: 80, title: "Летающая хуета по экрану" },
        b: { top: 180, left: 20, title: "Вторая летающая хуета по экрану" },
    });

    const moveBox = useCallback(
        (id: string, left: number, top: number) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: { left, top },
                    },
                })
            );
        },
        [boxes, setBoxes]
    );

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveBox(item.id, left, top);
                return undefined;
            },
        }),
        [moveBox]
    );

    return (
        <div ref={drop} style={styles}>
            {Object.keys(boxes).map((key) => {
                const { left, top, title } = boxes[key] as {
                    top: number;
                    left: number;
                    title: string;
                };
                return (
                    <Box
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}
                    >

                        <div style={{width: '200px', height: '250px', padding: '35px 20px', fontSize: '20px'}}

                        >{title}</div>
                    </Box>
                );
            })}
        </div>
    );
};

export default Container;
