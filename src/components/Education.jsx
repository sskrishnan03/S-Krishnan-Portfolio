import { Book, Settings, Monitor, MapPin, Calendar, Building2 } from 'lucide-react';

const education = [
  {
    id: '01',
    icon: Book,
    title: 'SSLC',
    qualification: 'Secondary School Leaving Certificate',
    sub: '10th Standard',
    description: 'Completed 10th Standard under Karnataka State Board',
    type: 'School',
    boardLabel: 'Board',
    school: 'Anikethan Public School',
    board: 'Karnataka State Board',
    year: '2023',
    grade: '74%',
    gradeLabel: 'Percentage',
    location: 'Vivekananda Nagar, Bommanahalli, Bengaluru, Karnataka',
    subjects: ['English', 'Kannada', 'Hindi', 'Mathematics', 'Science', 'Social Science'],
  },
  {
    id: '02',
    icon: Settings,
    title: 'Diploma',
    qualification: 'Diploma in Computer Engineering & IT Infrastructure',
    sub: 'Technical Education',
    description: 'Completed Diploma in Computer Engineering & IT Infrastructure',
    type: 'Institute',
    boardLabel: 'Board',
    school: 'NTTF (Nettur Technical Training Foundation)',
    board: 'NTTF — Private Institute',
    year: '2026',
    grade: '8.99 CGPA',
    gradeLabel: 'CGPA',
    location: 'Electronic City Phase 1, Konappana Agrahara, Karnataka',
    subjects: ['C Programming', 'C++ Programming', 'Java Programming', 'Python Programming', 'DBMS & SQL', 'Computer Networks', 'Web Development'],
  },
  {
    id: '03',
    icon: Monitor,
    title: 'BCA',
    qualification: 'Bachelor of Computer Applications',
    sub: 'Undergraduate Degree',
    description: 'Currently pursuing Bachelor of Computer Applications (1st Semester)',
    type: 'University',
    boardLabel: 'University',
    school: 'GLA University',
    board: 'GLA University, Mathura',
    year: '2026 – Present',
    grade: null,
    gradeLabel: '',
    location: 'Mathura, Uttar Pradesh',
    subjects: ['Problem Solving Using Computer (Python)', 'Mathematics – I', 'Language Skill - I', 'Software Lab using Python', 'Office Management Tools', 'Introduction to Digital Marketing'],
  },
];

export default function Education() {
  return (
    <section className="relative w-full min-h-screen bg-[#121212] py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute bottom-[15%] right-[8%] w-96 h-96 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-10 md:mb-14">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-8 h-[3px] rounded-full bg-white" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4D4D4]">Education</span>
          <span className="w-8 h-[3px] rounded-full bg-white" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4">
          Academic <span className="text-white">Journey</span>
        </h2>
        <p className="text-[#D4D4D4] text-base md:text-lg max-w-xl leading-relaxed font-medium">
          A record of my educational qualifications and achievements.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {education.map((e, i) => {
            const Icon = e.icon;
            return (
              <div
                key={i}
                className="group relative bg-[#1E1E1E] rounded-3xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                <div className="h-1 bg-gradient-to-r from-white via-white/60 to-white/10" />

                <div className="px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8 flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-black tracking-tight leading-tight">{e.title}</h3>
                        <p className="text-[#D4D4D4] text-xs font-medium mt-0.5">{e.qualification}</p>
                      </div>
                    </div>
                    {e.grade && (
                      <div className="flex flex-col items-end">
                        <span className="text-lg md:text-xl font-black text-white leading-none">{e.grade}</span>
                        <span className="text-[9px] font-semibold text-[#D4D4D4] uppercase tracking-wider mt-0.5">{e.gradeLabel}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[#D4D4D4]/60 text-xs leading-relaxed">{e.description}</p>

                  <div className="h-px bg-gradient-to-r from-white/10 via-white/10 to-transparent" />

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-3.5 h-3.5 text-[#D4D4D4] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-[#D4D4D4] uppercase tracking-wider">{e.type}</p>
                        <p className="text-white text-xs font-medium mt-0.5">{e.school}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-3.5 h-3.5 text-[#D4D4D4] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-[#D4D4D4] uppercase tracking-wider">Location</p>
                        <p className="text-white text-xs font-medium mt-0.5">{e.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-3.5 h-3.5 text-[#D4D4D4] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-[#D4D4D4] uppercase tracking-wider">{e.boardLabel}</p>
                        <p className="text-white text-xs font-medium mt-0.5">{e.board}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-3.5 h-3.5 text-[#D4D4D4] mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-[#D4D4D4] uppercase tracking-wider">Passing Year</p>
                        <p className="text-white text-xs font-medium mt-0.5">{e.year}</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-white mb-2.5">Major Subjects</p>
                    <div className="flex flex-wrap gap-1.5">
                      {e.subjects.map((s, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-semibold text-[#D4D4D4]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>

                <div className="absolute bottom-3 right-5 text-[50px] font-black text-white/[0.03] leading-none select-none pointer-events-none">
                  {e.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-3 text-sm font-semibold">
        <span className="text-white">SSLC</span>
        <span className="text-white/30 text-lg">·</span>
        <span className="text-white">Diploma</span>
        <span className="text-white/30 text-lg">·</span>
        <span className="text-white">BCA</span>
      </div>
    </section>
  );
}
