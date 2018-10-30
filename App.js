import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import EducationList from './src/components/EduList';
import SkillList from './src/components/SkillList';
import StackEdu from './src/components/EduStackNav';

import { createBottomTabNavigator} from 'react-navigation';

const Tab = createBottomTabNavigator({
  Profile: Header,
  Education: StackEdu,
  Skill: SkillList
});


export default class App extends React.Component {
  render() {
    return (
      <Tab />
    );
  }
}