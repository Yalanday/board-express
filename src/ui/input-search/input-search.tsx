import React, {useRef, useState} from 'react';
import {Input, Space} from 'antd';
import type {GetProps} from 'antd';

type SearchProps = GetProps<typeof Input.Search>;
const {Search} = Input;


const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const InputSearch: React.FC = () => {
    const inputRef = useRef(null);
    const [inputWidthValue, setInputWidthValue] = useState(150);

    const resize = (val: number) => {
        setInputWidthValue(val)
    }

    return (<Space direction="vertical">
        <Search
            onFocus={()=>{resize(350)}}
            onBlur={()=>{resize(150)}}
            ref={inputRef}
            placeholder="search"
            allowClear
            onSearch={onSearch}
            style={{width: inputWidthValue, transition: 'all 0.3s'}}
            className="input-search-custom"
        />
    </Space>)
};

export default InputSearch;
