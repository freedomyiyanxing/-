/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconLoading: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M552.421053 161.684211m-161.684211 0a161.684211 161.684211 0 1 0 323.368421 0 161.684211 161.684211 0 1 0-323.368421 0Z"
        fill={getIconColor(color, 0, '#6B6C7E')}
      />
      <Path
        d="M202.105263 377.263158m-134.736842 0a134.736842 134.736842 0 1 0 269.473684 0 134.736842 134.736842 0 1 0-269.473684 0Z"
        fill={getIconColor(color, 1, '#6B6C7E')}
      />
      <Path
        d="M202.105263 727.578947m-107.789474 0a107.789474 107.789474 0 1 0 215.578948 0 107.789474 107.789474 0 1 0-215.578948 0Z"
        fill={getIconColor(color, 2, '#6B6C7E')}
      />
      <Path
        d="M552.421053 943.157895m-80.842106 0a80.842105 80.842105 0 1 0 161.684211 0 80.842105 80.842105 0 1 0-161.684211 0Z"
        fill={getIconColor(color, 3, '#6B6C7E')}
      />
      <Path
        d="M902.736842 727.578947m-53.894737 0a53.894737 53.894737 0 1 0 107.789474 0 53.894737 53.894737 0 1 0-107.789474 0Z"
        fill={getIconColor(color, 4, '#6B6C7E')}
      />
      <Path
        d="M902.736842 350.315789m-26.947368 0a26.947368 26.947368 0 1 0 53.894737 0 26.947368 26.947368 0 1 0-53.894737 0Z"
        fill={getIconColor(color, 5, '#6B6C7E')}
      />
    </Svg>
  );
};

IconLoading.defaultProps = {
  size: 16,
};

IconLoading = React.memo ? React.memo(IconLoading) : IconLoading;

export default IconLoading;
