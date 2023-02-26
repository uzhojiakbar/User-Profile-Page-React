import styled from "styled-components";

const Container = styled.div`
    position: absolute;
    z-index: 999;
    top: 0;
    width: 100%;
    left: 0;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    overflow: hidden;
`
const Image = styled.div`
    height: 80%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(${({ rotate }) => rotate ? rotate : 0}deg);
    img{
        width: 160%;
    }
`
const Controls = styled.div`
    padding: 10px 20px;
    height: 10%;
    display: flex;
    justify-content: right;
    align-items: center;
    gap: 30px;
    .button{
        width:  45px;
        height: 45px;
        border: 1px solid white;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .icon{
            font-size:30px;
            color: white;
        }
    }
`

export { Container, Image, Controls }
