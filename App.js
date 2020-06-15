/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './Store/reducers';
import {Provider} from 'react-redux';
import PhotosList from './Components/PhotosList';
import FullScreenPhoto from './Components/FullScreenPhoto'

const store = createStore(
    mainReducer,
    applyMiddleware(thunk));

const Stack = createStackNavigator();

const App: () => React$Node = () => {
    return (

            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="Gallery">
                        <Stack.Screen name="Gallery" component={PhotosList}/>
                        <Stack.Screen name="Photo" component={FullScreenPhoto} options={{ title: "" }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
    );
};

export default App;
