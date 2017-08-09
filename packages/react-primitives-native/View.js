import { View, StyleSheet } from "react-native";

export default ({ backgroundViews, children, ...props }) =>
  <View {...props}>
    {React.Children.toArray(backgroundViews).map(backgroundView =>
      React.cloneElement(backgroundView, {
        style: [StyleSheet.absoluteFill, backgroundView.props.style]
      })
    )}
    {children}
  </View>;
