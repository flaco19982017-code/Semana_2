import React from "react";
import { Text, View } from "react-native";
import { totalStyles } from "../styles/appStyles";

interface Props {
  peso: number;
  altura: number;
}

export const TotalExpenses = ({ peso, altura }: Props) => {
  const imc = peso / (altura * altura);

  const getDiagnostico = (imc: number) => {
    if (imc < 18.5) return "Bajo peso";
    if (imc < 25) return "Normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidad";
  };
  const getDiagnosticoColor = (imc: number): string => {
    if (imc < 18.5) return "#3B82F6"; // Bajo peso
    if (imc < 25) return "#10B981"; // Peso normal
    if (imc < 30) return "#F59E0B"; // Sobrepeso
    return "#EF4444"; // Obesidad
  };

  return (
    <View style={totalStyles.tarjeta}>
      <Text style={totalStyles.etiqueta}>TU IMC ES</Text>
      <Text style={[totalStyles.monto, { color: getDiagnosticoColor(imc) }]}>
        {imc.toFixed(2)}
      </Text>
      <Text style={totalStyles.subTexto}>{getDiagnostico(imc)}</Text>
    </View>
  );
};
