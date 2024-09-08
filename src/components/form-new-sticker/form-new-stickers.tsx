import React, {useState} from 'react';
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

const FormNewStickers: React.FC = () => {

    const [color, setColor] = useState<string>('#1677ff');

    return (
        <>
            <Form
                labelCol={{span: 6}}
                wrapperCol={{span: 17}}
                layout="horizontal"
                style={{maxWidth: 600}}
            >
                <Form.Item style={{display: 'flex', alignItems: 'center'}} label="Название: ">
                    <Input/>
                </Form.Item>
                <Form.Item label="Дата: ">
                    <DatePicker format="DD-MM-YYYY"/>
                </Form.Item>
                <Form.Item label="Сроки: ">
                    <RangePicker format="DD-MM-YYYY"/>
                </Form.Item>
                <Form.Item label="Описание: ">
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item label="Цвет задачи: ">
                    <ColorPicker
                        value={color}
                        onChange={(c) => {
                            setColor(c.toHexString());
                        }}
                    />
                </Form.Item>
                <Form.Item label="Исполнено" valuePropName="checked">
                    <Switch/>
                </Form.Item>
            </Form>
        </>
    );
};

export default FormNewStickers;
