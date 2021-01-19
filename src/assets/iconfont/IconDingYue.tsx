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

let IconDingYue: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M779.52 902.5024l-186.8288-92.416a123.904 123.904 0 0 0-112.5888 0l-186.8288 92.416c-45.5168 22.528-105.3696 6.7584-129.3312-36.0448-4.8128-13.568-9.5744-27.0848-9.5744-42.8544V260.1472C154.368 172.288 228.608 102.4 321.9968 102.4h431.2064c93.3888 0 167.6288 69.888 167.6288 157.7472v563.456c0 49.6128-43.1104 90.112-95.7952 90.112a103.936 103.936 0 0 1-45.5168-11.264z m-241.92-151.04c26.368 0 55.0912 6.8096 79.0528 18.0736l186.8288 92.416c7.168 4.5056 14.336 4.5056 21.5552 4.5056 26.368 0 47.9232-20.3264 47.9232-45.056V260.096c0-63.0784-52.736-112.64-119.808-112.64H322.048c-67.072 0-119.808 49.5616-119.808 112.64v563.456a51.2 51.2 0 0 0 4.8128 20.2752c11.9808 22.528 40.704 29.3376 64.6656 18.0736l186.88-92.416a192.3584 192.3584 0 0 1 79.0016-18.0224z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M681.3184 485.5296H393.8816c-14.336 0-23.9616-9.0112-23.9616-22.528s9.5744-22.528 23.9616-22.528h287.4368c14.336 0 23.9616 9.0112 23.9616 22.528s-9.5744 22.528-23.9616 22.528z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M537.6 620.7488c-14.336 0-23.9616-9.0112-23.9616-22.528V327.7824c0-13.5168 9.5744-22.528 23.9616-22.528 14.336 0 23.9616 9.0112 23.9616 22.528v270.4384c0 13.5168-9.5744 22.528-23.9616 22.528z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IconDingYue.defaultProps = {
  size: 16,
};

IconDingYue = React.memo ? React.memo(IconDingYue) : IconDingYue;

export default IconDingYue;
