//Type
export type Category = | "Bajo peso" | "Normal" | "sobrepeso" | "Obesidad";

//Interface objetos gastos
export interface Expense {
  id: string;
  nombre: string;
  peso: number | undefined;
  altura: number | undefined;
  category: Category;
}

export const CATEGORIES: {
  value: Category;
  emoji: string;
  color: string;
}[] = [
  { value: "Bajo peso", emoji: "📉", color: "#3B82F6" },
  { value: "Normal", emoji: "�", color: "#10B981" },
  { value: "sobrepeso", emoji: "🟡", color: "#F59E0B" },
  { value: "Obesidad", emoji: "�", color: "#EF4444" },
];


//emojis control+command+barra espaciadora