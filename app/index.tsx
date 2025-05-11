import React from "react";
import { Button, Text, View } from "react-native";
import { useRouter } from "expo-router";

export default function Dashboard() {
  const router = useRouter();

  // 假设用户数据来自本地存储或数据库
  const userName = "ユーザー名"; // 你可以替换成实际的用户名

  return (
    <View className="flex-1 bg-white justify-center items-center p-6">
      {/* 主页顶部 */}
      <Text className="text-4xl font-bold text-gray-800 mb-4">アプリ名</Text>
      <Text className="text-xl text-gray-600 mb-12">
        こんにちは、{userName}さん！
      </Text>

      {/* 功能区 */}
      <View className="space-y-4">
        {/* 开始答题按钮 */}
        <Button
          title="テストを始める"
          onPress={() => router.push("/")}
          color="#4CAF50" // 按钮颜色
        />
        {/* 错题复习按钮 */}
        <Button
          title="間違えた問題を復習"
          onPress={() => router.push("/")}
          color="#FF9800"
        />
        {/* 收藏题目按钮 */}
        <Button
          title="お気に入りの問題"
          onPress={() => router.push("/")}
          color="#2196F3"
        />
      </View>
    </View>
  );
}
