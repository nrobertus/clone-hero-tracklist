export type songDataType = {
  Name: string;
  Artist: string;
  Genre: string;
};

function deArticle(input: string) {
  return input.toLowerCase().replace("a ", "").replace("an ", "").replace("the ", "");
}

export function artistSortFunction(a: songDataType, b: songDataType) {
  if (a.Artist === b.Artist) {
    return deArticle(a.Name).localeCompare(deArticle(b.Name));
  } else {
    return deArticle(a.Artist).localeCompare(deArticle(b.Artist));
  }
}

export function nameSortFunction(a: songDataType, b: songDataType) {
  if (a.Name === b.Name) {
    return deArticle(a.Artist).localeCompare(deArticle(b.Artist));
  } else {
    return deArticle(a.Name).localeCompare(deArticle(b.Name));
  }
}

export function genreSortFunction(a: songDataType, b: songDataType) {

  if (a.Genre === b.Genre) {
    if(a.Artist === b.Artist){
      return deArticle(a.Name).localeCompare(deArticle(b.Name));
    }else {
      return deArticle(a.Artist).localeCompare(deArticle(b.Artist));
    }
  } 
  else {
    return a.Genre.toLowerCase().localeCompare(b.Genre.toLowerCase());
  }
}