import { Text, View } from "react-native";
import { backgroundImages, darken, padding } from "polished";
import { styles } from "./styles";

export default function Button({ tipo, large = false}) {
    const buttonStyle = {
        backgroundColor: darken(0.2, tipo.cor),
        minWidth: large ? 60 : 40,
        heigth: large ? 45 : 30,
        paddingHorizontal: large ? 20 : 10, 
    }
}