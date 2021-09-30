import styled from "styled-components";


const StyledContainer = styled.div`

    width: 100%;
    min-height: 50vh;
    border-left: var(--blue) solid 4px;
    border-right: var(--blue) solid 4px;
    border-bottom: var(--blue) solid 4px;

    h3{
        width: 100%;
        text-align: center;
        color: var(--orange);
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .duplicateBox{
        height: 90%;
    }

`

export default StyledContainer;
