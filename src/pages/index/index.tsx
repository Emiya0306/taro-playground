import { View, Text, Input, Form } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!1</Text>
      <Form>
        <View className='form-item username'>
          <Text>Username:</Text>
          <Input className='username-input' type='text' />
        </View>
        <View className='form-item password'>
          <Text>Password:</Text>
          <Input className='password-input' type='safe-password' password />
        </View>
      </Form>
    </View>
  )
}
