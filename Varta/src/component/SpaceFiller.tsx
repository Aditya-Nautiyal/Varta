import React from "react";
import { View } from "react-native";

const defaultProps = {
  margin: 12,
};

type Props = {
  margin?: number;
};

const SpaceFiller: React.FC<Props> = ({ margin = defaultProps.margin }) => {
  return <View style={{ marginVertical: margin }} />;
};

export default SpaceFiller;
