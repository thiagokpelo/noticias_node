module.exports.noticias = function( app, req, res ) {
    const connection = app.config.database()
    const noticiasModel = new app.app.models.NoticiasDAO( connection )

    noticiasModel.getNoticias( ( error, result ) => {
        res.render( 'noticias/noticias', { noticias : result } )
    })
}

module.exports.noticia = function( app, req, res ) {
    const connection = app.config.database()
    const noticiasModel = new app.app.models.NoticiasDAO( connection )
    const idNoticia = req.query.id

    noticiasModel.getNoticia( idNoticia, ( error, result ) => {
        res.render( 'noticias/noticia', { noticia : result } )
    })
}
