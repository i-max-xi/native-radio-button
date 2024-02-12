import { StyleProp, Text, TextStyle, TouchableOpacity, View } from "react-native";
import { IconChecked } from "./icons/icons";
import { RadioButtonCss } from "./styles/ButtonCss";

interface RadioButtonProps {
  option: { label: string; value: string };
  isSelected: boolean;
  onPress: (value: string) => void;
  textSize: number;
  textColor: string;
  iconColor: string;
  iconBorderColor: string;
  style: StyleProp<TextStyle>;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  option,
  isSelected,
  onPress,
  textSize = 12,
  textColor = "black",
  iconColor,
  iconBorderColor = "blue",
  style
}) => {
  const { label, value } = option;

  return (
    <TouchableOpacity onPress={() => onPress(value)} activeOpacity={0.7}>
      <View style={RadioButtonCss.container}>
        <View style={[RadioButtonCss.ring, { borderColor: iconBorderColor }]}>
          <View>{isSelected && <IconChecked size={25} color={iconColor} />}</View>
        </View>
        <Text
          allowFontScaling
          maxFontSizeMultiplier={1}
          style={[
            { fontSize: textSize, color: textColor },
            style,
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
