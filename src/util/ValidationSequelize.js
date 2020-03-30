module.exports ={
    ListaErros(erros){
        return erros.map(err=>{
            let campo = err.path
            let erro = err.message
            return {campo, erro}
        })
    }
}