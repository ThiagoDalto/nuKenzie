import styled from 'styled-components';

export const HeaderInit = styled.header`
width: inherit;
height: 5.500rem;
border: none;
display: flex;
justify-content: space-between;
background-color: #F8F9FA;
box-shadow: 0px 4px 32px -12px

.div__suporte{
    margin-left: 100px;
    margin-right: 100px;
    width: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.iniciar_btn{
    width: 64px;
    height: 40px;
    border-radius: 8px;
    border: none;
    padding: 15px;
    font-weight: 600;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E9ECEF;


}
.iniciar_btn:focus {
    background-color: #fd377e;
    color: white;
  }
  
.iniciar_btn:hover{
    background-color: #343A40;;
    color: white;
  }
@media(max-width:800px){
    .div__suporte{
    margin-left: 100px;
    margin-right: 100px;
     }
}

@media(max-width:500px){
    .div__suporte{
    margin-left: 15px;
    margin-right: 15px;
     }
}


@media(max-width:280px){
    .div__suporte{
    margin-left: 15px;
    margin-right: 15px;
     }
}

`;
