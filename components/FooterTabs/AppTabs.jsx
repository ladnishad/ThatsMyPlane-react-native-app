import { Tab } from "react-native-elements";

export const AppTabs = ({ componentToShow, setComponentToShow }) => {
  return (
    <TabView value={componentToShow} onChange={setComponentToShow}>
      <TabView.Item style={{ backgroundColor: "red", width: "100%" }}>
        <Text h1>Home</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: "blue", width: "100%" }}>
        <Text h1>Discover</Text>
      </TabView.Item>
      <TabView.Item style={{ backgroundColor: "green", width: "100%" }}>
        <Text h1>Account</Text>
      </TabView.Item>
    </TabView>
  );
};
