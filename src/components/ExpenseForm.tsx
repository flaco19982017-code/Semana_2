import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS, formularioStyles } from "../styles/appStyles";
import { CATEGORIES, Category, Expense } from "../types";

interface Props {
  addExpenses: (
    nombre: string,
    peso: number,
    altura: number,
    category: Category,
  ) => void;
}

export const ExpenseForm = ({ addExpenses }: Props) => {
  const [expenseForm, setExpenseForm] = useState<Expense>({
    id: "",
    nombre: "",
    peso: undefined,
    altura: undefined,
    category: "Bajo peso",
  });

  const handleInputChange = (key: string, value: string) => {
    setExpenseForm({ ...expenseForm, [key]: value });
  };

  const handleAddExpense = () => {
    if (expenseForm.nombre === "") {
      Alert.alert("Campo requerido", "Escribe una nombre");
      return;
    }

    if (!expenseForm.peso || isNaN(expenseForm.peso) || expenseForm.peso <= 0) {
      Alert.alert("Peso inválido", "Ingresa un número mayor a 0");
      return;
    }
    if (
      !expenseForm.altura ||
      isNaN(expenseForm.altura) ||
      expenseForm.altura <= 0
    ) {
      Alert.alert("Altura inválida", "Ingresa un número mayor a 0");
      return;
    }
    addExpenses(
      expenseForm.nombre.trim(),
      expenseForm.peso,
      expenseForm.altura,
      expenseForm.category,
    );

    setExpenseForm({
      id: "",
      nombre: "",
      peso: undefined,
      altura: undefined,
      category: "Bajo peso",
    });
  };

  return (
    <View style={formularioStyles.tarjeta}>
      <Text style={formularioStyles.seccionTitulo}>REGISTRO DE DATOS</Text>
      <Text style={formularioStyles.etiqueta}>Nombres Completos</Text>
      <TextInput
        style={formularioStyles.input}
        placeholder="Ej: Edwin Albarracin..."
        placeholderTextColor={COLORS.textoGris}
        keyboardType="default"
        value={expenseForm.nombre}
        onChangeText={(value) => {
          handleInputChange("nombre", value);
        }}
      />
      <Text style={formularioStyles.etiqueta}>Peso (kg)</Text>
      <TextInput
        style={formularioStyles.input}
        placeholder="0.00"
        placeholderTextColor={COLORS.textoGris}
        keyboardType="numeric"
        value={expenseForm.peso?.toString()}
        onChangeText={(value) => {
          handleInputChange("peso", value);
        }}
      />
      <Text style={formularioStyles.etiqueta}>Altura (m)</Text>
      <TextInput
        style={formularioStyles.input}
        placeholder="0.00"
        placeholderTextColor={COLORS.textoGris}
        keyboardType="numeric"
        value={expenseForm.altura?.toString()}
        onChangeText={(value) => {
          handleInputChange("altura", value);
        }}
      />
      <Text style={formularioStyles.etiqueta}>Categoría</Text>
      <View style={formularioStyles.filaCategorias}>
        {CATEGORIES.map((category) => {
          const isActive: boolean = expenseForm.category === category.value;
          return (
            <TouchableOpacity
              key={category.value}
              style={[
                formularioStyles.botonCategoria,
                isActive && { backgroundColor: category.color },
              ]}
              onPress={() => {
                handleInputChange("category", category.value);
              }}
            >
              <Text style={formularioStyles.botonCategoriaEmoji}>
                {category.emoji}
              </Text>
              <Text
                style={[
                  formularioStyles.botonCategoriaTexto,
                  isActive && { color: COLORS.blanco },
                ]}
              >
                {category.value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <TouchableOpacity
        style={formularioStyles.botonAgregar}
        onPress={handleAddExpense}
      >
        <Text style={formularioStyles.botonAgregarTexto}>+ Caldular</Text>
      </TouchableOpacity>
    </View>
  );
};
