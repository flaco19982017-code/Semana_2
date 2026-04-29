import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { listaStyles } from "../styles/appStyles";
import { CATEGORIES, Expense } from "../types/index";

interface Props {
  expenses: Expense[];
  deleteExpense: (id: string) => void;
}

export const ExpenseLists = ({ expenses, deleteExpense }: Props) => {
  return (
    <View style={listaStyles.contenedor}>
      <Text style={listaStyles.seccionTitulo}>Registros</Text>
      {expenses.length === 0 ? (
        <Text style={listaStyles.textoVacio}>
          Aún no hay registros. Agrega el primero!
        </Text>
      ) : (
        expenses.map((expense) => {
          const catInfo = CATEGORIES.find(
            (category) => category.value === expense.category,
          )!;
          return (
            <View key={expense.id} style={listaStyles.item}>
              <View style={[listaStyles.itemBarra]} />
              <Text style={listaStyles.itemEmoji}>{catInfo.emoji}</Text>
              <View style={listaStyles.itemInfo}>
                <Text style={listaStyles.itemDescripcion}>
                  {expense.nombre}
                </Text>
                <Text style={listaStyles.itemCategoria}>
                  {expense.category}
                </Text>
              </View>
              
              <Text style={listaStyles.itemMonto}>
               Peso registrado {Number(expense.peso)?.toFixed(2)}
              </Text>
              <Text style={listaStyles.itemMonto}>
                Altura registrada {Number(expense.altura)?.toFixed(2)}
              </Text>
              <TouchableOpacity onPress={() => deleteExpense(expense.id)}>
                <Text style={listaStyles.itemEliminar}>✕</Text>
              </TouchableOpacity>
            </View>
          );
        })
      )}
    </View>
  );
};
