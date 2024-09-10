import React, {useState, useRef} from 'react';
import {Button, Form, Input, Radio, type RadioChangeEvent, Select} from 'antd';
import type {FormItemProps} from 'antd';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {setBoard} from "../../redux/board-reducer";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
    prefix: string | number | (string | number)[];
}

function toArr(str: string | number | (string | number)[]): (string | number)[] {
    return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup: React.FC<React.PropsWithChildren<MyFormItemGroupProps>> = ({
                                                                                      prefix,
                                                                                      children,
                                                                                  }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);

    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};

const MyFormItem = ({name, ...props}: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
};

type FormNewBoardProps = {
    closeModal: () => void;
}

const FormNewBoard: React.FC<FormNewBoardProps> = ({closeModal}) => {

    const [boardForm] = Form.useForm();
    const {boards} = useAppSelector(state => state.boards);
    const dispatch = useAppDispatch();

    const createIdBoard = (): number => {
        let boardId = 0;
        if (boards.length === 0) {
            return boardId = 1;
        }
        console.log(boardId)
        return boardId = boards[boards.length - 1].id + 1;;
    }

    const createTitleBoard = (name: string): any => {
        let title = name;
        if (name.includes(name)) {
            let count = 2
            boards.forEach(board => {
                if (board.title.includes(name)) {
                    title = name + ' ' + String(count);
                    count++;
                }
            })
        }
        return title;
    }

    const onFinish = (e: any) => {
        const newBoard = {
            id: createIdBoard(),
            boardBg: e.newBoard.boardBg,
            title: createTitleBoard(e.newBoard.boardName),
            author: e.newBoard.boardAuthor,
            rightsBoard: e.newBoard.rightsBoard,
        };
        dispatch(setBoard(newBoard));
        boardForm.resetFields();
        closeModal();
    };

    const [valueBg, setValueBg] = useState('all');

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValueBg(e.target.value);
    };

    const arrBgRadio: string[] = [
        "https://avatars.mds.yandex.net/i?id=2b29bb1604a6e412345c9c400ef273f6_l-5427734-images-thumbs&n=13",
        "https://i.artfile.ru/1920x1080_1476119_[www.ArtFile.ru].jpg",
        "https://i.pinimg.com/originals/f8/ad/f1/f8adf1e86a9ad38dc6240c5e8a90049c.jpg",
        "https://impult.ru/preview/r/-x-/upload/iblock/713/zqc1afp43mhxvp4gzowqvh65c6fi6xnp.jpg"
    ]

    return (
        <Form
            form={boardForm}
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
        >
            <MyFormItemGroup prefix={['newBoard']}>
                <MyFormItem name="boardBg" label="Выберите фон доски">

                    <Radio.Group name="boardBg" onChange={onChange} value={valueBg}>
                        <Radio value={arrBgRadio[0]}>
                            <img className="board-bg-radio" src={arrBgRadio[0]}/>
                        </Radio>
                        <Radio value={arrBgRadio[1]}>
                            <img className="board-bg-radio" src={arrBgRadio[1]}/>
                        </Radio>
                        <Radio value={arrBgRadio[2]}>
                            <img className="board-bg-radio" src={arrBgRadio[2]}/>
                        </Radio>
                        <Radio value={arrBgRadio[3]}>
                            <img className="board-bg-radio" src={arrBgRadio[3]}/>
                        </Radio>
                    </Radio.Group>

                </MyFormItem>
                <MyFormItem
                    name="boardName"
                    label="Название доски"
                    initialValue={'Новая доска'}
                    rules={[{required: true, message: 'Введите название доски'}]}
                    required>
                    <Input/>
                </MyFormItem>
                <MyFormItem
                    name="boardAuthor"
                    label="Автор"
                    initialValue={''}
                    rules={[{required: true, message: 'Пожалуйста введите имя'}]}
                    required>
                    <Input/>
                </MyFormItem>
            </MyFormItemGroup>

            <Button type="primary" htmlType="submit">
                Создать
            </Button>
        </Form>
    );
};

export default FormNewBoard;

