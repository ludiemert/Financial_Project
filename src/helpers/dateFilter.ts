import { Item } from "../types/Item";

//Function Current Month
export const getCurrentMonth = () => {
  let now = new Date();

  //return month model BRAZIL
  return `${now.getFullYear()}-${now.getMonth()+1}`;
};

//function that creates a list with only the filtered items
//funcao que cria uma lista so com os itens filtrados
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];

  let [year, month] = date.split('-');
  //OR
  //let dateSplit = date.split('-');
  //let year = dateSplit[0];
  //let month = dateSplit[1];

  //filter
  for(let i in list) {
    if(
      list[i].date.getFullYear() === parseInt(year) &&
      (list[i].date.getMonth() + 1) === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }

  return newList;

} 

//function format date
export const formatDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  
  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => n < 10 ? `0${n}` : `${n}`;

/*OR
{
  if(n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}*/

//format date home screen
export const formatCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split('-');
  let months = ['January', 'February', 'Marc', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[parseInt(month) -1]} the ${year}`;
}

