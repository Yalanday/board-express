import React, {useState} from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    ColorPicker,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Rate,
    Select,
    Slider,
    Switch,
    TreeSelect,
    Upload,
} from 'antd';

const {RangePicker} = DatePicker;
const {TextArea} = Input;

const normFile = (e: any) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};

const FormNewStickers: React.FC = () => {

    return (
        <>
            <Form
                labelCol={{span: 6}}
                wrapperCol={{span: 17}}
                layout="horizontal"
                style={{maxWidth: 600}}
            >
                <Form.Item style={{display: 'flex', alignItems: 'center'}} label="Название: ">
                    <Input />
                </Form.Item>
                <Form.Item label="Дата: ">
                    <DatePicker/>
                </Form.Item>
                <Form.Item label="Сроки: ">
                    <RangePicker/>
                </Form.Item>
                <Form.Item label="Описание: ">
                    <TextArea rows={4}/>
                </Form.Item>
                <Form.Item label="Цвет задачи: ">
                    <ColorPicker/>
                </Form.Item>
            </Form>
        </>
    );
};

export default FormNewStickers;
