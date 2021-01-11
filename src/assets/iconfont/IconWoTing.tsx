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

let IconWoTing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M917.1 412.4c19.2-18.8 8.6-51.5-18-55.3l-236.8-34.4c-10.6-1.5-19.7-8.2-24.4-17.7L532 90.4c-11.9-24.1-46.3-24.1-58.2 0L368 305c-4.7 9.6-13.9 16.2-24.4 17.7l-236.8 34.4c-26.6 3.9-37.2 36.6-18 55.3l171.3 167c7.6 7.5 11.1 18.2 9.3 28.7L229 844c-4.5 26.5 23.3 46.7 47.1 34.2l211.8-111.3c9.4-5 20.7-5 30.2 0l211.8 111.3c23.8 12.5 51.6-7.7 47.1-34.2l-40.4-235.8c-1.8-10.5 1.7-21.3 9.3-28.7l171.2-167.1z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWoTing.defaultProps = {
  size: 16,
};

IconWoTing = React.memo ? React.memo(IconWoTing) : IconWoTing;

export default IconWoTing;
