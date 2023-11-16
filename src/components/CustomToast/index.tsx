import React, { useEffect, useRef } from "react";
import { Pressable, View, StyleSheet, Animated, Text } from "react-native";
import { MessagesProps, useCustomToast } from "../../hooks/useToast";

import { styles } from "./style";

interface Props {
  message: MessagesProps[];
}

const CustomToast: React.FC<Props> = ({ message }) => {
  const opacityAnimated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (message) {
      Animated.timing(opacityAnimated, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [message]);

  return (
    <Animated.View style={[styles.container, { opacity: opacityAnimated }]}>
      {message &&
        message.map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.toast,
              item.type === "DEFAULT" ? styles.default : styles.success,
            ]}
          >
            <Text style={styles.toastText} maxFontSizeMultiplier={1}>
              {item?.message}
            </Text>
          </Pressable>
        ))}
    </Animated.View>
  );
};

export { CustomToast };
