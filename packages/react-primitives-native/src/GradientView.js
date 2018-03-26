import React from "react";
import PropTypes from "prop-types";
import { View, ART } from "react-native";

class GradientView extends React.Component {
  state = {
    width: 0,
    height: 0
  };

  render() {
    const { colors, locations, start, end, style, ...others } = this.props;
    const { width, height } = this.state;

    const fillMap = locations.reduce((newColors, location, i) => {
      return {
        ...newColors,
        [location]: colors[i]
      };
    }, {});
    return (
      <View
        style={[style, { overflow: "hidden" }]}
        onLayout={({ nativeEvent: { layout: { width, height } } }) => {
          this.setState({ width, height });
        }}
        {...others}
      >
        <ART.Surface width={width} height={height} fill="red">
          <ART.Shape
            d={`M0,0 L${width},0 L${width},${height} L0,${height} Z`}
            fill={
              new ART.LinearGradient(
                fillMap,
                start.x * width,
                start.y * height,
                end.x * width,
                end.y * height
              )
            }
          />
        </ART.Surface>
      </View>
    );
  }
}

GradientView.propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired
};

export default GradientView;
