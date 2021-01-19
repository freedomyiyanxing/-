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

let IconZaiTing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1163 1024" width={size} height={size} {...rest}>
      <Path
        d="M139.808118 751.940959h113.357934v-453.431734h-113.357934v453.431734z m264.501845 226.715868h113.357934v-906.863469h-113.357934v906.863469z m264.501845-226.715868h113.357934v-453.431734h-113.357934v453.431734z m264.501845-680.147601v906.863469h113.357934v-906.863469h-113.357934z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZaiTing.defaultProps = {
  size: 16,
};

IconZaiTing = React.memo ? React.memo(IconZaiTing) : IconZaiTing;

export default IconZaiTing;
