import styled from 'styled-components'

export const Heading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  margin-left: 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-right: 80px;
  padding: 20px;
  @media screen and (max-width: 766px) {
    width: 60%;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`
export const Image = styled.img`
  width: 600px;
  @media screen and (max-width: 766px) {
    width: 100%;
  }
`

export const Label = styled.label`
  color: #7e858e;
  margin-bottom: 10px;
`
export const InputBox = styled.input`
  height: 30px;
  border: solid 1px #5a7184;
  border-radius: 3px;
  padding: 8px;
`

export const Button = styled.button`
  background-color: #0b69ff;
  color: #d7dfe9;
  padding: 10px 15px;
  align-self: flex-start;
  border: none;
  outline: none;
  margin-top: 20px;
  border-radius: 3px;
`
export const ImageContainer = styled.div`
  background-image: url(${props => props.imgUrl});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 40%;
  background-size: cover;
  padding: 10px;
  color: #ffffff;
  background-color: red;
  @media screen and (max-width: 766px) {
    margin-left: 20px;
    margin-bottom: 20px;
    width: 80%;
    height: 350px;
    background-size: cover;
  }
`
export const ImageText = styled.p`
  font-size: ${props => props.fontSize};
`
