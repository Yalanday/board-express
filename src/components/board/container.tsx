import update from "immutability-helper";
import React, {CSSProperties, FC} from "react";
import {useCallback, useState, useEffect} from "react";
import type {XYCoord} from "react-dnd";
import {useDrop} from "react-dnd";
import {Modal} from 'antd';
import {setStickers} from "../../redux/board-reducer";
import {setIdSticker} from "../../redux/id-sticker-reducer";
import Box from "./box";
import AddStickerButton from "../../ui/add-sticrer-button/add-sticker-button";
import FormNewStickers from "../form-new-sticker/form-new-stickers";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";

const getRandomInteger = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


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

const Container: FC<ContainerProps> = ({hideSourceOnDrag, widthBoard, heightBoard}) => {
    let widthValue = widthBoard - 50;
    let heightValue = heightBoard - 50;

    const dispatch = useAppDispatch();
    const {id} = useAppSelector(state => state.id);
    let {boards} = useAppSelector(state => state.boards);
    const currentBoard = boards.find(board => board.id === id);

    const [isModalOpen, setIsModalOpen] = useState(false);


    const showModal = (key: string) => {
        setIsModalOpen(true);
        console.log(key)
        dispatch(setIdSticker(+key));
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const styles: CSSProperties = {
        width: widthValue,
        height: heightValue,
        position: "relative",
        backgroundImage: `url(${currentBoard?.boardBg === undefined ? 'none' : currentBoard?.boardBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: '100% 100%',
    };

    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number;
            left: number;
            title: string;
            color?: string;
            status?: boolean;
            data?: any;
            deadline?: any;
            description?: string;
        };
    }>({...currentBoard?.stickers});

    const moveBox = useCallback(
        (id: string, left: number, top: number) => {
            setBoxes(
                update(boxes, {
                    [id]: {
                        $merge: {left, top},
                    },
                })
            );
        },

        [boxes, setBoxes]
    );

    const setNewPosition = (id: any, leftData: number, topData: number) => {
        let newBoxes = {...boxes};
        newBoxes[id] = {
            top: topData,
            left: leftData,
            title: boxes[id].title,
            color: boxes[id].color,
            status: boxes[id].status
        }
        dispatch(setStickers({currentBoard, newBoxes}));
    }

    const [, drop] = useDrop(
        () => ({
            accept: ItemTypes.BOX,
            drop(item: DragItem, monitor) {
                const delta = monitor.getDifferenceFromInitialOffset() as XYCoord;
                const left = Math.round(item.left + delta.x);
                const top = Math.round(item.top + delta.y);
                moveBox(item.id, left, top);
                setNewPosition(item.id, left, top);
                return undefined;
            },
        }),
        [moveBox]
    );

    const removeSticker = (keyV: string) => {
        const newBoxes = {...boxes};
        delete newBoxes[keyV];
        setBoxes(newBoxes);
        dispatch(setStickers({currentBoard, newBoxes}));
    }


    const addSticker = () => {
        const newBoxes = {...boxes};
        newBoxes[getRandomInteger(1, 10000000)] = {
            top: getRandomInteger(40, 85),
            left: getRandomInteger(100, 200),
            title: "Новая задача",
            color: 'blue',
            status: false,
        }
        setBoxes(newBoxes);
        dispatch(setStickers({currentBoard, newBoxes}));
    }

    const renderson = (arg: any) => {
        setBoxes(arg)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        Modal.destroyAll()
    }

    return (
        <div ref={drop} style={styles}>
            {Object.keys(boxes).map((key) => {
                const {left, top, title, color, status} = boxes[key] as {
                    top: number;
                    left: number;
                    title: string;
                    color?: string;
                    status?: boolean;
                };
                return (
                    <Box
                        key={key}
                        id={key}
                        left={left}
                        top={top}
                        hideSourceOnDrag={hideSourceOnDrag}

                        onDoubleClick={() => {
                            showModal(key)
                        }}
                    >

                        <div style={{
                            position: 'relative',
                            width: '200px',
                            minHeight: '250px',
                            maxHeight: '300px',
                            padding: '35px 20px',
                            fontSize: '20px'
                        }}
                        >
                            <button

                                onClick={() => {
                                    removeSticker(key)
                                }}

                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    fontSize: '20px',
                                    color: 'red',
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    outline: 'none'
                                }}
                            >&#10008;
                            </button>
                            <h5 className="sticker-task-title" style={{paddingBottom: '3px'}}>{title}</h5>
                            <div className="task-color-container">
                                Цвет задачи:
                                <span className="task-color" style={{backgroundColor: `${color}`}}></span>
                            </div>
                            <div className="task-status-container">Cтатус:
                                <span
                                    className="task-status">
                                        {status && "Выполнено"}
                                    {!status && "В процессе"}
                                </span>
                            </div>
                        </div>
                    </Box>
                );
            })}
            <AddStickerButton
                onClick={addSticker}
            />
            <Modal
                destroyOnClose={true}
                width={430}
                cancelText="Отмена"
                title="Редактор стикера"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={false}
            >
                <FormNewStickers closeModal={handleCloseModal} renderson={renderson}/>
            </Modal>
        </div>
    );
};

export default Container;
