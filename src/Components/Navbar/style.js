import styled from "styled-components";

const Container = styled.div`
    width: 1440px;
    height: 70px;
    background-color: #394166;
    display: flex;
    align-items:center;
    justify-content: space-between;
    border-radius: 30px;
    padding: 0 20px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    gap: 40px;
    .link{
        color: white;
        text-decoration: none;
        display: flex;
        gap: 7px;
        font-size: 20px;
        color: white;
        font-weight: 400;
        font-family: sans-serif;
    }
    .link .icon{
        opacity: .7;
        color: white;
    }
    .active{
        color: orange;
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    .profile{
        width: 60px;
        position: relative;
        cursor:pointer;
        img{
            position: relative;
            width: 100%;
            border-radius: 50%;
            border: 1px solid white;
            :hover{
                border-radius: 0;
            }
        }
    }
`

export { Container, Left, Right }