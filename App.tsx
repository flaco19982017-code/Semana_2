import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Header } from "./src/components/Header";
import { globalStyles } from "./src/styles/appStyles";
import { ExpenseForm } from "./src/components/ExpenseForm";
import { Category, Expense } from "./src/types/index";
import { TotalExpenses } from "./src/components/TotalExpenses";
import { ExpenseLists } from "./src/components/ExpenseLists";

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpenses = (
    nombre: string,
    peso: number,
    altura: number,
    category: Category,
  ) => {
    const newExpense: Expense = {
      id: Date.now().toString(),
      nombre,
      peso,
      altura,
      category,
    };

    setExpenses([...expenses, newExpense]);
  };

  //  registro para calcular IMC
  const lastExpense = expenses[expenses.length - 1];

  const peso = lastExpense ? Number(lastExpense.peso) : 0;
  const altura = lastExpense ? Number(lastExpense.altura) : 0;

  const deleteExpense = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <ScrollView
      style={globalStyles.pantalla}
      keyboardShouldPersistTaps="handled"
    >
      <Header totalExpenses={expenses.length} />
      <ExpenseForm addExpenses={addExpenses} />

     
      <TotalExpenses peso={peso} altura={altura} />

      <ExpenseLists expenses={expenses} deleteExpense={deleteExpense} />
    </ScrollView>
  );
};

export default App;