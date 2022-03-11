import 'expo-dev-client';
import React, {useState} from 'react';

import {
  View,
  Text,
  Icon,
  Switch,
  Badge,
  Avatar,
  Carousel,
  Chip,
  ActionSheet,
  TouchableOpacity
} from 'react-native-ui-lib';
import sliderIcon from './assets/sliderIcon.png';
import bellIcon from './assets/bellIcon.png';
import ThreeDots from './assets/threeDots.png';
import {ScrollView} from 'react-native';
export default function App() {
  const data = [
    {title: '~ how do you feel', description: 'Starting your morning routine.'},
    {title: '~ how do you feel', description: 'Starting your morning routine.'},
    {title: '~ how do you feel', description: 'Starting your morning routine.'},
    {title: '~ how do you feel', description: 'Starting your morning routine.'},
  ];

  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(false);

  const hideModal = ()=>{
     setShowModal(showModal=> !showModal);
  }

  const renderItem = (item, index) => {
    return (
      <View
        key={index}
        padding-10
        style={{backgroundColor: '#ffffff', width: 197, height: 100, borderRadius: 20}}
      >
        <Text text24 style={{fontWeight: '600'}}>
          {item.description}
        </Text>
        <View right>
          <Text text48 style={{fontWeight: '200'}}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View flex style={{backgroundColor: '#f2efea'}}>
      {/* //header */}
      <View row marginB-20 marginT-50 marginH-20>
        <Icon source={sliderIcon} size={30} />
        <View paddingL-20 paddingT-5>
          <Switch
            value={toggle}
            onValueChange={() => setToggle(!toggle)}
            style={{width: 41, height: 20}}
            thumbSize={16}
          />
        </View>
        <View style={{marginLeft: 150}}>
          <Icon source={bellIcon} size={30} />
          <Badge style={{position: 'absolute', marginLeft: 16}} label={''} size={10} />
        </View>
        <View marginL-10 paddingB-10>
          <Avatar label={'A'} size={34} labelColor={'#da961b'} />
        </View>
      </View>
      {/* //title */}
      <View marginT-22 marginL-20>
        <Carousel pageWidth={220} onChangePage={() => console.log('page changed')} itemSpacings={20}>
          {data.map((item, index) => renderItem(item, index))}
        </Carousel>
      </View>
      {/* //body */}
      <ScrollView style={{marginTop:20}} showsVerticalScrollIndicator={false}>
      <View marginT-22 marginL-20>
        <Text text40 color={'#da961b'}>
          Today
        </Text>
      </View>
        <View
          marginT-22
          marginL-20
          marginR-20
          padding-10
          style={{backgroundColor: '#ffffff', width: 320, height: 150, borderRadius: 20}}
        >
          <View row>
            <Chip
              label={'Support'}
              onPress={() => console.log('pressed')}
              size={20}
              useSizeAsMinimum
              labelStyle={{color: '#ffffff'}}
              containerStyle={{width: 80, backgroundColor: '#308739', borderColor: '#308739'}}
            />
            <Chip
              label={'Happy'}
              onPress={() => console.log('pressed')}
              size={20}
              useSizeAsMinimum
              labelStyle={{color: '#ffffff'}}
              containerStyle={{
                width: 80,
                backgroundColor: '#308739',
                borderColor: '#308739',
                marginLeft: 5,
              }}
            />
            <Chip
              label={'Friends'}
              onPress={() => console.log('pressed')}
              size={20}
              useSizeAsMinimum
              labelStyle={{color: '#da961b'}}
              containerStyle={{
                width: 80,
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                marginLeft: 5,
              }}
            />
            <View paddingL-20>
              <TouchableOpacity onPress={() => hideModal()}>
                <Icon source={ThreeDots} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View padding-10>
            <Text>
              React Native combines the best parts of native development with React, a best-in-class
              JavaScript library for building user interfaces.
            </Text>
          </View>
        </View>
        <View
          marginT-22
          marginL-20
          marginR-20
          padding-10
          style={{backgroundColor: '#ffffff', width: 320, height: 150, borderRadius: 20}}
        >
          <View row>
            <Chip
              label={'Happy'}
              onPress={() => console.log('pressed')}
              size={20}
              useSizeAsMinimum
              labelStyle={{color: '#ffffff'}}
              containerStyle={{
                width: 80,
                backgroundColor: '#308739',
                borderColor: '#308739',
                marginLeft: 5,
              }}
            />
            <Chip
              label={'Relations'}
              onPress={() => console.log('pressed')}
              size={{width: 60, height: 20}}
              labelStyle={{color: '#da961b'}}
              containerStyle={{width: 120, backgroundColor: '#ffffff', borderColor: '#ffffff'}}
            />
            <View marginL-65>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Icon source={ThreeDots} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View padding-10>
            <Text>
              React Native combines the best parts of native development with React, a best-in-class
              JavaScript library for building user interfaces.
            </Text>
          </View>
        </View>
        {/* //body */}
        <View marginT-22 marginL-20>
          <Text text40 color={'#da961b'}>
            Yesterday
          </Text>
        </View>
        <View
          marginT-22
          marginL-20
          marginR-20
          padding-10
          style={{backgroundColor: '#ffffff', width: 320, height: 150, borderRadius: 20}}
        >
          <View row>
            <Chip
              label={'Morning Routine'}
              onPress={() => console.log('pressed')}
              size={20}
              useSizeAsMinimum
              labelStyle={{color: '#da961b'}}
              containerStyle={{
                width: 140,
                backgroundColor: '#ffffff',
                borderColor: '#ffffff',
                marginLeft: 5,
              }}
            />
            <View paddingL-125>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Icon source={ThreeDots} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View padding-10>
            <Text>
              React Native combines the best parts of native development with React, a best-in-class
              JavaScript library for building user interfaces.
            </Text>
          </View>
        </View>
        <View
          marginT-22
          marginL-20
          marginR-20
          marginB-80
          padding-10
          style={{backgroundColor: '#ffffff', width: 320, height: 150, borderRadius: 20}}
        >
          <View row>
            <Chip
              label={'Supported'}
              onPress={() => console.log('pressed')}
              size={20}
              useSizeAsMinimum
              labelStyle={{color: '#ffffff'}}
              containerStyle={{
                width: 120,
                backgroundColor: '#da961b',
                borderColor: '#da961b',
                marginLeft: 5,
              }}
            />
            <Chip
              label={'Relations'}
              onPress={() => console.log('pressed')}
              size={{width: 60, height: 20}}
              labelStyle={{color: '#da961b'}}
              containerStyle={{width: 120, backgroundColor: '#ffffff', borderColor: '#ffffff'}}
            />
            <View marginL-25>
            <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                <Icon source={ThreeDots} size={30} />
              </TouchableOpacity>
            </View>
          </View>
          <View padding-10>
            <Text>
              React Native combines the best parts of native development with React, a best-in-class
              JavaScript library for building user interfaces.
            </Text>
          </View>
        </View>
      </ScrollView>
      <ActionSheet
        title={'Options'}
        cancelButtonIndex={2}
        destructiveButtonIndex={0}
        useNativeIOS
        visible={showModal}
        options={[
          {label: 'Delete', onPress: () => console.log('delete')},
          {label: 'Cancel', onPress: () => console.log('cancel')},
        ]}
      />
    </View>
  );
}
