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

let IconIndex: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M556.65283203 132.92553711a63.39990234 63.39990234 0 0 0-85.1923828 0L126.97314453 460.03027344a31.77905271 31.77905271 0 0 0 42.55664063 47.20385741l5.4777832-5.20092772V843.43554687a63.55810547 63.55810547 0 0 0 63.55810547 63.63720704h184.95922851v-191.34667968a44.75170899 44.75170899 0 0 1 44.77148438-44.81103517h87.03149414a44.75170899 44.75170899 0 0 1 44.77148437 44.81103517v191.34667968h189.34936524a63.55810547 63.55810547 0 0 0 63.57788086-63.63720704V506.20581055c14.11962891 12.77490234 34.15209961 11.8059082 45.89868163-1.28540038a31.77905271 31.77905271 0 0 0-2.2939453-44.89013673L556.65283203 132.9453125z"
        fill={getIconColor(color, 0, '#8a8a8a')}
      />
    </Svg>
  );
};

IconIndex.defaultProps = {
  size: 16,
};

IconIndex = React.memo ? React.memo(IconIndex) : IconIndex;

export default IconIndex;
