
module.exports = function generateCardId(fname, lname) {

  const str = `${fname} ${lname}`;
  const matches = str.match(/\b(\w)/g); 
  const acronym = matches.join('');
  const t = new Date();
  const date = ('0' + t.getDate()).slice(-2);
  const month = ('0' + (t.getMonth() + 1)).slice(-2);
  const year = t.getFullYear();
  const hours = ('0' + t.getHours()).slice(-2);
  const minutes = ('0' + t.getMinutes()).slice(-2);
  const seconds = ('0' + t.getSeconds()).slice(-2);
  const Id = `C${acronym}${hours}${minutes}${seconds}/${date}/${month}/${year}`;
  const newid = Id.toString();
  return newid;

  };