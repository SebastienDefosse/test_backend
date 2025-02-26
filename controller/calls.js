exports.retourneInfo = ( req, res, next) => {
    res.status(200).json({ 'user':'520037', 'message':'Appel de l\'agent 520037'});
}