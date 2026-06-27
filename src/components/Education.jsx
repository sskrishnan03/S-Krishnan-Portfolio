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
    <section className="relative w-full min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 rounded-full bg-[#ff2a2a]/[0.03] blur-3xl" />
        <div className="absolute bottom-[15%] right-[8%] w-96 h-96 rounded-full bg-[#ff2a2a]/[0.02] blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 mb-10 md:mb-14">
        <div className="inline-flex items-center gap-3 mb-5">
          <span className="w-8 h-[3px] rounded-full bg-[#ff2a2a]" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-400">Education</span>
          <span className="w-8 h-[3px] rounded-full bg-[#ff2a2a]" />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1] mb-4">
          Academic <span className="text-[#ff2a2a]">Journey</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed font-medium">
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
                className="group relative bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.1)] transition-all duration-500 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Top accent gradient bar */}
                <div className="h-1 bg-gradient-to-r from-[#ff2a2a] via-[#ff2a2a]/60 to-[#ff2a2a]/10" />

                <div className="px-6 md:px-8 pt-6 md:pt-8 pb-6 md:pb-8 flex flex-col gap-5">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#ff2a2a]/10 to-[#ff2a2a]/5 border border-[#ff2a2a]/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#ff2a2a]" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-gray-900 text-lg font-black tracking-tight leading-tight">{e.title}</h3>
                        <p className="text-gray-500 text-xs font-medium mt-0.5">{e.qualification}</p>
                      </div>
                    </div>
                    {e.grade && (
                      <div className="flex flex-col items-end">
                        <span className="text-lg md:text-xl font-black text-[#ff2a2a] leading-none">{e.grade}</span>
                        <span className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider mt-0.5">{e.gradeLabel}</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-xs leading-relaxed">{e.description}</p>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-gray-100 via-gray-100 to-transparent" />

                  {/* Details grid */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">{e.type}</p>
                        <p className="text-gray-900 text-xs font-medium mt-0.5">{e.school}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Location</p>
                        <p className="text-gray-900 text-xs font-medium mt-0.5">{e.location}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Building2 className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">{e.boardLabel}</p>
                        <p className="text-gray-900 text-xs font-medium mt-0.5">{e.board}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" strokeWidth={1.5} />
                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold text-gray-400 uppercase tracking-wider">Passing Year</p>
                        <p className="text-gray-900 text-xs font-medium mt-0.5">{e.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Subjects */}
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#ff2a2a] mb-2.5">Major Subjects</p>
                    <div className="flex flex-wrap gap-1.5">
                      {e.subjects.map((s, j) => (
                        <span
                          key={j}
                          className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-100 text-[10px] font-semibold text-gray-600"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>

                {/* Card number watermark */}
                <div className="absolute bottom-3 right-5 text-[50px] font-black text-gray-50 leading-none select-none pointer-events-none">
                  {e.id}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progression line */}
      <div className="mt-12 flex items-center justify-center gap-3 text-sm font-semibold">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
          SSLC
        </span>
        <span className="text-gray-300 text-lg">·</span>
        <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
          Diploma
        </span>
        <span className="text-gray-300 text-lg">·</span>
        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
          BCA
        </span>
      </div>
    </section>
  );
}
