'use client'

interface CardProps {
  title: string;
  body: string;
}

export default function Card({ title, body }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg border border-[#E5E7EB] shadow-sm">
      <h3 className="text-lg font-semibold text-[#0B1220] mb-3">{title}</h3>
      <p className="text-base text-[#475569]">{body}</p>
    </div>
  );
}