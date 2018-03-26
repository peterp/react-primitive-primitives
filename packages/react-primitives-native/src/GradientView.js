import { ART, Dimensions } from "react-native";

const GradientView = ({ colors, locations, start, end, ...others }) => {
  const { height, width } = Dimensions.get("window");

  const fillMap = locations.reduce((newColors, location, i) => {
    return {
      ...newColors,
      [location]: colors[i]
    };
  }, {});

  return (
    <ART.Surface width={width} height={height} {...others}>
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
  );
};

GradientView.propTypes = {
  start: PropTypes.object.isRequired,
  end: PropTypes.object.isRequired,
  colors: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired
};

export default GradientView;
