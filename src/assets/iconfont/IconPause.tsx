import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconPause: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 26.947368c267.883789 0 485.052632 217.168842 485.052632 485.052632s-217.168842 485.052632-485.052632 485.052632S26.947368 779.883789 26.947368 512 244.116211 26.947368 512 26.947368z m97.010526 300.274527c-22.177684 0-41.606737 19.348211-41.606737 41.498947V673.145263c0 22.096842 19.402105 41.472 41.57979 41.472s41.606737-19.348211 41.606737-41.498947V368.747789c0-22.150737-19.402105-41.498947-41.57979-41.498947z m-194.021052 0c-22.177684 0-41.579789 19.348211-41.57979 41.498947V673.145263c0 22.096842 19.402105 41.472 41.57979 41.472s41.606737-19.348211 41.606737-41.498947V368.747789c-0.026947-22.150737-19.429053-41.498947-41.57979-41.498947H414.989474z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPause.defaultProps = {
  size: 16,
};

IconPause = React.memo ? React.memo(IconPause) : IconPause;

export default IconPause;
