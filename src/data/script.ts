import { CharacterId } from "../config";

// アニメーションの型定義
export type AnimationType = "none" | "fadeIn" | "slideUp" | "slideLeft" | "zoomIn" | "bounce";

// ビジュアルの型定義
export interface VisualContent {
  type: "image" | "text" | "none";
  src?: string;
  text?: string;
  fontSize?: number;
  color?: string;
  animation?: AnimationType;
}

// 効果音の型定義
export interface SoundEffect {
  src: string;
  volume?: number;
}

// BGM設定
export interface BGMConfig {
  src: string;
  volume?: number;
  loop?: boolean;
}

// BGM設定（動画全体で使用）
export const bgmConfig: BGMConfig | null = null;

// セリフデータの型定義
export interface ScriptLine {
  id: number;
  character: CharacterId;
  text: string;
  displayText?: string;
  scene: number;
  voiceFile: string;
  durationInFrames: number;
  pauseAfter: number;
  emotion?: "normal" | "happy" | "surprised" | "thinking" | "sad";
  visual?: VisualContent;
  se?: SoundEffect;
}

// シーン定義
export interface SceneInfo {
  id: number;
  title: string;
  background: string;
}

export const scenes: SceneInfo[] = [
  { id: 1, title: "オープニング", background: "gradient" },
  { id: 2, title: "メインコンテンツ", background: "solid" },
  { id: 3, title: "エンディング", background: "gradient" },
];

// このファイルは config/script.yaml から自動生成されます
// 編集する場合は config/script.yaml を編集して npm run sync-script を実行してください
export const scriptData: ScriptLine[] = [
  {
    "id": 1,
    "character": "yametaro",
    "text": "どうも、やめ太郎やで！今日はスペシャルゲストに来てもらったやで！",
    "scene": 1,
    "pauseAfter": 10,
    "visual": {
      "type": "text",
      "text": "二日酔い系テックリード\nそば屋",
      "fontSize": 80,
      "color": "#ffffff",
      "animation": "zoomIn"
    },
    "voiceFile": "01_yametaro.wav",
    "durationInFrames": 148
  },
  {
    "id": 2,
    "character": "yametaro",
    "text": "二日酔い系テックリード、そば屋や！",
    "scene": 1,
    "pauseAfter": 10,
    "voiceFile": "02_yametaro.wav",
    "durationInFrames": 91
  },
  {
    "id": 3,
    "character": "sobaya",
    "text": "カンパーイ。",
    "scene": 1,
    "pauseAfter": 10,
    "voiceFile": "03_sobaya.wav",
    "durationInFrames": 34
  },
  {
    "id": 4,
    "character": "yametaro",
    "text": "いきなりカンパーイかいな！まあ、それがそば屋やからな。",
    "scene": 1,
    "pauseAfter": 15,
    "voiceFile": "04_yametaro.wav",
    "durationInFrames": 140
  },
  {
    "id": 5,
    "character": "yametaro",
    "text": "そば屋はアクシデンチュア株式会社のテックリードやねん！",
    "scene": 2,
    "pauseAfter": 10,
    "visual": {
      "type": "image",
      "src": "sobaya.jpg",
      "animation": "zoomIn"
    },
    "voiceFile": "05_yametaro.wav",
    "durationInFrames": 114
  },
  {
    "id": 6,
    "character": "sobaya",
    "text": "カンパーイ。",
    "scene": 2,
    "pauseAfter": 5,
    "voiceFile": "06_sobaya.wav",
    "durationInFrames": 34
  },
  {
    "id": 7,
    "character": "yametaro",
    "text": "テックリードやのに、なぜか窓際族やねん！",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "07_yametaro.wav",
    "durationInFrames": 106
  },
  {
    "id": 8,
    "character": "sobaya",
    "text": "カンパーイ。",
    "scene": 2,
    "pauseAfter": 5,
    "voiceFile": "08_sobaya.wav",
    "durationInFrames": 34
  },
  {
    "id": 9,
    "character": "yametaro",
    "text": "ちょっと、聞いてるか？窓際族やで！大丈夫かいな？",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "09_yametaro.wav",
    "durationInFrames": 166
  },
  {
    "id": 10,
    "character": "sobaya",
    "text": "カンパーイ。",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "10_sobaya.wav",
    "durationInFrames": 34
  },
  {
    "id": 11,
    "character": "yametaro",
    "text": "カンパーイしか言わへんやんけ！でも技術力はメッチャすごいねん！",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "11_yametaro.wav",
    "durationInFrames": 137
  },
  {
    "id": 12,
    "character": "yametaro",
    "text": "テックリードとしてバリバリ働くはずが、二日酔いで毎朝遅刻してるらしいわ。",
    "scene": 2,
    "pauseAfter": 10,
    "visual": {
      "type": "text",
      "text": "毎朝遅刻",
      "fontSize": 80,
      "color": "#ff4444",
      "animation": "bounce"
    },
    "voiceFile": "12_yametaro.wav",
    "durationInFrames": 174
  },
  {
    "id": 13,
    "character": "sobaya",
    "text": "カンパーイ。",
    "scene": 2,
    "pauseAfter": 5,
    "voiceFile": "13_sobaya.wav",
    "durationInFrames": 34
  },
  {
    "id": 14,
    "character": "yametaro",
    "text": "せやから窓際に追いやられてもうたんや！自業自得やな！",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "14_yametaro.wav",
    "durationInFrames": 133
  },
  {
    "id": 15,
    "character": "sobaya",
    "text": "カンパーイ。",
    "scene": 2,
    "pauseAfter": 5,
    "voiceFile": "15_sobaya.wav",
    "durationInFrames": 34
  },
  {
    "id": 16,
    "character": "yametaro",
    "text": "反省してへんな！でもまあ、そこがそば屋のええところやな。",
    "scene": 2,
    "pauseAfter": 15,
    "emotion": "happy",
    "voiceFile": "16_yametaro.wav",
    "durationInFrames": 146
  },
  {
    "id": 17,
    "character": "yametaro",
    "text": "というわけで、窓際から世界を変えるテックリード、そば屋の紹介やったで！",
    "scene": 3,
    "pauseAfter": 10,
    "visual": {
      "type": "text",
      "text": "窓際から世界を変える\nテックリード",
      "fontSize": 72,
      "color": "#ffffff",
      "animation": "bounce"
    },
    "voiceFile": "17_yametaro.wav",
    "durationInFrames": 181
  },
  {
    "id": 18,
    "character": "yametaro",
    "text": "最後にそば屋から一言もらおか！",
    "scene": 3,
    "pauseAfter": 10,
    "voiceFile": "18_yametaro.wav",
    "durationInFrames": 74
  },
  {
    "id": 19,
    "character": "sobaya",
    "text": "カンパーイ。",
    "scene": 3,
    "pauseAfter": 10,
    "voiceFile": "19_sobaya.wav",
    "durationInFrames": 34
  },
  {
    "id": 20,
    "character": "yametaro",
    "text": "知ってたわ！ほな、バイバイやで〜！",
    "scene": 3,
    "pauseAfter": 15,
    "emotion": "happy",
    "voiceFile": "20_yametaro.wav",
    "durationInFrames": 91
  }
];

// VOICEVOXスクリプト生成用
export const generateVoicevoxScript = (
  data: ScriptLine[],
  characterSpeakerMap: Record<CharacterId, number>
) => {
  return data.map((line) => ({
    id: line.id,
    character: line.character,
    speakerId: characterSpeakerMap[line.character],
    text: line.text,
    outputFile: line.voiceFile,
  }));
};
