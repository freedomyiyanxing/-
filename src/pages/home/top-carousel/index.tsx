import React from 'react';
import SnapCarousel from '@components/carousel';
import { CarouselDataTypes, getHomeTopCarousel } from '@pages/home/request';

interface IState {
  data: Array<CarouselDataTypes> | null;
}

class TopCarousel extends React.PureComponent<object, IState> {
  constructor(props: object) {
    super(props);

    this.state = {
      data: null,
    };
  }

  async componentDidMount(): Promise<void> {
    const result = await getHomeTopCarousel();
    this.setState({
      data: result.data,
    });
  }

  render() {
    const { data } = this.state;

    if (!data) {
      return null;
    }

    return <SnapCarousel data={data} />;
  }
}

export default TopCarousel;
