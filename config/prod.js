//mongoProd: mongodb+srv://austinwahle:7SRGNZVHPaGTfJgf@cluster0.aa7xu6f.mongodb.net/?retryWrites=true&w=majority

//googleClientIDProd = 116535222347-6asd32u21pobcql2g1073vp0fupn7pl8.apps.googleusercontent.com;
//googleClientSecretProd = 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;

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID ,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
}