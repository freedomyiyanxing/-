import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconPlay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 30.72C247.296 30.72 30.72 247.296 30.72 512s216.576 481.28 481.28 481.28 481.28-216.576 481.28-481.28-216.576-481.28-481.28-481.28z m204.288 508.416l-303.616 174.592c-20.992 11.776-48.128-3.072-48.128-27.136V337.408c0-24.064 27.136-38.912 48.128-27.136l303.616 174.592c21.504 12.288 21.504 41.984 0 54.272z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPlay.defaultProps = {
  size: 16,
};

IconPlay = React.memo ? React.memo(IconPlay) : IconPlay;

export default IconPlay;
