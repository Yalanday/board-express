import React from 'react';
import {AddStickerButtonStyled, AddStickerButtonSpan} from "./add-sticker-button-styled";


interface AddStickerButtonProps {
    onClick?: () => void
}

const AddStickerButton: React.FC<AddStickerButtonProps> = ({onClick}) => {
    return (
        <>
            <AddStickerButtonStyled onClick={onClick}>
                Добавить стикер
                <AddStickerButtonSpan/>
            </AddStickerButtonStyled>
        </>
    )
}

export default AddStickerButton;
