import styled from 'styled-components';

export const Resume = styled.div`
width: 560px;
height: 310px;
margin-left: 59px;
border: none;

.container_cabecalho {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media  (max-width:1280px){

  
    margin-left: 0px;
    margin-top: 15px;
    width: 363px;
    
  

.container_cabecalho{
    display: flex;
    flex-direction: column;
    width: 363px;
    gap: 5px;
    margin-left: 0;
} 
    
}

@media (max-width:1025px){
  
    margin-top: 30px;
  
}

@media (max-width: 800){

        
}


.titulo {
  font-family: "Nunito", sans-serif;

  font-size: 16px;
  font-weight: 700px;
  color: #212529;
}

.conatainer_btn {
  display: flex;

  gap: 5px;
}

.btn_cards {
  background: #e9ecef;
  border: 1.4px solid #e9ecef;
  border-radius: 8px;
  height: 40px;
}
.btn_cards:focus {
  background-color: #fd377e;
  color: white;
}

.btn_cards:hover{
  background-color: #343A40;;
  color: white;
}


 @media(max-width:280px){
  
    margin-left: 0px;
    margin-top: 15px;
    width: 250px;
    .container_cabecalho {
      width: inherit;
    }
}

`;
