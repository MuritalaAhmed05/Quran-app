"use client";
import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
export default function Home() {
  const [surah, setSurah] = useState(null);
  const [selectSurah, setSelectSurah] = useState("1"); // Default Surah: Al-Fatiha
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [selectedSurah, setSelectedSurah] = useState(null); // State for selected Surah

  const fetchSurah = async (surahNumber) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://quran-endpoint.vercel.app/quran/${surahNumber}`
      );
      const data = await response.json();

      if (data?.status === 200) {
        setSurah(data.data);
      } else {
        setError("Failed to load data");
      }
    } catch (err) {
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSurah(selectSurah);
  }, [selectSurah]);

  const handleSurahChange = (e) => {
    setSelectSurah(e.target.value);
  };

  const openModal = (surahData) => {
    setSelectedSurah(surahData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSurah(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold text-center">Quran Surah Explorer</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="flex flex-col items-center mb-8">
          <label
            htmlFor="surah-select"
            className="text-lg font-medium mb-2 text-gray-700"
          >
            Select a Surah
          </label>
          <select
            id="surah-select"
            value={selectSurah}
            onChange={handleSurahChange}
            className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full max-w-lg"
          >
            <option
              className="max-w-sm w-[20px] rounded-md"
              value="1"
              style={{ width: "150px", borderRadius: "20px" }}
            >
              📖 1. Al-Fatiha (The Opening)
            </option>
            <option className="max-w-sm w-[20px]" value="2">
              🐄 2. Al-Baqarah (The Cow)
            </option>
            <option className="max-w-sm w-[20px]" value="3">
              🏠 3. Aali Imran (The Family of Imran)
            </option>
            <option className="max-w-sm w-[20px]" value="4">
              👩 4. An-Nisa' (The Women)
            </option>
            <option className="max-w-sm w-[20px]" value="5">
              🍽️ 5. Al-Ma'idah (The Table Spread)
            </option>
            <option className="max-w-sm w-[20px]" value="6">
              🐪 6. Al-An'am (The Cattle)
            </option>
            <option className="max-w-sm w-[20px]" value="7">
              ⛰️ 7. Al-A'raf (The Heights)
            </option>
            <option className="max-w-sm w-[20px]" value="8">
              ⚔️ 8. Al-Anfal (The Spoils of War)
            </option>
            <option className="max-w-sm w-[20px]" value="9">
              🙏 9. At-Tawbah (The Repentance)
            </option>
            <option className="max-w-sm w-[20px]" value="10">
              🐟 10. Yunus (Jonah)
            </option>
            <option className="max-w-sm w-[20px]" value="11">
              🌩️ 11. Hud (Hud)
            </option>
            <option className="max-w-sm w-[20px]" value="12">
              👶 12. Yusuf (Joseph)
            </option>
            <option className="max-w-sm w-[20px]" value="13">
              ⚡ 13. Ar-Rad (The Thunder)
            </option>
            <option className="max-w-sm w-[20px]" value="14">
              🕊️ 14. Ibrahim (Abraham)
            </option>
            <option className="max-w-sm w-[20px]" value="15">
              🪨 15. Al-Hijr (The Rocky Tract)
            </option>
            <option className="max-w-sm w-[20px]" value="16">
              🐝 16. An-Nahl (The Bee)
            </option>
            <option className="max-w-sm w-[20px]" value="17">
              🌙 17. Al-Isra' (The Night Journey)
            </option>
            <option className="max-w-sm w-[20px]" value="18">
              🕳️ 18. Al-Kahf (The Cave)
            </option>
            <option className="max-w-sm w-[20px]" value="19">
              👩‍🍼 19. Maryam (Mary)
            </option>
            <option className="max-w-sm w-[20px]" value="20">
              📜 20. Ta-Ha (Ta-Ha)
            </option>
            <option className="max-w-sm w-[20px]" value="21">
              📖 21. Al-Anbiya' (The Prophets)
            </option>
            <option className="max-w-sm w-[20px]" value="22">
              🕋 22. Al-Hajj (The Pilgrimage)
            </option>
            <option className="max-w-sm w-[20px]" value="23">
              🙌 23. Al-Mu'minun (The Believers)
            </option>
            <option className="max-w-sm w-[20px]" value="24">
              💡 24. An-Nur (The Light)
            </option>
            <option className="max-w-sm w-[20px]" value="25">
              ⚖️ 25. Al-Furqan (The Criterion)
            </option>
            <option className="max-w-sm w-[20px]" value="26">
              🎤 26. Ash-Shu'ara' (The Poets)
            </option>
            <option className="max-w-sm w-[20px]" value="27">
              🐜 27. An-Naml (The Ant)
            </option>
            <option className="max-w-sm w-[20px]" value="28">
              📚 28. Al-Qasas (The Stories)
            </option>
            <option className="max-w-sm w-[20px]" value="29">
              🕷️ 29. Al-Ankabut (The Spider)
            </option>
            <option className="max-w-sm w-[20px]" value="30">
              🏛️ 30. Ar-Rum (The Romans)
            </option>
            <option className="max-w-sm w-[20px]" value="31">
              📖 31. Luqman (Luqman)
            </option>
            <option className="max-w-sm w-[20px]" value="32">
              🙇 32. As-Sajda (The Prostration)
            </option>
            <option className="max-w-sm w-[20px]" value="33">
              ⚔️ 33. Al-Ahzab (The Combined Forces)
            </option>
            <option className="max-w-sm w-[20px]" value="34">
              🌸 34. Saba' (Sheba)
            </option>
            <option className="max-w-sm w-[20px]" value="35">
              🛠️ 35. Fatir (The Originator)
            </option>
            <option className="max-w-sm w-[20px]" value="36">
              📖 36. Ya-Sin (Ya-Sin)
            </option>
            <option className="max-w-sm w-[20px]" value="37">
              🛡️ 37. As-Saffat (Those who set the Ranks)
            </option>
            <option className="max-w-sm w-[20px]" value="38">
              🅱️ 38. Sad (The Letter Sad)
            </option>
            <option className="max-w-sm w-[20px]" value="39">
              🪖 39. Az-Zumar (The Troops)
            </option>
            <option className="max-w-sm w-[20px]" value="40">
              🤲 40. Ghafir (The Forgiver)
            </option>
            <option className="max-w-sm w-[20px]" value="41">
              📜 41. Fussilat (Explained in Detail)
            </option>
            <option className="max-w-sm w-[20px]" value="42">
              🗣️ 42. Ash-Shura (Consultation)
            </option>
            <option className="max-w-sm w-[20px]" value="43">
              💰 43. Az-Zukhruf (The Gold Adornments)
            </option>
            <option className="max-w-sm w-[20px]" value="44">
              💨 44. Ad-Dukhan (The Smoke)
            </option>
            <option className="max-w-sm w-[20px]" value="45">
              🐊 45. Al-Jathiyah (The Crouching)
            </option>
            <option className="max-w-sm w-[20px]" value="46">
              ⛰️ 46. Al-Ahqaf (The Wind-Curved Sandhills)
            </option>
            <option className="max-w-sm w-[20px]" value="47">
              🕋 47. Muhammad (Muhammad)
            </option>
            <option className="max-w-sm w-[20px]" value="48">
              🏆 48. Al-Fath (The Victory)
            </option>
            <option className="max-w-sm w-[20px]" value="49">
              🏠 49. Al-Hujurat (The Rooms)
            </option>
            <option className="max-w-sm w-[20px]" value="50">
              🔤 50. Qaf (The Letter Qaf)
            </option>
            <option className="max-w-sm w-[20px]" value="51">
              🌬️ 51. Adh-Dhariyat (The Winnowing)
            </option>
            <option className="max-w-sm w-[20px]" value="52">
              ⛰️ 52. At-Tur (The Mount)
            </option>
            <option className="max-w-sm w-[20px]" value="53">
              🌟 53. An-Najm (The Star)
            </option>
            <option className="max-w-sm w-[20px]" value="54">
              🌙 54. Al-Qamar (The Moon)
            </option>
            <option className="max-w-sm w-[20px]" value="55">
              💖 55. Ar-Rahman (The Beneficent)
            </option>
            <option className="max-w-sm w-[20px]" value="56">
              🌌 56. Al-Waqi'a (The Inevitable)
            </option>
            <option className="max-w-sm w-[20px]" value="57">
              🔩 57. Al-Hadid (The Iron)
            </option>
            <option className="max-w-sm w-[20px]" value="58">
              👩‍⚖️ 58. Al-Mujadila (The Pleading Woman)
            </option>
            <option className="max-w-sm w-[20px]" value="59">
              🏴 59. Al-Hashr (The Exile)
            </option>
            <option className="max-w-sm w-[20px]" value="60">
              🔍 60. Al-Mumtahanah (She that is to be examined)
            </option>
            <option className="max-w-sm w-[20px]" value="61">
              📊 61. As-Saff (The Ranks)
            </option>
            <option className="max-w-sm w-[20px]" value="62">
              🕌 62. Al-Jumu'ah (Friday)
            </option>
            <option className="max-w-sm w-[20px]" value="63">
              🤥 63. Al-Munafiqun (The Hypocrites)
            </option>
            <option className="max-w-sm w-[20px]" value="64">
              🌪️ 64. At-Taghabun (Mutual Disillusion)
            </option>
            <option className="max-w-sm w-[20px]" value="65">
              💔 65. At-Talaq (The Divorce)
            </option>
            <option className="max-w-sm w-[20px]" value="66">
              🚫 66. At-Tahrim (The Prohibition)
            </option>
            <option className="max-w-sm w-[20px]" value="67">
              👑 67. Al-Mulk (The Sovereignty)
            </option>
            <option className="max-w-sm w-[20px]" value="68">
              🖋️ 68. Al-Qalam (The Pen)
            </option>
            <option className="max-w-sm w-[20px]" value="69">
              🔍 69. Al-Haqqah (The Reality)
            </option>
            <option className="max-w-sm w-[20px]" value="70">
              ⬆️ 70. Al-Ma'arij (The Ascending Stairways)
            </option>
            <option className="max-w-sm w-[20px]" value="71">
              🌊 71. Nuh (Noah)
            </option>
            <option className="max-w-sm w-[20px]" value="72">
              👻 72. Al-Jinn (The Jinn)
            </option>
            <option className="max-w-sm w-[20px]" value="73">
              🕵️‍♂️ 73. Al-Muzzammil (The Enshrouded One)
            </option>
            <option className="max-w-sm w-[20px]" value="74">
              🧕 74. Al-Muddathir (The Cloaked One)
            </option>
            <option className="max-w-sm w-[20px]" value="75">
              🌅 75. Al-Qari'ah (The Calamity)
            </option>
            <option className="max-w-sm w-[20px]" value="76">
              🧑‍🤝‍🧑 76. Al-Infitar (The Splitting Open)
            </option>
            <option className="max-w-sm w-[20px]" value="77">
              🎤 77. Al-Mutaffifin (Defrauding)
            </option>
            <option className="max-w-sm w-[20px]" value="78">
              💫 78. Al-Inshiqaq (The Splitting Open)
            </option>
            <option className="max-w-sm w-[20px]" value="79">
              🌪️ 79. Al-Buruj (The Mansions of the Stars)
            </option>
            <option className="max-w-sm w-[20px]" value="80">
              💥 80. At-Tariq (The Morning Star)
            </option>
            <option className="max-w-sm w-[20px]" value="81">
              🌒 81. Al-A'la (The Most High)
            </option>
            <option className="max-w-sm w-[20px]" value="82">
              🖋️ 82. Al-Ghashiya (The Overwhelming)
            </option>
            <option className="max-w-sm w-[20px]" value="83">
              🔥 83. Al-Fajr (The Dawn)
            </option>
            <option className="max-w-sm w-[20px]" value="84">
              🍂 84. Al-Mutaffifin (Defrauding)
            </option>
            <option className="max-w-sm w-[20px]" value="85">
              📖 85. Al-Qamar (The Moon)
            </option>
            <option className="max-w-sm w-[20px]" value="86">
              📜 86. Al-Mulk (The Sovereignty)
            </option>
            <option className="max-w-sm w-[20px]" value="87">
              🌻 87. Al-A'la (The Most High)
            </option>
            <option className="max-w-sm w-[20px]" value="88">
              🌞 88. Al-Ghashiya (The Overwhelming)
            </option>
            <option className="max-w-sm w-[20px]" value="89">
              🍃 89. Al-Fajr (The Dawn)
            </option>
            <option className="max-w-sm w-[20px]" value="90">
              🌙 90. Al-Balad (The City)
            </option>
            <option className="max-w-sm w-[20px]" value="91">
              ☀️ 91. Ash-Shams (The Sun)
            </option>
            <option className="max-w-sm w-[20px]" value="92">
              🌙 92. Al-Lail (The Night)
            </option>
            <option className="max-w-sm w-[20px]" value="93">
              🌟 93. Adh-Duha (The Morning Hours)
            </option>
            <option className="max-w-sm w-[20px]" value="94">
              🪴 94. Ash-Sharh (The Relief)
            </option>
            <option className="max-w-sm w-[20px]" value="95">
              🌲 95. At-Tin (The Fig)
            </option>
            <option className="max-w-sm w-[20px]" value="96">
              🖋️ 96. Al-Alaq (The Clot)
            </option>
            <option className="max-w-sm w-[20px]" value="97">
              🌙 97. Al-Qadr (The Night of Decree)
            </option>
            <option className="max-w-sm w-[20px]" value="98">
              📖 98. Al-Bayyina (The Clear Proof)
            </option>
            <option className="max-w-sm w-[20px]" value="99">
              🌱 99. Az-Zalzala (The Earthquake)
            </option>
            <option className="max-w-sm w-[20px]" value="100">
              🌸 100. Al-Adiyat (The Courser)
            </option>
            <option className="max-w-sm w-[20px]" value="101">
              🌪️ 101. Al-Qari'ah (The Calamity)
            </option>
            <option className="max-w-sm w-[20px]" value="102">
              🪙 102. At-Takathur (The Rivalry in Worldly Increase) -
            </option>
            <option className="max-w-sm w-[20px]" value="103">
              🌾 103. Al-Asr (The Declining Day)
            </option>
            <option className="max-w-sm w-[20px]" value="104">
              📜 104. Al-Humazah (The Scorner)
            </option>
            <option className="max-w-sm w-[20px]" value="105">
              🛑 105. Al-Fil (The Elephant)
            </option>
            <option className="max-w-sm w-[20px]" value="106">
              🌍 106. Quraish (The Quraish)
            </option>
            <option className="max-w-sm w-[20px]" value="107">
              🎁 107. Al-Ma'un (The Small Kindnesses)
            </option>
            <option className="max-w-sm w-[20px]" value="108">
              🎉 108. Al-Kawthar (The Abundance)
            </option>
            <option className="max-w-sm w-[20px]" value="109">
              🧎‍♂️ 109. Al-Kafirun (The Disbelievers)
            </option>
            <option className="max-w-sm w-[20px]" value="110">
              🕌 110. An-Nasr (The Divine Support)
            </option>
            <option className="max-w-sm w-[20px]" value="111">
              🔥 111. Al-Masad (The Palm Fiber)
            </option>
            <option className="max-w-sm w-[20px]" value="112">
              💔 112. Al-Ikhlas (The Sincerity)
            </option>
            <option className="max-w-sm w-[20px]" value="113">
              💨 113. Al-Falaq (The Daybreak)
            </option>
            <option className="max-w-sm w-[20px]" value="114">
              🌙 114. An-Nas (The People)
            </option>
          </select>
        </div>

        {loading && (
          <p className="text-center text-blue-500 font-semibold">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500 font-semibold">{error}</p>
        )}

        

        {surah && (
          <div className="bg-white shadow-lg rounded-lg p-6 mx-auto max-w-3xl relative">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-blue-600">
                {surah.asma.en.long}
              </h2>
              <p className="text-gray-600 italic">
                ({surah.asma.translation.en})
              </p>
              <br />
              <p
                className="text-gray-800 text-4xl font-bold mt-2"
                style={{ fontFamily: "Amiri, serif" }}
              >
                {surah.asma.ar.long}
              </p>

              <button
          className="text-blue-500 absolute top-2 right-2 "
          onClick={() => openModal(surah)} // Open modal on click
        >
          <FaInfoCircle className="w-6 h-6"/>
        </button>
            </div>

            <div>
              <div className="mb-6">
                <audio
                  key={surah ? surah.recitation.full : ""}
                  controls
                  className="w-full"
                >
                  <source
                    src={surah ? surah.recitation.full : ""}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>

              <ul className="space-y-4">
                {surah.ayahs.map((ayah, index) => (
                  <li
                    key={ayah.number.inquran}
                    className="bg-blue-50 p-4 rounded-md shadow-sm"
                  >
                    <strong className="text-blue-600">{index + 1}.</strong>{" "}
                    <div className="mt-2">
                      <p
                        className="text-3xl font-semibold text-right"
                        style={{ fontFamily: "Amiri, serif" }}
                      >
                        {ayah.text.ar}
                      </p>
                      <p className="text-gray-500 text-lg mt-1 text-right">
                        {ayah.translation.en}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>

      {isModalOpen && selectedSurah && (
        <div className="max-w-lg fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-red-500 text-2xl"
            >
              <FaTimes />
            </button>
            <h2 className="text-2xl font-bold text-blue-600">
              {selectedSurah.asma.en.long}
            </h2>
            <p className="text-gray-600 italic">
              ({selectedSurah.asma.translation.en})
            </p>
            <p className="text-gray-800 text-lg mt-2">
              {selectedSurah.asma.ar.long}
            </p>
            <p className="text-gray-800 mt-4">{selectedSurah.meaning}</p>
          </div>
        </div>
      )}

      <footer className="bg-blue-600 text-white text-center p-4 mt-10">
        <p>&copy; {new Date().getFullYear()} Quran Surah Explorer</p>
      </footer>
    </div>
  );
}
