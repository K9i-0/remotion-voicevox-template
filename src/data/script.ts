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
    "character": "zundamon",
    "text": "ずんだもんなのだ！今日はスペシャルゲストに来てもらったのだ！",
    "scene": 1,
    "pauseAfter": 10,
    "visual": {
      "type": "text",
      "text": "二日酔い系テックリード\nそば屋",
      "fontSize": 80,
      "color": "#ffffff",
      "animation": "zoomIn"
    },
    "voiceFile": "01_zundamon.wav",
    "durationInFrames": 156
  },
  {
    "id": 2,
    "character": "zundamon",
    "text": "二日酔い系テックリード、そば屋なのだ！",
    "scene": 1,
    "pauseAfter": 10,
    "voiceFile": "02_zundamon.wav",
    "durationInFrames": 119
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
    "character": "zundamon",
    "text": "いきなりカンパーイなのだ！まあ、それがそば屋なのだ。",
    "scene": 1,
    "pauseAfter": 15,
    "voiceFile": "04_zundamon.wav",
    "durationInFrames": 160
  },
  {
    "id": 5,
    "character": "zundamon",
    "text": "そば屋はアクシデンチュア株式会社のテックリードなのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "visual": {
      "type": "image",
      "src": "sobaya.jpg",
      "animation": "zoomIn"
    },
    "voiceFile": "05_zundamon.wav",
    "durationInFrames": 149
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
    "character": "zundamon",
    "text": "テックリードなのに、なぜか窓際族なのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "07_zundamon.wav",
    "durationInFrames": 135
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
    "character": "zundamon",
    "text": "いや、聞いてるのだ？窓際族なのだ！大丈夫なのだ？",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "09_zundamon.wav",
    "durationInFrames": 197
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
    "character": "zundamon",
    "text": "カンパーイしか言わないのだ！でも技術力はピカイチなのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "11_zundamon.wav",
    "durationInFrames": 169
  },
  {
    "id": 12,
    "character": "zundamon",
    "text": "テックリードとしてバリバリ働くはずが、二日酔いで毎朝遅刻するのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "visual": {
      "type": "text",
      "text": "毎朝遅刻",
      "fontSize": 80,
      "color": "#ff4444",
      "animation": "bounce"
    },
    "voiceFile": "12_zundamon.wav",
    "durationInFrames": 206
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
    "character": "zundamon",
    "text": "だから窓際に追いやられてしまったのだ！自業自得なのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "14_zundamon.wav",
    "durationInFrames": 167
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
    "character": "zundamon",
    "text": "反省してないのだ！でもそこが、そば屋のいいところなのだ！",
    "scene": 2,
    "pauseAfter": 15,
    "emotion": "happy",
    "voiceFile": "16_zundamon.wav",
    "durationInFrames": 172
  },
  {
    "id": 17,
    "character": "zundamon",
    "text": "というわけで、窓際から世界を変えるテックリード、そば屋の紹介だったのだ！",
    "scene": 3,
    "pauseAfter": 10,
    "visual": {
      "type": "text",
      "text": "窓際から世界を変える\nテックリード",
      "fontSize": 72,
      "color": "#ffffff",
      "animation": "bounce"
    },
    "voiceFile": "17_zundamon.wav",
    "durationInFrames": 228
  },
  {
    "id": 18,
    "character": "zundamon",
    "text": "最後にそば屋から一言あるのだ！",
    "scene": 3,
    "pauseAfter": 10,
    "voiceFile": "18_zundamon.wav",
    "durationInFrames": 98
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
    "character": "zundamon",
    "text": "知ってたのだ！バイバイなのだ〜！",
    "scene": 3,
    "pauseAfter": 15,
    "emotion": "happy",
    "voiceFile": "20_zundamon.wav",
    "durationInFrames": 90
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
