"use strict";

/*
  Nón Lá – Learn Vietnamese
  Static game: no backend or external libraries required.
*/

const rawLevels = `
Xin chào!|Hello!|Greetings|Say “chào” with a falling tone.
Chào bạn!|Hello, friend!|Greetings|Keep both words clear and separate.
Tạm biệt!|Goodbye!|Greetings|The dot under “tạm” marks a low, heavy tone.
Cảm ơn.|Thank you.|Polite words|Let your voice dip and rise on “cảm”.
Xin lỗi.|Sorry or excuse me.|Polite words|Say “lỗi” with a broken rising tone.
Vâng ạ.|Yes, politely.|Polite words|Use a gentle and respectful voice.
Không ạ.|No, politely.|Polite words|Keep “không” level.
Em tên là An.|My name is An.|Introductions|Say each short word clearly.
Bạn tên là gì?|What is your name?|Introductions|Use a natural question rhythm.
Mình rất vui.|I am very happy.|Feelings|The word “rất” has a short ending.
Một, hai, ba.|One, two, three.|Numbers|Pause briefly between the numbers.
Bốn, năm, sáu.|Four, five, six.|Numbers|Keep each number separate.
Bảy, tám, chín.|Seven, eight, nine.|Numbers|Keep the final sounds light.
Mười quả bóng.|Ten balls.|Numbers|Say “mười” smoothly.
Đây là màu đỏ.|This is red.|Colours|The letter “đ” is stronger than “d”.
Đây là màu xanh.|This is blue or green.|Colours|Finish “xanh” with an ng sound.
Bông hoa màu vàng.|The flower is yellow.|Colours|Link the words gently.
Con mèo màu trắng.|The cat is white.|Animals and colours|Stretch the vowel slightly in “mèo”.
Con chó màu đen.|The dog is black.|Animals and colours|Use a rising tone on “chó”.
Em có hai con cá.|I have two fish.|Animals and numbers|Keep “cá” rising and bright.
Đây là mẹ em.|This is my mother.|Family|The word “mẹ” has a low, heavy tone.
Đây là bố em.|This is my father.|Family|Say “bố” with a rising tone.
Em có một chị gái.|I have an older sister.|Family|Keep the final t in “một” short.
Em có một em trai.|I have a younger brother.|Family|Do not rush “em trai”.
Gia đình em rất vui.|My family is very happy.|Family|Say “gia đình” as two clear syllables.
Em thích ăn cơm.|I like eating rice.|Food|Keep the vowel in “cơm” rounded.
Em thích uống sữa.|I like drinking milk.|Food|Pay attention to the tone in “sữa”.
Quả chuối rất ngon.|The banana is delicious.|Food|Say “chuối” with a rising tone.
Cho em một quả táo.|Please give me an apple.|Food|Use a friendly rhythm.
Em không thích cay.|I do not like spicy food.|Food|Keep “không” level.
Em đi học.|I go to school.|School|Make the h in “học” audible.
Đây là lớp học.|This is the classroom.|School|Finish “lớp” with a short p sound.
Cô giáo đang đọc sách.|The teacher is reading a book.|School|Speak in two small groups.
Thầy giáo đang viết.|The teacher is writing.|School|Let “thầy” fall and rise.
Em mở quyển sách.|I open the book.|Classroom actions|Say “quyển” smoothly.
Em đóng cửa lại.|I close the door.|Classroom actions|Use a rising tone on “đóng”.
Bút chì ở trên bàn.|The pencil is on the table.|Position words|Stress the location words clearly.
Cặp sách ở dưới ghế.|The schoolbag is under the chair.|Position words|Say “ghế” with a hard g sound.
Bạn ngồi bên cạnh em.|You sit next to me.|Position words|Keep “cạnh” low and short.
Chúng em cùng học.|We study together.|School|Separate “chúng” and “em”.
Bây giờ là mấy giờ?|What time is it now?|Time|Use a clear question rhythm.
Bây giờ là bảy giờ.|It is seven o'clock.|Time|Repeat “giờ” with the same tone.
Em thức dậy lúc sáu giờ.|I wake up at six o'clock.|Daily routine|Speak in three short groups.
Em đánh răng mỗi sáng.|I brush my teeth every morning.|Daily routine|Pronounce the final ng sounds.
Em ăn sáng cùng gia đình.|I eat breakfast with my family.|Daily routine|Keep a steady rhythm.
Hôm nay là thứ hai.|Today is Monday.|Days|Say “thứ hai” as two words.
Ngày mai là thứ ba.|Tomorrow is Tuesday.|Days|Keep “mai” level and open.
Hôm qua trời có mưa.|It rained yesterday.|Weather|Do not rush “trời có mưa”.
Hôm nay trời nắng.|It is sunny today.|Weather|The final ng in “nắng” is important.
Em đi ngủ lúc chín giờ.|I go to bed at nine o'clock.|Daily routine|Speak slowly through the time phrase.
Nhà em ở gần trường.|My home is near the school.|Places|Say “trường” as one syllable.
Thư viện ở đâu?|Where is the library?|Places|Raise the question gently.
Hãy rẽ trái ở phía trước.|Turn left ahead.|Directions|The word “trái” has a rising tone.
Hãy rẽ phải ở ngã tư.|Turn right at the intersection.|Directions|Keep “ngã tư” clear.
Đi thẳng đến công viên.|Go straight to the park.|Directions|The ending of “thẳng” is short.
Chợ ở bên kia đường.|The market is across the road.|Places|Separate “bên kia” and “đường”.
Em muốn mua một chiếc áo.|I want to buy a shirt.|Shopping|Say “chiếc áo” as two clear words.
Chiếc áo này bao nhiêu tiền?|How much is this shirt?|Shopping|Use a natural question rhythm.
Cho em xem đôi giày kia.|Please show me those shoes.|Shopping|Speak politely and evenly.
Em thích chiếc mũ màu xanh.|I like the blue hat.|Shopping|Keep the classifiers clear.
Mùa xuân có nhiều hoa.|Spring has many flowers.|Seasons|Do not rush “nhiều hoa”.
Mùa hè trời rất nóng.|Summer is very hot.|Seasons|Finish “nóng” with an ng sound.
Mùa thu có gió mát.|Autumn has cool wind.|Seasons|Contrast “gió” and “mát”.
Mùa đông trời lạnh.|Winter is cold.|Seasons|End “lạnh” briefly.
Khi trời mưa, em mang ô.|When it rains, I carry an umbrella.|Weather|Pause lightly after “mưa”.
Hôm nay nóng hơn hôm qua.|Today is hotter than yesterday.|Comparisons|Emphasize “hơn”.
Con voi lớn hơn con mèo.|The elephant is bigger than the cat.|Comparisons|Keep both animal names clear.
Bạn Lan cao bằng bạn Mai.|Lan is as tall as Mai.|Comparisons|Say “cao bằng” smoothly.
Em thích đọc sách hơn xem phim.|I prefer reading to watching films.|Preferences|Pause between the two activities.
Món phở này rất ngon.|This phở is delicious.|Food and culture|Keep “phở” short with the correct tone.
Cuối tuần, gia đình em đi chơi.|At the weekend, my family goes out.|Leisure|Pause after “cuối tuần”.
Chúng em chơi đá bóng ở công viên.|We play football in the park.|Leisure|Maintain a steady sentence rhythm.
Bạn có muốn đi cùng không?|Would you like to come along?|Invitations|Let “không” complete the question.
Mình gặp nhau lúc tám giờ nhé.|Let's meet at eight o'clock.|Plans|Use a friendly tone on “nhé”.
Em sẽ làm bài tập trước.|I will do my homework first.|Plans|Stress the future marker “sẽ”.
Sau đó, em sẽ giúp mẹ.|After that, I will help my mother.|Sequencing|Pause briefly after “sau đó”.
Vì trời mưa nên em ở nhà.|Because it is raining, I am staying home.|Reasons|Make “vì” and “nên” easy to hear.
Tuy mệt nhưng em vẫn vui.|Although tired, I am still happy.|Contrasts|Contrast “tuy” with “nhưng”.
Nếu trời đẹp, chúng em sẽ đi biển.|If the weather is nice, we will go to the beach.|Conditions|Pause naturally after “đẹp”.
Hà Nội là thủ đô của Việt Nam.|Hanoi is the capital of Vietnam.|Vietnam|Say the place names carefully.
Sông Hương chảy qua thành phố Huế.|The Perfume River flows through Huế.|Vietnam|Keep “Sông Hương” and “Huế” clear.
Hội An nổi tiếng với những chiếc đèn lồng.|Hội An is famous for its lanterns.|Vietnam|Break the sentence into three groups.
Đồng bằng sông Cửu Long có nhiều kênh rạch.|The Mekong Delta has many canals.|Vietnam|Speak slowly through the place name.
Ruộng bậc thang rất đẹp vào mùa lúa chín.|Rice terraces are beautiful when the rice ripens.|Vietnam|Keep a calm, even rhythm.
Tết là dịp gia đình sum họp.|Tết is a time for family reunions.|Festivals|Emphasize “Tết” clearly.
Trẻ em thường nhận lì xì vào ngày Tết.|Children often receive lucky money at Tết.|Festivals|Separate “lì xì” into two syllables.
Mọi người trang trí nhà bằng hoa đào và hoa mai.|People decorate their homes with peach and apricot blossoms.|Festivals|Pause between the two flower names.
Chúng ta nên giữ gìn môi trường sạch đẹp.|We should keep the environment clean and beautiful.|Environment|Emphasize “nên”.
Em luôn bỏ rác đúng nơi quy định.|I always put rubbish in the correct place.|Environment|Speak the final phrase slowly.
Tiết kiệm nước là một thói quen tốt.|Saving water is a good habit.|Environment|Keep “tiết kiệm” clear.
Cây xanh giúp không khí trong lành hơn.|Trees help make the air cleaner.|Environment|Pronounce both ng endings.
Theo em, đọc sách là một sở thích bổ ích.|In my opinion, reading is a useful hobby.|Opinions|Pause after “theo em”.
Em đồng ý vì ý tưởng này rất sáng tạo.|I agree because this idea is creative.|Opinions|Make the reason easy to hear.
Mặc dù gặp khó khăn, bạn ấy không bỏ cuộc.|Although facing difficulty, that person did not give up.|Resilience|Pause after “khó khăn”.
Nếu chăm chỉ luyện tập, chúng ta sẽ tiến bộ.|If we practise diligently, we will improve.|Learning|Pause after “luyện tập”.
Câu chuyện này giúp em hiểu giá trị của lòng dũng cảm.|This story helps me understand the value of courage.|Storytelling|Use three natural phrase groups.
Nhân vật chính đã giúp đỡ mọi người trong làng.|The main character helped everyone in the village.|Storytelling|Keep the past marker “đã” audible.
Sau chuyến đi, em học được nhiều điều thú vị.|After the trip, I learned many interesting things.|Reflection|Pause after “chuyến đi”.
Mỗi vùng miền Việt Nam đều có nét văn hóa riêng.|Every region of Vietnam has its own cultural character.|Culture|Keep “vùng miền” distinct.
Ngôn ngữ giúp chúng ta kết nối và thấu hiểu nhau.|Language helps us connect and understand one another.|Language|Speak steadily through the full sentence.
Em muốn sử dụng tiếng Việt thật tự tin mỗi ngày.|I want to use Vietnamese confidently every day.|Achievement|Finish confidently and clearly.
`.trim();

const levels = rawLevels.split("\n").map((line, index) => {
  const parts = line.split("|");

  if (parts.length !== 4) {
    throw new Error(`Invalid data at level ${index + 1}`);
  }

  return {
    vietnamese: parts[0].trim(),
    english: parts[1].trim(),
    topic: parts[2].trim(),
    tip: parts[3].trim()
  };
});

if (levels.length !== 100) {
  throw new Error(`Expected 100 levels but found ${levels.length}`);
}

const worlds = [
  {
    name: "rice",
    decorations: ["🌾", "🐃"]
  },
  {
    name: "lotus",
    decorations: ["🪷", "🐟"]
  },
  {
    name: "village",
    decorations: ["🏡", "🌴"]
  },
  {
    name: "mountain",
    decorations: ["⛰️", "🌾"]
  },
  {
    name: "city",
    decorations: ["🏫", "🌳"]
  },
  {
    name: "mekong",
    decorations: ["🛶", "🌴"]
  },
  {
    name: "coast",
    decorations: ["⛵", "🐚"]
  },
  {
    name: "hue",
    decorations: ["🏯", "🌸"]
  },
  {
    name: "lantern",
    decorations: ["🏮", "🏮"]
  },
  {
    name: "festival",
    decorations: ["🌼", "🧧"]
  }
];

const SpeechRecognitionAPI =
  window.SpeechRecognition || window.webkitSpeechRecognition || null;

const element = (id) => document.getElementById(id);

const ui = {
  levelInput: element("levelInput"),
  goButton: element("goButton"),
  scoreDisplay: element("scoreDisplay"),
  ageBand: element("ageBand"),
  topicLabel: element("topicLabel"),
  levelCounter: element("levelCounter"),
  scene: element("scene"),
  hat: element("hat"),
  decorationOne: document.querySelector(".decoration-one"),
  decorationTwo: document.querySelector(".decoration-two"),
  vietnamesePhrase: element("vietnamesePhrase"),
  englishTranslation: element("englishTranslation"),
  pronunciationTip: element("pronunciationTip"),
  listenButton: element("listenButton"),
  microphoneButton: element("microphoneButton"),
  microphoneText: element("microphoneText"),
  statusMessage: element("statusMessage"),
  resultPanel: element("resultPanel"),
  heardText: element("heardText"),
  matchScore: element("matchScore"),
  fallbackPanel: element("fallbackPanel"),
  typedAnswer: element("typedAnswer"),
  checkTypedButton: element("checkTypedButton"),
  previousButton: element("previousButton"),
  retryButton: element("retryButton"),
  nextButton: element("nextButton"),
  celebration: element("celebration"),
  celebrationText: element("celebrationText"),
  celebrationNextButton: element("celebrationNextButton"),
  celebrationCloseButton: element("celebrationCloseButton")
};

let currentLevel = readStartingLevel();
let recognition = null;
let isListening = false;
let recognitionFinished = false;
let stars = readNumber("nonLaStars", 0);
let completedLevels = readCompletedLevels();

function safeGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    // The game still works when storage is unavailable.
  }
}

function readNumber(key, fallback) {
  const result = Number.parseInt(safeGet(key), 10);
  return Number.isFinite(result) ? result : fallback;
}

function readCompletedLevels() {
  try {
    const saved = JSON.parse(safeGet("nonLaCompleted") || "[]");

    if (!Array.isArray(saved)) {
      return [];
    }

    return saved
      .map(Number)
      .filter((number) => number >= 1 && number <= 100);
  } catch (error) {
    return [];
  }
}

function readStartingLevel() {
  const urlLevel = Number.parseInt(
    new URLSearchParams(window.location.search).get("level"),
    10
  );

  if (urlLevel >= 1 && urlLevel <= 100) {
    return urlLevel;
  }

  const savedLevel = readNumber("nonLaLevel", 1);
  return Math.min(100, Math.max(1, savedLevel));
}

function getAgeBand(levelNumber) {
  if (levelNumber <= 25) {
    return "Ages 5–7";
  }

  if (levelNumber <= 60) {
    return "Ages 8–11";
  }

  return "Ages 12–15";
}

function getThreshold(levelNumber) {
  if (levelNumber <= 20) {
    return 0.62;
  }

  if (levelNumber <= 50) {
    return 0.68;
  }

  if (levelNumber <= 80) {
    return 0.72;
  }

  return 0.76;
}

function normalizeText(value) {
  return String(value || "")
    .toLocaleLowerCase("vi-VN")
    .normalize("NFC")
    .replace(/[.,!?;:()[\]{}"“”'’…/\\_-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function removeVietnameseMarks(value) {
  return normalizeText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .normalize("NFC");
}

function levenshteinDistance(first, second) {
  const a = Array.from(first);
  const b = Array.from(second);

  if (a.length === 0) {
    return b.length;
  }

  if (b.length === 0) {
    return a.length;
  }

  const previous = Array.from(
    { length: b.length + 1 },
    (_, index) => index
  );

  const current = new Array(b.length + 1);

  for (let row = 1; row <= a.length; row += 1) {
    current[0] = row;

    for (let column = 1; column <= b.length; column += 1) {
      const substitutionCost =
        a[row - 1] === b[column - 1] ? 0 : 1;

      current[column] = Math.min(
        current[column - 1] + 1,
        previous[column] + 1,
        previous[column - 1] + substitutionCost
      );
    }

    for (let column = 0; column <= b.length; column += 1) {
      previous[column] = current[column];
    }
  }

  return previous[b.length];
}

function similarity(first, second) {
  const a = normalizeText(first);
  const b = normalizeText(second);
  const longestLength = Math.max(
    Array.from(a).length,
    Array.from(b).length
  );

  if (longestLength === 0) {
    return 1;
  }

  return 1 - levenshteinDistance(a, b) / longestLength;
}

function calculateMatch(spokenText, targetText) {
  const exactToneScore = similarity(spokenText, targetText);
  const noToneScore = similarity(
    removeVietnameseMarks(spokenText),
    removeVietnameseMarks(targetText)
  );

  /*
    Tone-free matching is slightly discounted. This allows for browser
    recognition differences without completely ignoring Vietnamese tones.
  */
  return Math.max(exactToneScore, noToneScore * 0.94);
}

function stopRecognition() {
  if (recognition && isListening) {
    try {
      recognition.stop();
    } catch (error) {
      // Ignore stop errors from an already closed recognition session.
    }
  }

  setListeningState(false);
}

function setListeningState(listening) {
  isListening = listening;
  ui.microphoneButton.classList.toggle("listening", listening);
  ui.microphoneText.textContent = listening ? "Listening…" : "Speak now";
  ui.microphoneButton.setAttribute(
    "aria-pressed",
    listening ? "true" : "false"
  );
}

function updateURL() {
  const url = new URL(window.location.href);
  url.searchParams.set("level", String(currentLevel));
  window.history.replaceState({}, "", url);
}

function renderLevel(options = {}) {
  const { updateAddress = true } = options;
  const lesson = levels[currentLevel - 1];
  const world = worlds[Math.floor((currentLevel - 1) / 10)];

  stopRecognition();
  window.speechSynthesis?.cancel();

  ui.levelInput.value = currentLevel;
  ui.levelCounter.textContent = `Level ${currentLevel} of 100`;
  ui.ageBand.textContent = getAgeBand(currentLevel);
  ui.topicLabel.textContent = lesson.topic;
  ui.vietnamesePhrase.textContent = lesson.vietnamese;
  ui.englishTranslation.textContent = lesson.english;
  ui.pronunciationTip.textContent = lesson.tip;
  ui.scoreDisplay.textContent = `⭐ ${stars}`;

  ui.scene.dataset.world = world.name;
  ui.scene.classList.remove("success");
  ui.decorationOne.textContent = world.decorations[0];
  ui.decorationTwo.textContent = world.decorations[1];

  ui.resultPanel.hidden = true;
  ui.heardText.textContent = "";
  ui.matchScore.textContent = "";
  ui.typedAnswer.value = "";

  ui.statusMessage.textContent = SpeechRecognitionAPI
    ? "Ready when you are."
    : "Speech recognition is unavailable here. Use the typed-answer option.";
  ui.statusMessage.className = "status";

  ui.previousButton.disabled = currentLevel === 1;
  ui.nextButton.disabled = currentLevel === 100;

  safeSet("nonLaLevel", String(currentLevel));

  if (updateAddress) {
    updateURL();
  }
}

function chooseVietnameseVoice() {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  const voices = window.speechSynthesis.getVoices();

  return (
    voices.find(
      (voice) => voice.lang.toLocaleLowerCase() === "vi-vn"
    ) ||
    voices.find(
      (voice) => voice.lang.toLocaleLowerCase().startsWith("vi")
    ) ||
    null
  );
}

function speakPhrase() {
  if (!("speechSynthesis" in window)) {
    setStatus(
      "Text-to-speech is not available in this browser.",
      "try-again"
    );
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(
    levels[currentLevel - 1].vietnamese
  );

  utterance.lang = "vi-VN";
  utterance.rate = currentLevel <= 25 ? 0.72 : 0.82;
  utterance.pitch = 1;

  const voice = chooseVietnameseVoice();

  if (voice) {
    utterance.voice = voice;
  }

  utterance.onerror = () => {
    setStatus(
      "The example voice could not be played. You can still use the game.",
      "try-again"
    );
  };

  window.speechSynthesis.speak(utterance);
}

function setStatus(message, style = "") {
  ui.statusMessage.textContent = message;
  ui.statusMessage.className = `status ${style}`.trim();
}

function startRecognition() {
  if (!SpeechRecognitionAPI) {
    ui.fallbackPanel.open = true;
    ui.typedAnswer.focus();

    setStatus(
      "Speech recognition is not supported by this browser. Type the answer below.",
      "try-again"
    );

    return;
  }

  if (!window.isSecureContext) {
    ui.fallbackPanel.open = true;

    setStatus(
      "The microphone requires HTTPS. Open the GitHub Pages HTTPS address.",
      "try-again"
    );

    return;
  }

  if (isListening) {
    stopRecognition();
    setStatus("Listening stopped.");
    return;
  }

  window.speechSynthesis?.cancel();

  recognition = new SpeechRecognitionAPI();
  recognition.lang = "vi-VN";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 5;
  recognitionFinished = false;

  recognition.onstart = () => {
    setListeningState(true);
    setStatus("Listening… Say the phrase in Vietnamese.");
  };

  recognition.onresult = (event) => {
    recognitionFinished = true;

    const alternatives = Array.from(event.results[0]);
    const target = levels[currentLevel - 1].vietnamese;

    let bestTranscript = "";
    let bestScore = -1;

    alternatives.forEach((alternative) => {
      const score = calculateMatch(alternative.transcript, target);

      if (score > bestScore) {
        bestScore = score;
        bestTranscript = alternative.transcript;
      }
    });

    evaluateAnswer(bestTranscript, bestScore);
  };

  recognition.onerror = (event) => {
    recognitionFinished = true;

    const messages = {
      "not-allowed":
        "Microphone permission was denied. Allow microphone access or type the answer.",
      "service-not-allowed":
        "Speech recognition is unavailable. Please use the typed-answer option.",
      "no-speech":
        "I did not hear anything. Move closer to the microphone and try again.",
      "audio-capture":
        "No microphone was found. Please use the typed-answer option.",
      network:
        "Speech recognition could not connect. Check your connection or type the answer.",
      aborted:
        "Listening stopped."
    };

    const message =
      messages[event.error] ||
      "Speech recognition encountered a problem. Please try again.";

    setStatus(message, "try-again");

    if (
      event.error === "not-allowed" ||
      event.error === "service-not-allowed" ||
      event.error === "audio-capture"
    ) {
      ui.fallbackPanel.open = true;
    }
  };

  recognition.onend = () => {
    setListeningState(false);

    if (!recognitionFinished) {
      setStatus(
        "I did not hear a complete phrase. Please try again.",
        "try-again"
      );
    }
  };

  try {
    recognition.start();
  } catch (error) {
    setListeningState(false);
    setStatus(
      "The microphone could not start. Wait a moment and try again.",
      "try-again"
    );
  }
}

function evaluateAnswer(transcript, suppliedScore = null) {
  const spoken = normalizeText(transcript);
  const target = levels[currentLevel - 1].vietnamese;

  if (!spoken) {
    setStatus("Please say or type an answer first.", "try-again");
    return;
  }

  const score =
    suppliedScore === null
      ? calculateMatch(spoken, target)
      : suppliedScore;

  const percentage = Math.round(
    Math.max(0, Math.min(1, score)) * 100
  );

  ui.resultPanel.hidden = false;
  ui.heardText.textContent = transcript;
  ui.matchScore.textContent = `Phrase match: ${percentage}%`;

  if (score >= getThreshold(currentLevel)) {
    handleSuccess(percentage);
  } else {
    handleRetry(percentage);
  }
}

function handleSuccess(percentage) {
  setStatus("Correct! Giỏi lắm! The nón lá made it through.", "good");

  ui.scene.classList.remove("success");

  // Force animation to restart after repeated successful attempts.
  void ui.scene.offsetWidth;
  ui.scene.classList.add("success");

  if (!completedLevels.includes(currentLevel)) {
    completedLevels.push(currentLevel);
    stars += 1;

    safeSet("nonLaCompleted", JSON.stringify(completedLevels));
    safeSet("nonLaStars", String(stars));

    ui.scoreDisplay.textContent = `⭐ ${stars}`;
  }

  window.setTimeout(() => {
    ui.celebrationText.textContent =
      percentage >= 90
        ? "Excellent pronunciation!"
        : "Great work! You cleared the obstacle.";

    ui.celebrationNextButton.textContent =
      currentLevel === 100 ? "Play level 100 again" : "Next level";

    ui.celebration.hidden = false;
    ui.celebrationNextButton.focus();
  }, 1450);
}

function handleRetry(percentage) {
  let advice = "Listen once more and try again.";

  if (percentage >= 50) {
    advice = "Very close! Speak slowly and try the tones once more.";
  }

  setStatus(advice, "try-again");
  ui.scene.classList.remove("success");
}

function goToLevel(number) {
  const parsed = Number.parseInt(number, 10);

  if (!Number.isFinite(parsed) || parsed < 1 || parsed > 100) {
    setStatus("Enter a level number from 1 to 100.", "try-again");
    ui.levelInput.focus();
    return;
  }

  currentLevel = parsed;
  renderLevel();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function nextLevel() {
  ui.celebration.hidden = true;

  if (currentLevel < 100) {
    currentLevel += 1;
  }

  renderLevel();
}

function previousLevel() {
  if (currentLevel > 1) {
    currentLevel -= 1;
    renderLevel();
  }
}

function retryLevel() {
  ui.celebration.hidden = true;
  renderLevel();
  ui.microphoneButton.focus();
}

function checkTypedAnswer() {
  evaluateAnswer(ui.typedAnswer.value);
}

function bindEvents() {
  ui.goButton.addEventListener("click", () => {
    goToLevel(ui.levelInput.value);
  });

  ui.levelInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      goToLevel(ui.levelInput.value);
    }
  });

  ui.listenButton.addEventListener("click", speakPhrase);
  ui.microphoneButton.addEventListener("click", startRecognition);

  ui.checkTypedButton.addEventListener("click", checkTypedAnswer);

  ui.typedAnswer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkTypedAnswer();
    }
  });

  ui.previousButton.addEventListener("click", previousLevel);
  ui.retryButton.addEventListener("click", retryLevel);
  ui.nextButton.addEventListener("click", nextLevel);

  ui.celebrationNextButton.addEventListener("click", nextLevel);

  ui.celebrationCloseButton.addEventListener("click", () => {
    ui.celebration.hidden = true;
    ui.microphoneButton.focus();
  });

  ui.celebration.addEventListener("click", (event) => {
    if (event.target === ui.celebration) {
      ui.celebration.hidden = true;
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !ui.celebration.hidden) {
      ui.celebration.hidden = true;
    }
  });

  window.addEventListener("popstate", () => {
    const levelFromURL = Number.parseInt(
      new URLSearchParams(window.location.search).get("level"),
      10
    );

    if (levelFromURL >= 1 && levelFromURL <= 100) {
      currentLevel = levelFromURL;
      renderLevel({ updateAddress: false });
    }
  });
}

function initialize() {
  bindEvents();
  renderLevel();

  /*
    Some browsers load speech-synthesis voices asynchronously.
    Calling getVoices once helps initialize the list.
  */
  if ("speechSynthesis" in window) {
    window.speechSynthesis.getVoices();
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}
