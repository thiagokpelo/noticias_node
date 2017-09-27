module.exports = ( app ) => {
    app.get( '/formulario-inclusao-noticia', ( req, res ) => {
        app.app.controllers.admin.formularioInclusaoNoticia( app, req, res )
    })

    app.post( '/noticias/salvar', ( req, res ) => {
        app.app.controllers.admin.noticiaSalvar( app, req, res )
    })
}
