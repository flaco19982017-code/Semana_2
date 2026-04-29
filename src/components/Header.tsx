//rafc + TAB o ENTER
import React from "react";
import { Text, View } from "react-native";
import { headerStyles } from "../styles/appStyles";

interface Props {
  totalExpenses: number;
}

export const Header = ({ totalExpenses }: Props) => {
  return (
    <View style={headerStyles.contenedor}>
      <Text style={headerStyles.titulo}>Calculadora de IMC</Text>
      <Text style={headerStyles.subtitulo}>{totalExpenses === 0}</Text>
    </View>
  );
};
