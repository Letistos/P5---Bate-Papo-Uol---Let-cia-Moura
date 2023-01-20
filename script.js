const input = document.querySelector('.solicita-nome');
const botao = document.querySelector('.botao-entrar');
const form = document.querySelector('.input-nome');

const validarNome = ({target}) =>{
    
    if(target.value.length > 2){
        botao.removeAttribute('disabled');
        return;    
    }
    botao.setAttribute('disabled','');

}

//const nomeUsuario = (event)=>{
    
   //axios.post('https://mock-api.driven.com.br/api/v6/uol/participants',input.value);
  //  window.location = 'html/index.html';

   

//}

const carregando = (event) =>{
    const inicio = document.querySelectorAll('.acesso');
    const gif = document.querySelector('.loading');
    
    inicio.classList.add('esconder'); 
    gif.classList.remove('esconder');
}
input.addEventListener('input', validarNome);
input.addEventListener('submit', nomeUsuario);

botao.addEventListener('click', carregando);