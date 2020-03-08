import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
// funçao para trabalhar com mais de uma tela no aplicativo, no caso so estou usando uma.
const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                title: 'Lista de Pacientes',
            },
        },
    }, {
        defaultNavigationOptions: {
            headerTintColor: '#FFF',
            headerStyle: {
                backgroundColor: '#7d40e7',
            },
        },
    },)
);

export default Routes;