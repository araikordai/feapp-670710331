
import ProfileCard from './components/ProfileCard';
import './App.css';

const members = [
  { id: 1, name: 'ภูธํนวา สุวะเสน', nickname: 'ขนุน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'ปลา'] },
  { id: 2, name: 'สมชาย ใจซื่อ', nickname: 'edokฮันรา',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'หมา'] },
    { id: 3, name: 'แบรี่ อัลเลน', nickname: 'แฟลช',
    major: 'อะไรก็ได้', favorites: ['ตีแบด', 'วิ่ง'] },
  // 👉 เพิ่มสมาชิกคนอื่น ๆ ของกลุ่มที่นี่
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;