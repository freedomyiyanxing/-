/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconFaXian from './IconFaXian';
import IconWoDe from './IconWoDe';
import IconWoTing from './IconWoTing';
import IconIndex from './IconIndex';

export type IconNames = 'icon-fa-xian' | 'icon-wo-de' | 'icon-wo-ting' | 'icon-index';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-fa-xian':
      return <IconFaXian key="1" {...rest} />;
    case 'icon-wo-de':
      return <IconWoDe key="2" {...rest} />;
    case 'icon-wo-ting':
      return <IconWoTing key="3" {...rest} />;
    case 'icon-index':
      return <IconIndex key="4" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
