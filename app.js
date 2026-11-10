"use strict";

/*
  Each array item represents one level:
  [Vietnamese phrase, English translation, topic, pronunciation tip]

  The progression is designed for child learners of Vietnamese rather than
  claiming to reproduce a specific official national curriculum.
*/

const levels = [
  ["Xin chào!", "Hello!", "Greetings", "Say “chào” with a falling tone."],
  ["Chào bạn!", "Hello, friend!", "Greetings", "Keep both words clear and separate."],
  ["Tạm biệt!", "Goodbye!", "Greetings", "The dot under “tạm” marks a low, heavy tone."],
  ["Cảm ơn.", "Thank you.", "Polite words", "Let your voice dip and rise on “cảm”."],
  ["Xin lỗi.", "Sorry / Excuse me.", "Polite words", "Say “lỗi” with a broken rising tone."],
  ["Vâng ạ.", "Yes. (polite)", "Polite words", "Use a gentle, respectful voice."],
  ["Không ạ.", "No. (polite)", "Polite words", "Keep “không” level."],
  ["Em tên là An.", "My name is An.", "Introductions", "Say each short word clearly."],
  ["Bạn tên là gì?", "What is your name?", "Introductions", "Raise your voice naturally for the question."],
  ["Mình rất vui.", "I am very happy.", "Feelings", "The word “rất” has a short, clipped ending."],

  ["Một, hai, ba.", "One, two, three.", "Numbers", "Pause briefly between the numbers."],
  ["Bốn, năm, sáu.", "Four, five, six.", "Numbers", "Do not pronounce “sáu” like English “sow”."],
  ["Bảy, tám, chín.", "Seven, eight, nine.", "Numbers", "Keep the final sounds light."],
  ["Mười quả bóng.", "Ten balls.", "Numbers", "Say “mười” smoothly as one syllable."],
  ["Đây là màu đỏ.", "This is red.", "Colours", "The letter “đ” is stronger than “d”."],
  ["Đây là màu xanh.", "This is blue or green.", "Colours", "Keep “xanh” short, with a final ng sound."],
  ["Bông hoa màu vàng.", "The flower is yellow.", "Colours", "Link the words gently without rushing."],
  ["Con mèo màu trắng.", "The cat is white.", "Animals and colours", "Stretch the vowel slightly in “mèo”."],
  ["Con chó màu đen.", "The dog is black.", "Animals and colours", "Use a rising tone on “chó”."],
  ["Em có hai con cá.", "I have two fish.", "Animals and numbers", "Keep “cá” rising and bright."],

  ["Đây là mẹ em.", "This is my mother.", "Family", "The word “mẹ” has a low, heavy tone."],
  ["Đây là bố em.", "This is my father.", "Family", "Say “bố” with a rising tone."],
  ["Em có một chị gái.", "I have an older sister.", "Family", "Keep the final “t” in “một” short."],
  ["Em có một em trai.", "I have a younger brother.", "Family", "Do not rush the phrase “em trai”."],
  ["Gia đình em rất vui.", "My family is very happy.", "Family", "Say “gia đình” as two clear syllables."],
  ["Em thích ăn cơm.", "I like eating rice.", "Food", "The vowel in “cơm” is not the English vowel in “come”."],
  ["Em thích uống sữa.", "I like drinking milk.", "Food", "The hook above “sữa” marks a questioning tone."],
  ["Quả chuối rất ngon.", "The banana is delicious.", "Food", "Say “chuối” with a rising tone."],
  ["Cho em một quả táo.", "Please give me an apple.", "Food", "Use a polite, friendly rhythm."],
  ["Em không thích cay.", "I do not like spicy food.", "Food", "Keep “không” level and “thích” rising."],

  ["Em đi học.", "I go to school.", "School", "The “h” in “học” should be audible."],
  ["Đây là lớp học.", "This is the classroom.", "School", "Finish “lớp” with a short p sound."],
  ["Cô giáo đang đọc sách.", "The teacher is reading a book.", "School", "Break the sentence into two small groups."],
  ["Thầy giáo đang viết.", "The teacher is writing.", "School", "Let “thầy” fall, then rise."],
  ["Em mở quyển sách.", "I open the book.", "Classroom actions", "Say “quyển” as one smooth syllable."],
  ["Em đóng cửa lại.", "I close the door.", "Classroom actions", "Use a rising tone on “đóng”."],
  ["Bút chì ở trên bàn.", "The pencil is on the table.", "Position words", "Stress each location word clearly."],
  ["Cặp sách ở dưới ghế.", "The schoolbag is under the chair.", "Position words", "The “gh” in “ghế” sounds like a hard g."],
  ["Bạn ngồi bên cạnh em.", "You sit next to me.", "Position words", "Keep “cạnh” low and short."],
  ["Chúng em cùng học.", "We study together.", "School", "Say “chúng em” as two separate words."],

  ["Bây giờ là mấy giờ?", "What time is it now?", "Time", "Use a clear question rhythm."],
  ["Bây giờ là bảy giờ.", "It is seven o’clock.", "Time", "Repeat “giờ” with the same tone."],
  ["Em thức dậy lúc sáu giờ.", "I wake up at six o’clock.", "Daily routine", "Speak in three groups: wake up, at six, o’clock."],
  ["Em đánh răng mỗi sáng.", "I brush my teeth every morning.", "Daily routine", "Say the final ng in “răng” and “sáng”."],
  ["Em ăn sáng cùng gia đình.", "I eat breakfast with my family.", "Daily routine", "Keep a steady rhythm across the sentence."],
  ["Hôm nay là thứ hai.", "Today is Monday.", "Days", "Say “thứ hai” clearly as two words."],
  ["Ngày mai là thứ ba.", "Tomorrow is Tuesday.", "Days", "Keep “mai” level and open."],
  ["Hôm qua trời có mưa.", "It rained yesterday.", "Weather", "Do not rush “trời có mưa”."],
  ["Hôm nay trời nắng.", "It is sunny today.", "Weather", "The final ng in “nắng” is important."],
  ["Em đi ngủ lúc chín giờ.", "I go to bed at nine o’clock.", "Daily routine", "Speak slowly through the time phrase."],

  ["Nhà em ở gần trường.", "My home is near the school.", "Places", "Say “trường” as one syllable."],
  ["Thư viện ở đâu?", "Where is the library?", "Places", "Raise the question gently at the end."],
  ["Hãy rẽ trái ở phía trước.", "Turn left ahead.", "Directions", "The word “trái” has a rising tone."],
  ["Hãy rẽ phải ở ngã tư.", "Turn right at the intersection.", "Directions", "Keep “ngã tư” clear and unhurried."],
  ["Đi thẳng đến công viên.", "Go straight to the park.", "Directions", "The ending of “thẳng” is short."],
  ["Chợ ở bên kia đường.", "The market is across the road.", "Places", "Separate “bên kia” from “đường”."],
  ["Em muốn mua một chiếc áo.", "I want to buy a shirt.", "Shopping