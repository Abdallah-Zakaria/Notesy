const Notes = require('./history')

class Collection {
  async get(obj) {
    let array;
    if (obj.payload === false) {
      array = await Notes.find({});
    } else {
      array = await Notes.find({ 'category': obj.payload });
    }
    array.forEach(item => {
      console.log(item.payload)
      console.log(`Category: ${item.category} ID: ${item.id}`)
      console.log('--------------------------')
    })
    return array
  }
  async create(obj) {
    const record = new Notes(obj);
    await record.save();
    console.log('note saved This is fun');
    return record
  }
  update() { }
  async delete(obj) {
    // deleteOne
    let deletStatus = await Notes.findByIdAndDelete(obj.payload)
      .then(() => {
        console.log(`Deleted Note ${obj.payload}`)
        return obj.payload
      })
    return deletStatus
  }
}

module.exports = Collection;
