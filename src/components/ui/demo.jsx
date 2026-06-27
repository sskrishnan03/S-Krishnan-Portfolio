import ExpandableGallery from './gallery-animation';

const demoItems = [
  { id: '01', title: 'AWS Cloud Foundations', subtitle: 'AWS Academy', date: '2025', accent1: '#db2777', accent2: '#d946ef', tags: ['Cloud Computing', 'EC2', 'S3'], pdf: '/certificates/AWS.pdf' },
  { id: '02', title: 'Data Analytics', subtitle: 'TCS iON', date: '2025', accent1: '#0d9488', accent2: '#2dd4bf', tags: ['Data Analysis', 'SQL'], pdf: '/certificates/Data Analytics.pdf' },
  { id: '03', title: 'Python Essentials 1', subtitle: 'Cisco', date: '2026', accent1: '#9333ea', accent2: '#a855f7', tags: ['Python', 'Functions'], pdf: '/certificates/Python Essentials 1 certificate.pdf' },
  { id: '04', title: 'Python Essentials 2', subtitle: 'Cisco', date: '2026', accent1: '#dc2626', accent2: '#ea580c', tags: ['Python', 'OOP'], pdf: '/certificates/Python Essentials 2 certificate.pdf' },
];

export default function DemoOne() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8">
      <ExpandableGallery items={demoItems} className="w-full max-w-7xl" />
    </div>
  );
}
