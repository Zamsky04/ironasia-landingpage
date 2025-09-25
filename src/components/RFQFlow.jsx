import { useState } from 'react';
import { useI18n } from '../i18n/useI18n'; 

import { 
    PencilSquareIcon, 
    PaperAirplaneIcon, 
    MagnifyingGlassCircleIcon, 
    ChatBubbleLeftRightIcon,
    ScaleIcon,
    HandThumbUpIcon,
    CheckBadgeIcon,
    TruckIcon
} from '@heroicons/react/24/outline';


export default function RFQFlow() {
    const { tn } = useI18n();
    const steps = tn("rfq.steps") || [];
    const [open, setOpen] = useState(new Set());
    const toggle = (i) =>
        setOpen((prev) => {
            const n = new Set(prev);
            n.has(i) ? n.delete(i) : n.add(i);
            return n;
        });
        
    const stepIcons = [
        PencilSquareIcon, PaperAirplaneIcon, MagnifyingGlassCircleIcon, 
        ChatBubbleLeftRightIcon, ScaleIcon, HandThumbUpIcon, 
        CheckBadgeIcon, TruckIcon
    ];

    const DesktopItem = ({ globalIndex, title, desc }) => {
        const Icon = stepIcons[globalIndex] || PencilSquareIcon;
        return (
            <article

                className="group relative h-full rounded-2xl p-6 bg-white border border-slate-200
                           shadow-lg transition-all duration-300 ease-out cursor-default
                           hover:shadow-xl"
            >
                <div className="flex items-start justify-between gap-4">
                    <div className="inline-flex items-center justify-center size-12 rounded-xl 
                                    bg-primary-100 ring-4 ring-primary-50
                                    transition-transform duration-300 group-hover:scale-105">
                        <Icon className="size-6 text-primary-600" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                        {globalIndex + 1}
                    </span>
                </div>

                <div className="mt-4">
                    <h3 className="font-semibold text-lg text-slate-800">{title}</h3>
                    <div className="overflow-hidden">
                       <p className="mt-1 text-base text-slate-600 leading-relaxed transition-all duration-300 ease-out 
                                     max-h-0 opacity-0 group-hover:max-h-60 group-hover:opacity-100">
                           {desc}
                       </p>
                    </div>
                </div>
            </article>
        );
    };

    const MobileItem = ({ i, title, desc }) => {
        const isOpen = open.has(i);
        const Icon = stepIcons[i] || PencilSquareIcon;
        return (
             <li className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm p-1.5">
                <button
                    type="button"
                    onClick={() => toggle(i)}
                    className="w-full text-left p-4 flex items-center gap-4"
                >
                    <div className="inline-flex items-center justify-center flex-shrink-0 size-10 rounded-lg bg-primary-50 text-primary-600">
                       <Icon className="size-5" />
                    </div>
                    <h3 className="flex-grow text-base font-semibold text-slate-900">{title}</h3>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full flex-shrink-0">
                        {i + 1}
                    </span>
                </button>
                <div 
                    className={`transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? 'max-h-96 opacity-100 px-5 pb-5' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="h-px bg-slate-200 mb-3" />
                    <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
            </li>
        )
    }

    return (
        <section id="alur" className="relative py-16 md:py-20 bg-gradient-to-b from-primary-300 to-white">
            <div className="container-fluid">
                <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-center text-slate-900">
                    {tn("rfq.title")}
                </h2>
                <p className="mt-2 text-slate-600 max-w-3xl mx-auto text-center">{tn("rfq.desc")}</p>

                <div className="hidden lg:grid grid-cols-4 gap-6 mt-10">
                    {steps.map(([title, desc], idx) => (
                        <DesktopItem key={idx} globalIndex={idx} title={title} desc={desc} />
                    ))}
                </div>
                
                <ol className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:hidden">
                    {steps.map(([title, desc], i) => (
                        <MobileItem key={i} i={i} title={title} desc={desc} />
                    ))}
                </ol>
            </div>
        </section>
    );
}