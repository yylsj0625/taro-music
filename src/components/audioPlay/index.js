import Taro, {Component} from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

class AudioPlay extends Component {

    render() {
        return (
          <View className='card_box' onClick={this.props.onGoDetail}>
            <Image className='avatar' src={this.props.src} />
            <Text className='title'>{this.props.title}</Text>
          </View>
        )
    }
}
AudioPlay.propTypes = {
  src:PropTypes.string,
  title:PropTypes.string
}
AudioPlay.defaultProps = {
  src:'',
  title:'正在加载...'
}

export default AudioPlay
