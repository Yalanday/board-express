import React, {useState} from 'react';
import {useAppSelector, useAppDispatch} from "../../hooks/hooks";
import {setStickers} from "../../redux/board-reducer";

import {
    Button,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    Switch,
} from 'antd';


const {RangePicker} = DatePicker;
const {TextArea} = Input;

type FormNewStickersProps = {
    closeModal: () => void,
    renderson: (arg: any) => void,
}

const FormNewStickers: React.FC<FormNewStickersProps> = ({closeModal, renderson}) => {
    const dispatch = useAppDispatch();
    let {boards} = useAppSelector(state => state.boards);
    const {id} = useAppSelector((state) => state.id);
    const currentBoard = boards.find(board => board.id === id);
    const idSticker = useAppSelector((state) => state.idSticker);
    console.log(idSticker)

    const [boxes, setBoxes] = useState<{
        [key: string]: {
            top: number;
            left: number;
            title: string;
            color?: string;
            status?: boolean;
            data?: any;
            deadline: any;
            description: string;
        };
    }>({...currentBoard?.stickers});

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(boxes[idSticker.id]);
        const newBoxes = {...boxes};
        newBoxes[idSticker.id] = {
            ...boxes[idSticker.id],
            title: values.stickerTitle,
            color: values.stickerColor,
            status: values.stickerCompleted,
            description: values.stickerDescription,
        };
        dispatch(setStickers({currentBoard, newBoxes}));
        renderson(newBoxes);
        closeModal();
        form.resetFields();

    };

    const [color, setColor] = useState<string>('#1677ff');

    return (
        <>
            <Form
                form={form}
                onFinish={onFinish}
                labelCol={{span: 6}}
                wrapperCol={{span: 17}}
                layout="horizontal"
                style={{maxWidth: 600}}
            >
                <Form.Item name="stickerTitle" initialValue={boxes[idSticker.id]?.title}
                           style={{display: 'flex', alignItems: 'center'}} label="Название: ">
                    <Input/>
                </Form.Item>
                <Form.Item name="stickerDescription" initialValue={boxes[idSticker.id]?.description} label="Описание: ">
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item name="stickerColor"
                           getValueFromEvent={(color) => {
                               return "#" + color.toHex();
                           }}

                           initialValue={boxes[idSticker.id]?.color}
                           label="Цвет задачи: ">
                    <ColorPicker
                        value={color}
                        onChange={(c, css) => {
                            setColor(c.toHexString());
                            console.log(css)
                        }}
                    />
                </Form.Item>
                <Form.Item name="stickerCompleted" initialValue={boxes[idSticker.id]?.status} label="Исполнено"
                           valuePropName="checked">
                    <Switch/>
                </Form.Item>
                <Button type="primary" htmlType="submit">Сохранить</Button>
            </Form>
        </>
    );
};

export default FormNewStickers;
