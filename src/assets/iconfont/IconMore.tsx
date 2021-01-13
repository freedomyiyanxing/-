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

let IconMore: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M321.11809 65.612347 257.085728 129.009236 638.078998 512.615007 253.882779 892.992247 317.372789 956.917162 765.594207 513.137916Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMore.defaultProps = {
  size: 16,
};

IconMore = React.memo ? React.memo(IconMore) : IconMore;

export default IconMore;
