import React from "react";
import styled from "styled-components";
import styledTS from "styled-components-ts";

export type LogoProps = {
    size?: number;
}

const LogoStyled = styledTS<LogoProps>(styled.img)`
width: ${(props: { size: LogoProps; }) => props.size}px;
height: ${(props: { size: LogoProps; }) => props.size}px;
cursor: pointer;
opacity: 0.8;
`
export default LogoStyled
