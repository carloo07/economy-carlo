const schema = mongoose.Schema({
    guildID: String,
    ///user:String,
    prefix: { type: String, default: "G"},
    
});
module.exports = mongoose.model("Guild", schema)
