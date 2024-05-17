class Apifeatures{
  constructor(query, queryStr){
      this.query = query;
      this.queryStr = queryStr;
  }

  sort(){
      this.query = this.query.sort('-dateTime');
      return this;
  }

}

module.exports = Apifeatures;