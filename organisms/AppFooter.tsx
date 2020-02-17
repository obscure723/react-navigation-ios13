import * as React from "react";
import { Image } from 'react-native';
import { Footer, FooterTab, Button, Icon, Text } from "native-base";

type Props = {
  currentTabItemIndex: number;
  navigate: (key: string) => void;
  tabItems: {
    key: string;
    iconName: string;
    iconType: "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
    text: string;
    image: NodeRequire;
  }[];
}

const AppFooter: React.FC<Props> = ({
  tabItems,
  currentTabItemIndex,
  navigate,
}) => (
  <Footer>
    <FooterTab>
      {tabItems.map((tabItem, index) => (
        <Button
          key={index}
          vertical
          active={currentTabItemIndex === index}
          onPress={() => navigate(tabItem.key)}
        >
          {(() => {
            // if(currentTabItemIndex===index) return <Image source={tabItem.image} style={{width: 30,height: 30,alignItems: 'center'}}/>            ;
            // else return <Image source={tabItem.image} style={{width: 25,height: 25,alignItems: 'center'}}/>
          })()}
          <Icon name={tabItem.iconName} type={tabItem.iconType} />
          {/* <Text style={{ fontSize: 10 }}>{tabItem.text}</Text> */}
        </Button>
      ))}
    </FooterTab>
  </Footer>
)

export default AppFooter;
