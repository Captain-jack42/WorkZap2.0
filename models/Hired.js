// const { ObjectId } = require('mongodb');
const { getDB } = require('../utils/databaseutil');

module.exports = class Hired{
  constructor(_id){
    this._id = _id;
  }
  
  save(){
    const db = getDB();
    if(this._id){
      console("already hired");
    }else{
      return db.collection('hired').insertOne(this);
    }
  }

static fetchAll(callback){
  const db = getDB();
    return db.collection('hired').find().toArray();
     }

  }