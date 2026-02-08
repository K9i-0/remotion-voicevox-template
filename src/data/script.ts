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
    "text": "ずんだもんなのだ！今日はある人物を紹介するのだ！",
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
    "durationInFrames": 153
  },
  {
    "id": 2,
    "character": "metan",
    "text": "四国めたんよ。誰を紹介するの？",
    "scene": 1,
    "pauseAfter": 10,
    "voiceFile": "02_metan.wav",
    "durationInFrames": 107
  },
  {
    "id": 3,
    "character": "zundamon",
    "text": "二日酔い系テックリード、そば屋を紹介するのだ！",
    "scene": 1,
    "pauseAfter": 10,
    "voiceFile": "03_zundamon.wav",
    "durationInFrames": 148
  },
  {
    "id": 4,
    "character": "metan",
    "text": "二日酔い系ってなにかしら？気になるわね。",
    "scene": 1,
    "pauseAfter": 15,
    "voiceFile": "04_metan.wav",
    "durationInFrames": 114
  },
  {
    "id": 5,
    "character": "zundamon",
    "text": "じゃーん！この人がそば屋なのだ！",
    "scene": 2,
    "pauseAfter": 15,
    "visual": {
      "type": "image",
      "src": "sobaya.jpg",
      "animation": "zoomIn"
    },
    "voiceFile": "05_zundamon.wav",
    "durationInFrames": 101
  },
  {
    "id": 6,
    "character": "metan",
    "text": "すごいインパクトのあるお面ね。ビールも持ってるわ。",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "surprised",
    "voiceFile": "06_metan.wav",
    "durationInFrames": 129
  },
  {
    "id": 7,
    "character": "zundamon",
    "text": "そば屋はアクシデンチュア株式会社のテックリードなのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "07_zundamon.wav",
    "durationInFrames": 149
  },
  {
    "id": 8,
    "character": "metan",
    "text": "テックリード！すごい肩書きじゃない。",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "08_metan.wav",
    "durationInFrames": 96
  },
  {
    "id": 9,
    "character": "zundamon",
    "text": "でも実はテックリードなのに窓際族なのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "09_zundamon.wav",
    "durationInFrames": 127
  },
  {
    "id": 10,
    "character": "metan",
    "text": "え、テックリードなのに窓際族なの？どういうことかしら。",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "surprised",
    "voiceFile": "10_metan.wav",
    "durationInFrames": 184
  },
  {
    "id": 11,
    "character": "zundamon",
    "text": "テックリードとしてバリバリ働くはずが、なぜか窓際に追いやられてしまったのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "11_zundamon.wav",
    "durationInFrames": 221
  },
  {
    "id": 12,
    "character": "metan",
    "text": "二日酔いが原因なんじゃないかしら。",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "thinking",
    "voiceFile": "12_metan.wav",
    "durationInFrames": 84
  },
  {
    "id": 13,
    "character": "zundamon",
    "text": "それは否定できないのだ！",
    "scene": 2,
    "pauseAfter": 10,
    "emotion": "happy",
    "voiceFile": "13_zundamon.wav",
    "durationInFrames": 71
  },
  {
    "id": 14,
    "character": "metan",
    "text": "でもテックリードの実力はあるのよね？",
    "scene": 2,
    "pauseAfter": 10,
    "voiceFile": "14_metan.wav",
    "durationInFrames": 96
  },
  {
    "id": 15,
    "character": "zundamon",
    "text": "もちろんなのだ！技術力はピカイチなのだ！ただ、朝が弱いだけなのだ！",
    "scene": 2,
    "pauseAfter": 15,
    "emotion": "happy",
    "voiceFile": "15_zundamon.wav",
    "durationInFrames": 222
  },
  {
    "id": 16,
    "character": "metan",
    "text": "窓際でも技術力で会社を支えてるのね。",
    "scene": 3,
    "pauseAfter": 10,
    "voiceFile": "16_metan.wav",
    "durationInFrames": 111
  },
  {
    "id": 17,
    "character": "zundamon",
    "text": "そうなのだ！窓際から世界を変えるテックリード、それがそば屋なのだ！",
    "scene": 3,
    "pauseAfter": 10,
    "emotion": "happy",
    "visual": {
      "type": "text",
      "text": "窓際から世界を変える\nテックリード",
      "fontSize": 72,
      "color": "#ffffff",
      "animation": "bounce"
    },
    "voiceFile": "17_zundamon.wav",
    "durationInFrames": 204
  },
  {
    "id": 18,
    "character": "metan",
    "text": "応援してるわ。二日酔いには気をつけてね。",
    "scene": 3,
    "pauseAfter": 10,
    "voiceFile": "18_metan.wav",
    "durationInFrames": 113
  },
  {
    "id": 19,
    "character": "metan",
    "text": "バイバイ〜！",
    "scene": 3,
    "pauseAfter": 0,
    "voiceFile": "19_metan.wav",
    "durationInFrames": 25
  },
  {
    "id": 20,
    "character": "zundamon",
    "text": "バイバイなのだ〜！",
    "scene": 3,
    "pauseAfter": 60,
    "emotion": "happy",
    "voiceFile": "20_zundamon.wav",
    "durationInFrames": 46
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
