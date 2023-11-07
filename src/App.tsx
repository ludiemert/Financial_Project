import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { items } from "./data/items";
import { Item } from "./types/Item";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { categories } from "./data/categories";
//import { Category } from "./types/Category";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(()=>{
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText> 🚗✈🚢 The Financial System 🤑🏡🛒🐾💸  </C.HeaderText>
      </C.Header>
      <C.Body>
        {/* INFORMATION AREA */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          // receitas =>income
          income={income}
          expense={expense}
        />

        {/* Insertion area ,  Areá de inserção */}

        {/* Table of Items, Tabela de Itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
