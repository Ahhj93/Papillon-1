import React from "react";
import { Text, ScrollView, View, StyleSheet, Switch } from "react-native";
import { useTheme } from "@react-navigation/native";
import type { Screen } from "@/router/helpers/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import important_json from "@/utils/magic/regex/important.json"; // Ensure this file contains valid regex patterns
import MagicContainerCard from "@/components/Settings/MagicContainerCard";
import { NativeIcon, NativeItem, NativeList } from "@/components/Global/NativeComponents";
import { ArrowUpNarrowWide } from "lucide-react-native";
import { useCurrentAccount } from "@/stores/account";

const SettingsMagic: Screen<"SettingsMagic"> = ({ navigation }) => {
  const theme = useTheme();
  const { colors } = theme;
  const insets = useSafeAreaInsets();
  const account = useCurrentAccount(store => store.account);
  const mutateProperty = useCurrentAccount(store => store.mutateProperty);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
      }}
    >
      <MagicContainerCard theme={theme} />

      <NativeList>
        <NativeItem
          trailing={
            <Switch
              value={account?.personalization?.magicEnabled ?? false}
              onValueChange={(value) => mutateProperty("personalization", { magicEnabled: value })}
            />
          }
          leading={
            <NativeIcon
              icon={<ArrowUpNarrowWide />}
              color={colors.primary}
            />
          }
        >
          <NativeText variant="title">
            Actualités Intelligentes
          </NativeText>
          <NativeText variant="subtitle">
            Trie les actualités en fonction de leur importance et place en haut de la page celles jugées importantes
          </NativeText>
        </NativeItem>
      </NativeList>
    </ScrollView>
  );
};



export default SettingsMagic;
