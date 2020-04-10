import { View, Text, ScrollView } from '@tarojs/components'
import './index.scss'

import { useState } from '@tarojs/taro'
import { AtIcon } from 'taro-ui'

const Where: React.FC<any> = () => {
  const [section, setsection] = useState(0);
  const [show, setshow] = useState(false);

  return (
    <View className='com_where'>
      <View className='where'>
        <View className='item' onClick={() => {
          setsection(0)
          if (section == 0 && show) {
            setshow(false)
          } else {
            setshow(true)
          }
        }}>
          <Text className={section == 0 && show ? 'fw' : ''}>综合排序</Text>
          <AtIcon className='downicon' value={section == 0 && show ? 'chevron-down' : 'chevron-up'} size='14'></AtIcon>
        </View>
        <View className='item' onClick={() => {
          setsection(1)
          if (section == 1 && show) {
            setshow(false)
          } else {
            setshow(true)
          }
        }}>
          <Text className={section == 1 && show ? 'fw' : ''} >类型</Text>
          <AtIcon className='downicon' value={section == 1 && show ? 'chevron-down' : 'chevron-up'} size='14'></AtIcon>
        </View>
        <View className='item' onClick={() => {
          setsection(2)
          if (section == 2 && show) {
            setshow(false)
          } else {
            setshow(true)
          }
        }}>
          <Text className={section == 2 && show ? 'fw' : ''}>区域</Text>
          <AtIcon className='downicon' value={section == 2 && show ? 'chevron-down' : 'chevron-up'} size='14'></AtIcon>
        </View>
        <View className='item' onClick={() => {
          setsection(3)
          if (section == 3 && show) {
            setshow(false)
          } else {
            setshow(true)
          }
        }}>
          <Text className={section == 3 && show ? 'fw' : ''}>筛选</Text>
          <AtIcon className='downicon' value={section == 3 && show ? 'chevron-down' : 'chevron-up'} size='14'></AtIcon>
        </View>
      </View>

      {section == 0 && show ? <View className='where_wapper'> <View className='section'>
        <View className='item'>
          <Text>综合排序</Text>
        </View>
        <View className='item'>
          <Text>距离最近</Text>
        </View>
      </View> </View> : null}
      {section == 1 && show ?
        <View className='where_wapper'>
          <View className='section'>
            <ScrollView
              scrollY
              className='sv'
            >
              <View className='item'>
                <View className='title'>简单易做</View>
                <View className='tags'>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                </View>
              </View>
              <View className='item'>
                <View className='title'>餐饮服务</View>
                <View className='tags'>
                  <View className='tag'>
                    <Text>服务员</Text>
                  </View>
                  <View className='tag'>
                    <Text>送餐员</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View className='item_btn'>
              <View className='btn clear'>清空</View>
              <View className='btn done'>完成</View>
            </View>
          </View>
        </View> : null}

      {section == 2 && show ?
        <View className='where_wapper'>
          <View className='section'>
            <View className='item'>
              <Text>西湖区</Text>
            </View>
            <View className='item'>
              <Text>高新区</Text>
            </View>
            <View className='item'>
              <Text>富阳</Text>
            </View>
          </View>
        </View> : null}
      {section == 3 && show ?
        <View className='where_wapper'>
          <View className='section'>
            <ScrollView
              scrollY
              className='sv'
            >
              <View className='item'>
                <View className='title'>简单易做</View>
                <View className='tags'>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                </View>
              </View>
              <View className='item'>
                <View className='title'>餐饮服务</View>
                <View className='tags'>
                  <View className='tag'>
                    <Text>服务员</Text>
                  </View>
                  <View className='tag'>
                    <Text>送餐员</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                  <View className='tag'>
                    <Text>调研</Text>
                  </View>
                  <View className='tag'>
                    <Text>派单</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View className='item_btn'>
              <View className='btn clear'>清空</View>
              <View className='btn done'>完成</View>
            </View>
          </View>
        </View> : null}
    </View>


  )
}

export default Where
