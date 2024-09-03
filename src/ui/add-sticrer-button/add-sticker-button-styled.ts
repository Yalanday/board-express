import styled from "styled-components";

const AddStickerButtonStyled = styled.button`
    position: absolute;
    right: 15px;
    top: 15px;
    
    display: flex;
    align-items: center; gap: 5px;
    color: #ffffff;
    background-color: #1677ff;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 10px 0 10px 10px;
    width: auto;
    height: 50px;
    opacity: 0.9;

    &:hover {
        opacity: 1;
    }
;

    &:active {
        opacity: 0.6;
    }
;

    &:focus {
        opacity: 1;
    }
`;

const AddStickerButtonSpan = styled.span`
    display: block;
    background-image: url("/img/add-sticker.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    padding: 0;
    width: 50px;
    height: 50px;
`

export {AddStickerButtonStyled, AddStickerButtonSpan};
