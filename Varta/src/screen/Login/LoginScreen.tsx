import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import SpaceFiller from "../../component/SpaceFiller";
import { RootStackParamList } from "../../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };
  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  return (
    <View style={styles.container}>
      <View style={styles.loginSignUpContainer}>
        <Text style={styles.title}>Login</Text>
        <SpaceFiller />
        <View style={styles.inputTextContainer}>
          <Text style={styles.inputTextTitle}>Email</Text>
          <SpaceFiller margin={4} />
          <TextInput style={styles.inputText} onChangeText={handleEmailChange} placeholder="Ex: abc@gmail.com"/>
        </View>
        <SpaceFiller />

        <View style={styles.inputTextContainer}>
          <Text style={styles.inputTextTitle}>Password</Text>
          <SpaceFiller margin={4} />
          <TextInput
            secureTextEntry
            style={styles.inputText}
            onChangeText={handlePasswordChange}
            placeholder="Ex: Login@12345"
          />
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "black",
  },
  loginSignUpContainer: {
    flex: 0.7,
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 20,
    paddingVertical: 20,
    // Top corners only
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  inputTextContainer: {
    padding: 12,
    backgroundColor: "white",
    width: "100%",
    borderRadius: 10,
  },
  inputTextTitle: {
    color: "black",
    fontSize: 12,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  inputText: {
    fontFamily: "monospace",
    fontSize: 12,
    padding: 8,
    color: "grey",
  },
});
