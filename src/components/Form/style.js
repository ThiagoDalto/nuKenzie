import styled from 'styled-components';

export const InputForm = styled.form`
    
width: 363px;
height: 351px;
left: 258px;
top: 127px;

background: #FFFFFF;

border: 1px solid #E9ECEF;
border-radius: 4px;
font-family: 'Inter', sans-serif;
.descricao{
    font-size: 22px;
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    margin-top: 38px;
    margin-left: 26.43px;


}

.form_suporte{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;

}

.exemplo_txt{
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #868E96;
    margin-left: 24.5px;
    
    
}

.entrada__descricao{
    margin: 12.1px 24.5px 4.4px 24.5px;
    border: 2px solid #F8F9FA;
    border-radius: 8px;
    background-color: #F8F9FA;
    padding: 0;
    width: 314px;
    height: 52.4px;
    
}

.entrada__descricao::placeholder{
    margin-right: 16px;
}


.form_suporte2{
    display: flex;
    justify-content: space-between;
    margin-top: 17.7px;

}

.info_title{
    color: #212529;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    margin-left: 24.5px;

}

.inputStyled{
    /* border: 1px solid red; */
    background: #F8F9FA;
    border-radius: 8px ;
    margin-left: 24.5px; 
    
}

.inputStyled:focus{
    outline: 1px;
}

.entrada__valor{
    width: 100px;
    height: 48px;
    background: #F8F9FA;
    border: 2px solid #F8F9FA;
    border-radius: 8px 0 0 8px;
    font-size: 16px;
    /* margin-left: 24.5px; */
    color: #343A40;
    caret-color: #FD377E;
    
}
.entrada__valor:focus{
    box-shadow: 0 0 0 0;
    outline: 0;
}
.option_entrada{
    margin-top: 4px;
    background: #E9ECEF;
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
    border-radius: 6px 6px 0 0;
    border: none;
    
}

.option_despesa{
    background: #F8F9FA;
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
    border: none;
}

.money{
    background: #F8F9FA;
    height: 48px;
    border: 2px solid #F8F9FA;
    padding-top: 14px;
    padding-bottom: 16.5px;
    border-radius: 0px 8px 8px 0px;
    font-size: 16px;

}

.noCorner{
    border-radius: 8px;
    margin-right: 24.5px;
    font-size: 12px;
    width: 150px;
}

.btn_submit{
    margin-top: 35px;
    margin-left: 24.5px;
    width: 314px;
    height: 48px;
    padding: 13px 20px 13px 20px;
    color: white;
    border-radius: 8px;
    background-color: #FD377E;
    box-sizing: border-box;
    gap: 10px;
    border: 2px solid #FD377E;

}

.btn_submit:hover{
    background-color: #E34981;;
;
    border: 2px solid #E34981;;
;
}

@media(max-width:280px){
    .form{
        box-sizing: border-box;
    
        
        width: 250px;
        height: 351px;
        left: 258px;
        top: 127px;
    
        background: #FFFFFF;
        
        border: 1px solid #E9ECEF;
        border-radius: 4px;
        font-family: 'Inter', sans-serif;
    
    }
    .entrada__descricao{
        width: 220px;
        margin: 12.1px 15px 4.4px 15px;
        border: 2px solid #F8F9FA;
        border-radius: 8px;
        background-color: #F8F9FA;
        padding: 0;
       
        height: 52.4px;
    
    }

    .descricao{
        font-size: 22px;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        margin-top: 38px;
        margin-left: 15px;
    
    
    }
    
    .form_suporte{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-items: center;
        align-content: center;
    
    }
    
    .exemplo_txt{
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #868E96;
        margin-left: 15px;
        
        
    }
    
    
    
    .entrada__descricao::placeholder{
        margin-right: 16px;
    }
    
    
    .form_suporte2{
        display: flex;
        justify-content: space-between;
        margin-top: 17.7px;
    
    }
    
    .info_title{
        color: #212529;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        margin-left: 15px;
    
    }
    
    .entrada__valor{
        width: 70px;
        height: 48px;
        background: #F8F9FA;
        border: 2px solid #F8F9FA;
        border-radius: 8px 0 0 8px;
        font-size: 16px;
        margin-left: 15px;
        color: #343A40;
    }
    .option_entrada{
        margin-top: 4px;
        background: #E9ECEF;
        font-size: 12px;
        font-family: 'Nunito', sans-serif;
        border-radius: 6px 6px 0 0;
        border: none;
        
    }
    
    .option_despesa{
        background: #F8F9FA;
        font-size: 12px;
        font-family: 'Nunito', sans-serif;
        border: none;
    }
    
    
    
    .noCorner{
        border-radius: 8px;
        margin-right: 15px;
        font-size: 12px;
        width: 70px;
    }
    
    .btn_submit{
        margin-top: 35px;
        margin-left: 15px;
        width: 220px;
        height: 48px;
        padding: 13px 20px 13px 20px;
        color: white;
        border-radius: 8px;
        background-color: #FD377E;
        box-sizing: border-box;
        gap: 10px;
        border: 2px solid #FD377E;
    
    }
    
 
}
`;
