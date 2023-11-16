import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    marginLeft: 14,
    marginRight: 14,
  },
  toast: {
    backgroundColor: "rgba(0,0,0,0.8)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 8,
  },
  toastText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "500",
  },
  default: {
    backgroundColor: "#FF455F",
  },
  success: {
    backgroundColor: "rgba(0,184,95,0.89)",
  },
  textToast: {
    color: "#ffffff",
    fontSize: 16,
  },
});
