# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-gluestack-app`](https://www.npmjs.com/package/create-gluestack).

## Get started

1. Start the app

   ```bash
    npm run start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.
- [Nativewind](https://www.nativewind.dev/): Nativewind is a utility-first library for building native apps with Tailwind CSS.
- [Gluestack](https://gluestack.io/): Gluestack is a component library for building native apps with Tailwind CSS.

## Join the community

Join our community of developers creating universal apps.

- [gluestack-ui on GitHub](https://github.com/gluestack/gluestack-ui): View our open source ui library and contribute.
- [gluestack community](https://discord.com/channels/1050761204852858900/1336392784168484914): Chat with gluestack users and ask questions.

## Project structure
my-app/
├── app/                    ← 页面组件（每个页面一个文件）
│   ├── index.tsx           ← 首页（Home）
│   ├── category.tsx        ← 分野选择页面
│   ├── question.tsx        ← 答题页面
│   └── mypage.tsx          ← 用户信息页面
├── components/             ← 可复用的 UI 组件
│   ├── Header.tsx
│   └── QuestionCard.tsx
├── lib/                    ← 数据接口、工具函数
│   └── api.ts              ← 请求数据库的接口
├── types/                  ← TypeScript 类型定义
│   └── question.ts
├── constants/              ← 常量定义（如题库分类、颜色等）
│   └── categories.ts
├── config/                 ← 配置文件（如 API 地址）
├── assets/                 ← 图片资源（头像图标等）
├── gluestack-ui.config.ts  ← Gluestack UI 设置
├── app.json
└── tsconfig.json
