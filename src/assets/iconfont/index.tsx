/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconDingYue from './IconDingYue';
import IconLoading from './IconLoading';
import IconZaiTing from './IconZaiTing';
import IconMore from './IconMore';
import IconCainixihuan from './IconCainixihuan';
import IconHuanyipi from './IconHuanyipi';
import IconFaXian from './IconFaXian';
import IconWoDe from './IconWoDe';
import IconWoTing from './IconWoTing';
import IconIndex from './IconIndex';

export type IconNames = 'icon-ding-yue' | 'icon-loading' | 'icon-zai-ting' | 'icon-more' | 'icon-cainixihuan' | 'icon-huanyipi' | 'icon-fa-xian' | 'icon-wo-de' | 'icon-wo-ting' | 'icon-index';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-ding-yue':
      return <IconDingYue key="1" {...rest} />;
    case 'icon-loading':
      return <IconLoading key="2" {...rest} />;
    case 'icon-zai-ting':
      return <IconZaiTing key="3" {...rest} />;
    case 'icon-more':
      return <IconMore key="4" {...rest} />;
    case 'icon-cainixihuan':
      return <IconCainixihuan key="5" {...rest} />;
    case 'icon-huanyipi':
      return <IconHuanyipi key="6" {...rest} />;
    case 'icon-fa-xian':
      return <IconFaXian key="7" {...rest} />;
    case 'icon-wo-de':
      return <IconWoDe key="8" {...rest} />;
    case 'icon-wo-ting':
      return <IconWoTing key="9" {...rest} />;
    case 'icon-index':
      return <IconIndex key="10" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
