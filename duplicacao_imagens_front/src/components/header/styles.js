import styled from "styled-components";

const HeaderStyle = styled.div`
    width: 100%;
    height: 8vh;
    background-color: white;
    border: solid 4px var(--blue);
    display: flex;
    align-items: center;

    figure{
        width: 30%;
        margin-left: 5px;
    }
    p{
        width: 70%;
        font-size: 3vw;
        color: var(--grey);
    }
`;

export default HeaderStyle;
