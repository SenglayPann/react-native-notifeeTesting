import React, {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const handleDisplayNotification = async () => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Test Channel',
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      title: 'Successfully tested title',
      body: 'Congratulation you have successfully tested notifee',
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
      },
    });
  };

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}): any => {
      if (type === EventType.PRESS) {
        navigation.navigate('Contact');
      }
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <Button title="Push Notification" onPress={handleDisplayNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
