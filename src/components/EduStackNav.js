import { createStackNavigator } from 'react-navigation';
import EducationList from './EduList';
import EducationDetail from './EduDetail';

export default StackEdu = createStackNavigator({
    EducationList,
    EducationDetail
}, {
        navigationOptions: ({ navigation }) => ({
            tabBarVisible: false
        })
})