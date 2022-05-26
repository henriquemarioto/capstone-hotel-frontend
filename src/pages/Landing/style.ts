import styled from "styled-components";
import hotel from "../../img/hotel.svg"

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (min-width: 720px) {
        flex-direction: row;
        justify-content: space-between;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 10px 40px;
    align-items: center;
    @media (min-width: 720px) {
       display: none;
    }
`
export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    text-align: center;
    p{
        width: 320px;
        margin: 20px 0;
    }
    @media (min-width: 720px) {
        width: 100%;
        p{
            font-size: 30px;
            width: 500px;
        }
        img{
            display: none;
        }
    }
`
export const Tittle = styled.h1`
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 20px;
    @media (min-width: 720px) {
      font-size: 40px;
    }
`
export const Logo = styled.img`
    display: flex;
    width: 80px;
    height: 40px;
`
export const Button = styled.button`
    border: none;
   font-size: 20px;
`
export const Footer = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 400px;
    background-color: var(--beige-1);
    text-align: center;
    button{
        display: none;
    }
    p{
        width: 320px;
        margin: 20px 0;
    }
    .logo{
        display: none;
    }
    @media (min-width: 720px) {
        font-size: 20px;
        justify-content: space-around;
        width: 500px;
        height: 100vh;
        button{
            transition: 0.4s;
            display: flex;
            width: 250px;
            height: 45px;
            background-color: var(--white-0);
            border: none;
            border-radius: 8px;
            justify-content: center;
            align-items: center;
            font-weight: 400;
            font-size: 20px;
        }
        button:hover{
            transition: 0.4s;
            color: var(--white-0);
            background-color: var(--beige-dark);
        }
        .logo{
            display: flex;
            width: 80px;
            height: 40px;
        }
    }
`