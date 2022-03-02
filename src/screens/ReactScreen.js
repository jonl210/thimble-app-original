import React, { useState, useContext } from "react";
import { View, Text, SafeAreaView } from "react-native";
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import { Button } from "react-native-elements";
import { Context as ReactContext } from "../context/ReactContext";
import thimbleApi from "../api/thimble";

const ReactScreen = ({ navigation: { goBack } }) => {
  const { state } = useContext(ReactContext);
  const [reaction, setReaction] = useState("👍");
  const [reactIsDisabled, setReactIsDisabled] = useState(false);

  const sendReaction = async () => {
    setReactIsDisabled(true);
    try {
      await thimbleApi.post(`r/${state.postId}`, { reaction: reaction });
      state.updateReactionData();
      goBack();
    } catch (error) {}
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#fff",
            paddingVertical: 20,
          }}
        >
          <Text>Pick an Emoji:</Text>
          <Text style={{ fontSize: 55 }}>{reaction}</Text>
        </View>
        <EmojiSelector
          category={Categories.emotion}
          onEmojiSelected={(emoji) => setReaction(emoji)}
          showSectionTitles={false}
          showSearchBar={true}
          columns={7}
        />
      </View>
      <Button
        onPress={() => {
          sendReaction();
        }}
        titleStyle={{ fontSize: 16, fontWeight: "bold" }}
        buttonStyle={{
          borderRadius: 20,
          backgroundColor: "#A6A3FF",
        }}
        containerStyle={{
          paddingTop: 10,
          paddingHorizontal: 15,
          marginBottom: 25,
        }}
        title="React"
        disabled={reactIsDisabled}
      />
    </SafeAreaView>
  );
};

export default ReactScreen;
