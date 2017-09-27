module.exports.formularioInclusaoNoticia = function( app, req, res ) {
    res.render( 'admin/form_add_noticia', { validacao : {}, noticia: {} } )
}

module.exports.noticiaSalvar = function( app, req, res ) {
    const noticia = req.body
    
    req.assert( 'titulo', 'Titulo é obrigatório' ).notEmpty()
    req.assert( 'resumo', 'Resumo é obrigatório' ).notEmpty()
    req.assert( 'resumo', 'Resumo deve conter entre 10 e 100 caracteres' ).len( 10, 100 )
    req.assert( 'autor', 'Autor é obrigatório' ).notEmpty()
    req.assert( 'data_noticia', 'Data é obrigatório' ).notEmpty().isDate({ format: 'YYYY-MM-DD' })
    req.assert( 'noticia', 'Noticia é obrigatório' ).notEmpty()

    let erros = req.validationErrors()

    if( erros ) {
        res.render( 'admin/form_add_noticia', { validacao : erros, noticia : noticia } )
        return
    }

    const connection    = app.config.database()
    const noticiasModel = new app.app.models.NoticiasDAO( connection )

    noticiasModel.salvarNoticia( noticia, ( error, result ) => {
        res.redirect( '/noticias' )
    })

}