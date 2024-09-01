import React, {useState} from 'react';
import {Button, Form, Input, Radio, type RadioChangeEvent, Select} from 'antd';
import type {FormItemProps} from 'antd';

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

const FormNewBoard: React.FC = () => {
    const onFinish = (value: object) => {
        console.log(value);
    };

    const [value, setValue] = useState('all');

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const arrBgRadio: string[] = [
        "https://avatars.mds.yandex.net/i?id=2b29bb1604a6e412345c9c400ef273f6_l-5427734-images-thumbs&n=13",
        "https://i.artfile.ru/1920x1080_1476119_[www.ArtFile.ru].jpg",
        "https://i.pinimg.com/originals/f8/ad/f1/f8adf1e86a9ad38dc6240c5e8a90049c.jpg",
        "https://impult.ru/preview/r/-x-/upload/iblock/713/zqc1afp43mhxvp4gzowqvh65c6fi6xnp.jpg"
    ]

    return (
        <Form
            name="form_item_path"
            layout="vertical"
            onFinish={onFinish}
            >
            <MyFormItemGroup prefix={['newBoard']} >
                <MyFormItem name="boardBg" label="Выберите фон доски">

                    <Radio.Group name="boardBg" onChange={onChange} value={value}>
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
                <MyFormItem name="boardName" label="Название доски" initialValue={'Новая доска'} required>
                    <Input/>
                </MyFormItem>
                <MyFormItem name="rightsBoard" label="Доступность доски" initialValue={'all'}>
                    <Select
                        style={{width: '100%'}}
                        onChange={handleChange}
                        options={[
                            {value: 'all', label: 'Всем', selected: true},
                            {value: 'invited', label: 'Приглашенным'},
                        ]}
                    />
                </MyFormItem>
            </MyFormItemGroup>

            <Button type="primary" htmlType="submit">
                Создать
            </Button>
        </Form>
    );
};

export default FormNewBoard;

