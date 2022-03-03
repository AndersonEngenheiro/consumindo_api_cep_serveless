const axios = require('axios').default
  
async function main({cep}) {
    
    const { data } = await axios(`https://viacep.com.br/ws/${cep}/json`) 
    
	return {
	    
	    body:
	    
	    `<html>
	             <h1>${data.logradouro}</h1>
	             <h1>${data.bairro}</h1>
	             <h1>${data.localidade}</h1>
	             
	       </html>`
	}
	
}