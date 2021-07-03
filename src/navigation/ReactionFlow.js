import React from "react";
import { TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ReactScreen from "../screens/ReactScreen";
import { Feather, AntDesign } from "@expo/vector-icons";

const ReactionFlow = createStackNavigator();

const ReactionFlowStack = ({ navigation: { goBack }, navigation }) => (
  <ReactionFlow.Navigator>
    <ReactionFlow.Screen
      name="React"
      component={ReactScreen}
      options={{
        title: "Add a Reaction",
        headerBackTitleVisible: false,
        headerLeft: () => (
          <TouchableOpacity onPress={() => goBack()}>
            <Feather
              name="x"
              size={26}
              color="black"
              style={{ marginLeft: 17 }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  </ReactionFlow.Navigator>
);

export default ReactionFlowStack;
